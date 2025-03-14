import { NextResponse } from 'next/server';
import { ChatController } from '../../../controllers/ChatController';
import { cookies } from 'next/headers';

const CHAT_TOKEN_KEY = 'chat_token';

export async function POST(req: Request) {
  try {
    // Get the cookie store and handle it properly
    const cookieStore = cookies();
    const token = (await cookieStore).get(CHAT_TOKEN_KEY)?.value ?? crypto.randomUUID();

    const { message } = await req.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    const chatController = new ChatController(token);
    const result = await chatController.processMessage(message);
    
    // Create response with the result
    const response = NextResponse.json(result);

    // Set cookie in the response
    response.cookies.set({
      name: CHAT_TOKEN_KEY,
      value: token,
      expires: new Date('2100-01-01'),
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    return response;

  } catch (error) {
    if (error instanceof Error && error.message === 'Daily message limit reached') {
      return NextResponse.json(
        { error: 'You have reached your daily message limit. Please try again tomorrow.' },
        { status: 429 }
      );
    }

    console.error('Route Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process message' },
      { status: 500 }
    );
  }
}