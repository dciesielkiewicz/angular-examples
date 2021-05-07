import { render } from '@testing-library/angular';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  test('Should render children', async () => {
    const { getByText } = await render(TodoListComponent);
    expect(getByText('Todo list content')).toBeInTheDocument();
  });
});

