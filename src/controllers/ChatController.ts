import { OpenRouter } from '@openrouter/sdk';
import { Chat, Message } from '../models/Chat';

export class ChatController {
  private openrouter: OpenRouter;
  private chat: Chat;

  constructor() {
    this.openrouter = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
    });
    this.chat = new Chat();
  }

  private async validateMessage(message: string): Promise<boolean> {
    // Add validation logic here
    return message.trim().length > 0;
  }

  private getSystemPrompt(): Message {
    return {
      role: 'system',
      content: `You are an AI assistant for a portfolio website. Guidelines:
      - Only answer questions about the portfolio owner's professional experience, skills, and work
      - Politely deflect questions about weather, general topics, or personal matters
      - Keep responses concise (max 2-3 sentences)
      - Be professional but friendly
      - If asked about topics outside your knowledge scope, respond with: "I can only assist with questions about the portfolio owner's professional work and experience."`,
    };
  }

  async processMessage(userMessage: string) {
    try {
      if (!await this.validateMessage(userMessage)) {
        throw new Error('Invalid message');
      }

      // Add user message to chat history
      this.chat.addMessage('user', userMessage);

      // Prepare messages for API call
      const messages = [
        this.getSystemPrompt(),
        ...this.chat.getMessages()
      ];

      // Get AI response
      const completion = await this.openrouter.chat.completions.create({
        model: "mistralai/mistral-7b-instruct",
        messages,
        temperature: 0.7,
        max_tokens: 150,
      });

      const assistantResponse = completion.choices[0].message.content;
      this.chat.addMessage('assistant', assistantResponse);

      return {
        success: true,
        data: {
          response: assistantResponse,
          session: this.chat.getSession()
        }
      };

    } catch (error) {
      console.error('ChatController Error:', error);
      return {
        success: false,
        error: 'Failed to process message'
      };
    }
  }
}