import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import * as TodosActions from '../state/actions/todos.actions';
import * as TodosSelectors from '../state/selectors/todos.selectors';
import { AppState } from '../state/app.state';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(
    private store: Store<AppState>
  ) { }
  
  getAll(): Observable<Todo[]> {
    return this.store.select(TodosSelectors.selectVisibleTodos)
  }
  
  // get(id: number): Observable<Todo | undefined> {
  //   console.log('getTodo', id)

  //   const todo = this.store.select(TodosSelectors.selectTodoById({ id }))
    
  //   console.log('getTodo', todo)

  //   return todo
  // }

  add(label: string): void {
    const maxId: number = this.findMaxTodoId()
    const nextId: number = maxId + 1

    const todo: Todo = {
      id: nextId,
      label: label,
      important: false,
      done: false
    }

    this.store.dispatch(TodosActions.addTodo({ todo }));
  }

  updateLabel(id: number, label: string = ''): void {
    this.store.dispatch(TodosActions.updateLabelTodo({ id, label }))
  }
  
  toggleImportant(id: number): void {
    this.store.dispatch(TodosActions.toggleImportantTodo({ id }))
  }
    
  toggleDone(id: number): void {
    this.store.dispatch(TodosActions.toggleDoneTodo({ id }))
  }
  
  delete(id: number): void {
    this.store.dispatch(TodosActions.deleteTodo({ id }))
  }
  
  clear(): void {
    this.store.dispatch(TodosActions.clearTodos())
  } 

  findMaxTodoId(): number {
    let todos: Todo[] = []

    this.getAll().pipe(first()).subscribe((data) => todos = data)

    return todos
      .map((todo) => todo.id)
      .reduce((prev, curr) => {
        return curr > prev ? curr : prev
      }, 0)
  }
}
