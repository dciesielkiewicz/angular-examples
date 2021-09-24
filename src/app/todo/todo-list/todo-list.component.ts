import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from 'app/models/todo';
import { TodoService } from 'app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {

  loading = true;
  todos: Todo[] = [];

  constructor(private snackbar: MatSnackBar, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.fetchTodos().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackbar.open('Error while fetching todos', 'Close');
      }
    });
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index);
    }
  }
}
