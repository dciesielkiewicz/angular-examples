import { fireEvent, render } from '@testing-library/angular';
import { waitFor } from '@testing-library/dom';
import { LoadingButtonComponent } from 'app/shared/loading-button/loading-button.component';
import { AddTodoComponent } from './add-todo.component';

const addTodo = jest.fn();
const checked = false;
const title = 'Todo title';

describe('AddTodoComponent', () => {
  test('Should properly focus on title input', async () => {
    const { getByLabelText, getByPlaceholderText } = await render(AddTodoComponent, {
      declarations: [LoadingButtonComponent],
    });
    const titleInput = getByPlaceholderText('Type your next todo');
    expect(titleInput).not.toHaveFocus();

    fireEvent.click(getByLabelText('Focus add todo input'));
    expect(titleInput).toHaveFocus();
  });

  test('Should display missing title validation', async () => {
    const { container, getByText, queryByText } = await render(AddTodoComponent, {
      declarations: [LoadingButtonComponent],
    });
    expect(queryByText('Title is required')).toBeNull();

    const submitButton = container.querySelector('button[type=submit]');
    if (submitButton) { fireEvent.click(submitButton); }

    expect(getByText('Title is required')).toBeInTheDocument();
  });

  // test('Should properly submit new todo', async () => {
  //   const { container, getByPlaceholderText } = await render(AddTodoComponent);
  //   const titleInput = getByPlaceholderText('Type your next todo');

  //   fireEvent.change(titleInput, { target: { value: title }});

  //   act(() => {
  //     const submitButton = container.querySelector('button[type=submit]');
  //     submitButton && fireEvent.click(submitButton);
  //   });

  //   await waitFor(() => {
  //     expect(addTodo).toBeCalledWith({ title, checked }, { resetForm, setSubmitting });
  //   });
  // });
});
