import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Todo } from '../models/todo';

@Injectable()
export class TodoStore {
  _todos: Rx.BehaviorSubject<Array<Todo>> = new Rx.BehaviorSubject<Array<Todo>>([]);
  public todos: Rx.Observable<Array<Todo>> = this._todos.asObservable();

  add(todo: Todo) {
    let todos = this._todos.value;
    todos.push(todo);
    this._todos.next(todos);
  }

  remove(todo: Todo) {
    let todos = this._todos.value;
    todos.splice(todos.indexOf(todo), 1);
    this._todos.next(todos);
  }
}
