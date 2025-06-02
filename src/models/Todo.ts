export class Todo {
  id: number;
  content: string;
  isDone: boolean;
  constructor(content: string, isDone: boolean) {
    this.id = Math.random();
    this.content = content;
    this.isDone = isDone;
  }
}
