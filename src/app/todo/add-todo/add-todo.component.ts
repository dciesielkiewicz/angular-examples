import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  @Output() addTodo = new EventEmitter<Todo>();
  @ViewChild('addTodoInput') addTodoInput: ElementRef<MatInput>;

  isSubmitting = false;

  addTodoForm: FormGroup;
  title = new FormControl('');

  constructor(
    fb: FormBuilder,
    private snackbar: MatSnackBar,
    private todoService: TodoService
  ) {
    this.addTodoForm = fb.group({
      title: this.title,
    });
  }

  onSubmit(): void {
    if (!this.addTodoForm.valid) { return; }
    this.isSubmitting = true;

    const newTodo: TFormTodo = {
      title: this.title.value,
      checked: false
    };
    this.todoService.addTodo(newTodo).subscribe({
      next: (todo: Todo) => {
        this.addTodo.emit(todo);
        this.isSubmitting = false;
        this.title.reset();
      },
      error: () => {
        this.snackbar.open('Error while adding todo', 'Close');
        this.isSubmitting = false;
      }
    });
  }

  focusAdd(): void {
    this.addTodoInput.nativeElement.focus();
  }
}
