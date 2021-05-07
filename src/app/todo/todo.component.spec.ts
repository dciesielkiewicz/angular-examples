import { render } from '@testing-library/angular';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  test('Should render children', async () => {
    const { getByText } = await render(TodoComponent);
    expect(getByText('Todo list')).toBeInTheDocument();
  });
});
