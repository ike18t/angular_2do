import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoStore } from '../stores/todo_store';

@Component({
  selector: 'add-todo',
  template: `
    <input #todoInput placeholder='Enter a new todo'/>
    <button (click)='addTodo(todoInput)'>add</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  constructor(private todoStore: TodoStore) {}

  addTodo(todoInput: HTMLInputElement): void {
    this.todoStore.add(new Todo(todoInput.value));
    todoInput.value = '';
  }
}
