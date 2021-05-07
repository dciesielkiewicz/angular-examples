import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo({ id: 'todoId', title: 'Todo', checked: false })).toBeTruthy();
  });
});
