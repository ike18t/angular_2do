import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoStore } from '../stores/todo_store';
import { Todo } from '../models/todo';

@Component({
  selector: 'todo',
  template: `
    <span [ngClass]='{"completed": todo.completed}'>
      {{ todo.description }}
    </span>
    <input type='checkbox' [(ngModel)]='todo.completed'/>
    <i class='fa fa-trash-o' (click)='removeTodo(todo)'></i>
  `,
  styles: [`
    i {
      cursor: pointer;
    }
    .completed {
      text-decoration: line-through;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(private todoStore: TodoStore) {}

  removeTodo(todo: Todo) {
    this.todoStore.remove(todo);
  }
}
