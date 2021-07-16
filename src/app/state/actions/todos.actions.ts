import { createAction, props } from '@ngrx/store';
import { TodoActionTypes } from './actionTypes'
import { Todo } from 'src/app/models/todo.model';

export const addTodo = createAction(
  TodoActionTypes.AddTodo, 
  props<{todo: Todo}>()
);

export const toggleImportantTodo = createAction(
  TodoActionTypes.ToggleImportantTodo, 
  props<{id: number}>()
);

export const toggleDoneTodo = createAction(
  TodoActionTypes.ToggleDoneTodo, 
  props<{id: number}>()
);

export const updateLabelTodo = createAction(
  TodoActionTypes.UpdateLabelTodo, 
  props<{ id: number, label: string }>()
);

export const deleteTodo = createAction(
  TodoActionTypes.DeleteTodo, 
  props<{id: number}>()
);

export const clearTodos = createAction(
  TodoActionTypes.ClearTodos
);