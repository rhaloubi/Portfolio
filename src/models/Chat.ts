import { SessionStore } from "~/lib/sessionStore";

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export interface ChatSession {
  token: string;
  messageCount: number;
  lastReset: Date;
}

export class Chat {
  private messages: Message[] = [];
  private session: ChatSession;
  private static DAILY_LIMIT = 10;
  private static store = SessionStore.getInstance();

  constructor(token?: string) {
    const existingSession = token ? Chat.store.getSession(token) : null;
    
    this.session = existingSession ?? {
      token: token ?? crypto.randomUUID(),
      messageCount: 0,
      lastReset: new Date()
    };
  }

  private saveSession(): void {
    Chat.store.setSession(this.session.token, this.session);
  }

  incrementMessageCount(): void {
    this.session.messageCount += 1;
    this.saveSession();
  }

  addMessage(role: Message['role'], content: string): void {
    this.messages.push({ 
      role, 
      content,
      timestamp: new Date()
    });
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getSession(): ChatSession {
    return this.session;
  }

  canSendMessage(): boolean {
    const today = new Date();
    const lastReset = new Date(this.session.lastReset);

    if (today.toDateString() !== lastReset.toDateString()) {
      this.session.messageCount = 0;
      this.session.lastReset = today;
      return true;
    }

    return this.session.messageCount < Chat.DAILY_LIMIT;
  }
}