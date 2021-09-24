import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    const todo = new Todo({
      id: 'todoId',
      title: 'Todo',
      checked: false,
      deleteLoading: false
    });
    expect(todo instanceof Todo).toBeTruthy();
  });
});
