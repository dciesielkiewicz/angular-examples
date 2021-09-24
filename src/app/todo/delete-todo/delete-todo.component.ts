import { Component, EventEmitter, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from 'app/models/todo';
import { TodoService } from 'app/services/todo.service';

interface IDeleteTodoComponentData {
  todo: Todo;
}

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
})
export class DeleteTodoComponent {
  deleteTodo = new EventEmitter<Todo>();

  todo: Todo;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: IDeleteTodoComponentData,
    private dialogRef: MatDialogRef<DeleteTodoComponent>,
    private snackbar: MatSnackBar,
    private todoService: TodoService
  ) {
    this.todo = data.todo;
  }

  confirmDeleteTodo(): void {
    this.todo.deleteLoading = true;
    this.todoService.deleteTodo(this.todo).subscribe({
      next: () => {
        this.deleteTodo.emit(this.todo);
        this.todo.deleteLoading = false;
      },
      error: () => {
        this.todo.deleteLoading = false;
        this.snackbar.open('Error while deleting todo', 'Close');
      }
    });
  }

}
