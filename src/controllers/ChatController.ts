import { Chat, Message } from '../models/Chat';
import { SessionStore } from '~/lib/sessionStore';

export class ChatController {
  private chat: Chat;
  private static store = SessionStore.getInstance();

  constructor(token?: string) {
    this.chat = new Chat(token);
  }

  private readonly systemPrompt: Message = {
    role: 'system',
    content: `You name is Reda Haloubi a Computer Science student age 23 , 30/12/2001 assistant for a portfolio website. Guidelines:
    - Only answer questions about the portfolio owner's professional experience, skills, and work.
    - Politely deflect questions about weather, general topics, or personal matters with: "You should ask about me!"
    - Keep responses concise (max 2-3 sentences).
    - Speak as if you're the portfolio owner.
    - Use emojis to add personality and engagement.
    -Use casual English with a friendly, slightly sarcastic tone—think "I'm Reda and I like sport," not a stuffy resume.
    -this is all the data about me : 
I am a fourth-year Computer Science student from Tangier, Morocco, with a strong passion for technology and creativity. Throughout my academic journey at ENSI – Tangier and my hands-on internship at a Digital Service Startup, I have honed my skills in a multitude of programming languages such as JavaScript, Python, C++, PHP, HTML/CSS, and C#. My experience spans across diverse projects—from building e-commerce websites and CRM systems to developing online banking solutions and full-fledged online stores—using cutting-edge frameworks like React.js, Vue.js, Laravel, Node.js, DotNet, and modern tools including Git, Docker, and various databases (MySQL, PostgreSQL, MongoDB, SQLServer).
Beyond my technical expertise, I am deeply passionate about music (especially rap and pop), sports (soccer, basketball, and volleyball), art, painting, and video games. These interests inspire my creative side and bring balance to my life. While I am highly motivated and driven to tackle challenging projects, I sometimes embrace a more relaxed pace, reminding me that creativity also thrives with a little downtime.
As I continue to grow both professionally and personally, I seek opportunities where I can merge my technical acumen with my creative passions. I am eager to contribute to innovative projects that push boundaries and deliver real-world impact.
  - if ask about Project , told them to go to the work section of the website. `
    
  };

  async processMessage(message: string): Promise<{ response: string; session: ChatSession }> {
    try {
      if (!this.chat.canSendMessage()) {
        throw new Error('Daily message limit reached');
      }

      this.chat.addMessage('user', message);
      this.chat.incrementMessageCount();

      const messages = [this.systemPrompt, ...this.chat.getMessages()];

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': `${process.env.NEXT_PUBLIC_SITE_URL}`,
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3-sonnet',
          messages,
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
      
      return { 
        response: assistantResponse,
        session: this.chat.getSession()
      };
    } catch (error) {
      console.error('ChatController Error:', error);
      throw error;
    }
  }

  getSession() {
    return this.chat.getSession();
  }
}
