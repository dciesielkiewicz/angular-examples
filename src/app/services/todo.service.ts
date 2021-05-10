import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Todo } from '../models/todo';
import { TFormTodo } from '../todo/types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todos`);
  }

  addTodo(newTodo: TFormTodo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}/todos`, newTodo, httpOptions);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const updatedTodo: TFormTodo = {
      checked: todo.checked,
      title: todo.title,
    };
    return this.http.put<Todo>(`${environment.apiUrl}/todos/${todo.id}`, updatedTodo, httpOptions);
  }
}
