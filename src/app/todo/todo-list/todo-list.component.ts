import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';
import { TodoService } from 'app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.fetchTodos();
  }

  addTodo(): void {
    this.todos = this.todoService.addTodo();
  }
}
