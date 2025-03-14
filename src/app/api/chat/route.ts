import { NextResponse } from 'next/server';
import { ChatController } from '../../../controllers/ChatController';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    const chatController = new ChatController();
    const result = await chatController.processMessage(message);
    return NextResponse.json(result);

  } catch (error) {
    console.error('Route Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process message' },
      { status: 500 }
    );
  }
}