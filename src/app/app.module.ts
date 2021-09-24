import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material';
import { BackgroundComponent } from './shared/background/background.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoadingButtonComponent } from './shared/loading-button/loading-button.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { DeleteTodoComponent } from './todo/delete-todo/delete-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    LayoutComponent,
    LoaderComponent,
    LoadingButtonComponent,
    HomeComponent,
    TodoComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoItemComponent,
    DeleteTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
