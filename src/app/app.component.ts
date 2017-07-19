import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from './models/todo';
import { TodoStore } from './stores/todo_store';
import { FilterComponent } from './components/filter_component';
import { TodoListComponent } from './components/todo_list_component';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
    <add-todo></add-todo>
    <br/>
    <br/>
    <filter (filterValue)='filterTodos($event)'></filter>
    <todo-list [todos]='filteredTodos | async'></todo-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  filteredTodos: Rx.Observable<Array<Todo>>;
  filter = new Rx.BehaviorSubject<string>('');

  constructor(private todoStore: TodoStore) {
    this.filteredTodos = this.filter.combineLatest(this.todoStore.todos, (filter, todos) => {
      return todos.filter((todo) => todo.description.includes(filter));
    });
  }

  filterTodos(filter: string) {
    this.filter.next(filter);
  }
}
