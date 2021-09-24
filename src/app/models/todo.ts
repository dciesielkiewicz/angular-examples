export class Todo {
  id: string;
  title: string;
  checked: boolean;
  deleteLoading: boolean;

  constructor({ id, title, checked }: Todo) {
    this.id = id;
    this.title = title;
    this.checked = checked;
    this.deleteLoading = false;
  }
}
