export class Todo {
  content: string;
  isDone: boolean;
  constructor(content: string, isDone: boolean) {
    this.content = content;
    this.isDone = isDone;
  }
}
