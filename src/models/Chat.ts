export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class Chat {
  private messages: Message[] = [];

  addMessage(role: Message['role'], content: string): void {
    this.messages.push({ role, content });
  }

  getMessages(): Message[] {
    return this.messages;
  }
}