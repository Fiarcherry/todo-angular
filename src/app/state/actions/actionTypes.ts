export enum TodoActionTypes {
  AddTodo = '[Todos] Add Todo',
  UpdateLabelTodo = '[Todos] Update Label Todo',
  ToggleImportantTodo = '[Todos] Toggle Important Todo',
  ToggleDoneTodo = '[Todos] Toggle Done Todo',
  DeleteTodo = '[Todos] Delete Todo',
  ClearTodos = '[Todos] Clear Todos',
}

export enum FilterActionTypes {
  UpdateFilter = '[Filter] Update Filter'
}

export enum QueryActionTypes {
  UpdateQuery = '[Query] Update Filter'
}