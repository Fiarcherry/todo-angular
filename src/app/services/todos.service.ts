import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import * as TodosActions from '../state/actions/todos.actions';
import * as TodosSelectors from '../state/selectors/todos.selectors';
import * as VisibleTodosSelectors from '../state/selectors/visibleTodos.selector';
import { AppState } from '../state/app.state';
import { first } from 'rxjs/operators';
import * as TodoHandler from '../handlers/todos.handler'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(
    private store: Store<AppState>
  ) { }
  
  getAll(): Observable<Todo[]> {
    return this.store.select(VisibleTodosSelectors.selectVisibleTodos)
  }

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
    TodoHandler.add(todo)
  }

  updateLabel(id: number, label: string): void {
    this.store.dispatch(TodosActions.updateLabelTodo({ id, label }))
    TodoHandler.updateLabel(id, label)
  }
  
  toggleImportant(id: number): void {
    this.store.dispatch(TodosActions.toggleImportantTodo({ id }))
    TodoHandler.toggleImportant(id)
  }
  
  toggleDone(id: number): void {
    this.store.dispatch(TodosActions.toggleDoneTodo({ id }))
    TodoHandler.toggleDone(id)
  }
  
  delete(id: number): void {
    this.store.dispatch(TodosActions.deleteTodo({ id }))
    TodoHandler.deleteById(id)
  }

  getDoneCount(): Observable<number> {
    return this.store.select(TodosSelectors.selectDoneCount)
  }

  getNotDoneCount(): Observable<number> {
    return this.store.select(TodosSelectors.selectNotDoneCount)
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
