import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInput } from '@angular/material/input';
import { Todo } from 'app/models/todo';
import { TodoService } from 'app/services/todo.service';
import { TFormTodo } from '../types';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @ViewChild('addTodoInput') addTodoInput: ElementRef<MatInput>;

  title = '';

  constructor(private snackbar: MatSnackBar, private todoService: TodoService) { }

  onSubmit(): void {
    if (!this.title) {
      return;
    }

    const newTodo: TFormTodo = {
      title: this.title,
      checked: false
    };
    this.todoService.addTodo(newTodo).subscribe({
      next: (todo: Todo) => {
        this.addTodo.emit(todo);
        this.title = '';
      },
      error: () => {
        this.snackbar.open('Error while adding todo', 'Close');
      }
    });
  }

  focusAdd(): void {
    this.addTodoInput.nativeElement.focus();
  }
}
