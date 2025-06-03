export class Todo {
  id: string;
  content: string;
  isDone: boolean;
  constructor(content: string, isDone: boolean) {
    this.id = crypto.randomUUID();
    this.content = content;
    this.isDone = isDone;
  }
}
