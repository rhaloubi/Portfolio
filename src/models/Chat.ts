export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export class Chat {
  private session: ChatSession;

  constructor() {
    this.session = {
      id: crypto.randomUUID(),
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  addMessage(role: Message['role'], content: string): void {
    this.session.messages.push({
      role,
      content,
      timestamp: new Date()
    });
    this.session.updatedAt = new Date();
  }

  getMessages(): Message[] {
    return this.session.messages;
  }

  getSession(): ChatSession {
    return this.session;
  }
}