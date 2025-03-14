import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { Chat, Message } from '../models/Chat';

export class ChatController {
  private openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY ?? '',
  });

  private chat = new Chat();

  private readonly systemPrompt: Message = {
    role: 'system',
    content: `You are an AI assistant for a portfolio website. Guidelines:
    - Only answer questions about the portfolio owner's professional experience, skills, and work.
    - Politely deflect questions about weather, general topics, or personal matters with: "You should ask about me!"
    - Keep responses concise (max 2-3 sentences).
    - Be professional but friendly.`
  };

  async processMessage(message: string) {
    try {
      if (!process.env.OPENROUTER_API_KEY) {
        throw new Error('OpenRouter API key is not configured');
      }

      this.chat.addMessage('user', message);

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': `${process.env.NEXT_PUBLIC_SITE_URL}`,
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3-sonnet',
          messages: [this.systemPrompt, ...this.chat.getMessages()],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenRouter API Error:', error);
        throw new Error('API request failed');
      }

      const completion = await response.json();
      const assistantResponse = completion.choices[0].message.content;
      this.chat.addMessage('assistant', assistantResponse);

      return { response: assistantResponse };
    } catch (error) {
      console.error('ChatController Error:', error);
      throw error;
    }
  }
}
