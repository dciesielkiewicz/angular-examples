import { render } from '@testing-library/angular';
import { Todo } from 'app/models/todo';
import { TodoItemComponent } from './todo-item.component';

const todo: Todo = {
  id: 'todoId1',
  title: 'Todo 1',
  checked: false,
  deleteLoading: false,
};

describe('TodoItemComponent', () => {
  test('Should render children', async () => {
    const { getByText } = await render('<app-todo-item [todo]="todo"></app-todo-item>', {
      declarations: [TodoItemComponent],
      componentProperties: {
        todo,
      },
    });
    expect(getByText(todo.title)).toBeInTheDocument();
  });
});

