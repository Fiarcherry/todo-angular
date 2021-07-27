import { createReducer, on } from '@ngrx/store';
import * as TodosActions from '../actions/todos.actions';
import { Todo } from 'src/app/models/todo.model';
import { get as todoHandlerGet} from '../../handlers/todos.handler'

const initialState: Readonly<Todo[]> = todoHandlerGet();

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.addTodo, (state, { todo }) => 
    ([ ...state, todo ])
  ),

  on(TodosActions.toggleImportantTodo, (state, { id }) => 
    state.map((todo) => todo.id === id ? { ...todo, important: !todo.important } : todo) 
  ),

  on(TodosActions.toggleDoneTodo, (state, { id }) => 
    state.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
  ),

  on(TodosActions.updateLabelTodo, (state, { id, label }) => 
    state.map((todo) => todo.id === id ? { ...todo, label: label } : todo)
  ),

  on(TodosActions.deleteTodo, (state, { id }) => 
    state.filter((todo) => todo.id !== id)
  ),
)