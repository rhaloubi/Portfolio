import { NextResponse } from 'next/server';
import { ChatController } from '../../../../controllers/ChatController';
import { cookies } from 'next/headers';

const CHAT_TOKEN_KEY = 'chat_token';

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(CHAT_TOKEN_KEY)?.value;

    if (!token) {
      return NextResponse.json({ session: { messageCount: 0 } });
    }

    const chatController = new ChatController(token);
    const session = chatController.getSession();

    return NextResponse.json({ session });
  } catch (error) {
    console.error('Session Error:', error);
    return NextResponse.json(
      { error: 'Failed to get session' },
      { status: 500 }
    );
  }
}