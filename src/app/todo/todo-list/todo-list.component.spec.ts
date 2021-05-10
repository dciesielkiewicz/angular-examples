import { render } from '@testing-library/angular';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  test('Should render children', async () => {
    const { getByText } = await render(TodoListComponent, {
      declarations: [TodoItemComponent],
    });
    expect(getByText('Todo list content')).toBeInTheDocument();
  });
});

