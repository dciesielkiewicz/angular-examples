import { Todo } from 'app/models/todo';

export type TFormTodo = Pick<Todo, 'checked' | 'title'>;
