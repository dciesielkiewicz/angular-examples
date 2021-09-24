import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Todo } from 'app/models/todo';
import { TodoService } from 'app/services/todo.service';

import { DeleteTodoComponent } from '../delete-todo/delete-todo.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();
  @ViewChild('titleInput') titleInput: ElementRef<MatInput>;

  editable = false;
  isSubmitting = false;

  todoItemForm: FormGroup;
  checked = new FormControl(false);
  title = new FormControl('');

  constructor(
    fb: FormBuilder,
    readonly dialog: MatDialog,
    private snackbar: MatSnackBar,
    private todoService: TodoService
  ) {
    this.todoItemForm = fb.group({
      checked: this.checked,
      title: this.title,
    });
  }

  ngOnInit(): void {
    this.checked.setValue(this.todo.checked);
    this.title.setValue(this.todo.title);
  }

  enableEdit(): void {
    this.editable = true;
    setTimeout(() => this.titleInput.nativeElement.focus());
  }

  handleToggleTodoClicked(): void {
    this.checked.setValue(!this.checked.value);
    this.toggleTodo();
  }

  toggleTodo(): void {
    const checked = this.todo.checked;
    this.todo.checked = this.checked.value;
    this.todoService.updateTodo(this.todo).subscribe({
      error: () => {
        this.checked.setValue(checked);
        this.todo.checked = checked;
        this.snackbar.open('Error while toggling todo', 'Close');
      }
    });
  }

  submitHandler(event: Event): void {
    event.preventDefault();
    if (!this.todoItemForm.valid) { return; }
    this.isSubmitting = true;
    this.todo.title = this.title.value;
    this.todoService.updateTodo(this.todo).subscribe({
      complete: () => {
        this.editable = false;
        this.isSubmitting = false;
      },
      error: () => {
        this.isSubmitting = false;
        this.snackbar.open('Error while updating todo', 'Close');
      },
    });
  }

  showDeleteTodoModal(): void {
    const deleteDialogRef = this.dialog.open(DeleteTodoComponent, {
      data: {
        todo: this.todo,
      },
    });
    deleteDialogRef.componentInstance.deleteTodo.subscribe((todo) => {
      this.deleteTodo.emit(todo);
    });
  }
}
