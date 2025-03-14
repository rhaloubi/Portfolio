import { ChatSession } from '../models/Chat';

export class SessionStore {
  private static instance: SessionStore;
  private sessions: Map<string, ChatSession> = new Map();

  private constructor() {}

  static getInstance(): SessionStore {
    if (!SessionStore.instance) {
      SessionStore.instance = new SessionStore();
    }
    return SessionStore.instance;
  }

  getSession(token: string): ChatSession | undefined {
    return this.sessions.get(token);
  }

  setSession(token: string, session: ChatSession): void {
    this.sessions.set(token, session);
  }
}