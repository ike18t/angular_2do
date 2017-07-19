import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todo-list',
  template: `
    <ul *ngFor='let todo of todos; trackBy: description'>
      <li>
        <todo [todo]='todo'></todo>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos: Array<Todo>;
}
