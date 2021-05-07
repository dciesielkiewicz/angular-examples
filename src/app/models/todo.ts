export class Todo {
  id: string;
  title: string;
  checked: boolean;

  constructor({ id, title, checked }: Todo) {
    this.id = id;
    this.title = title;
    this.checked = checked;
  }
}
