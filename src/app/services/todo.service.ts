import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() { }

  fetchTodos(): Todo[] {
    this.todos = [{ id: 'todoId1', title: 'Todo 1', checked: false }];
    return this.todos;
  }

  addTodo(): Todo[] {
    this.todos.push({ id: 'todoId2', title: 'Todo 2', checked: false });
    return this.todos;
  }
}
