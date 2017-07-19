import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { TodoStore } from './stores/todo_store';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter_component';
import { TodoComponent } from './components/todo_component';
import { TodoListComponent } from './components/todo_list_component';
import { AddTodoComponent } from './components/add_todo_component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    FilterComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
