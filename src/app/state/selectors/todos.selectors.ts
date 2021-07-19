import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Todo } from "../../models/todo.model";
import { Filter } from "src/app/models/filter.model";

import { selectFilter } from "./filter.selectors";
import { selectQuery } from "./query.selectors";

export const selectTodos = (state: AppState) => state.todos;

const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos: Todo[], filter: Filter) => applyFilter(todos, filter) 
)

const selectSearchedByQueryTodos = createSelector(
  [selectFilteredTodos, selectQuery],
  (todos, query) => applyQuery(todos, query)
)

export const selectVisibleTodos = createSelector(
  selectSearchedByQueryTodos,
  (todos: Todo[]) => todos
);

export const selectTodoById = (props: { id: number }) => createSelector(
  selectTodos,
  (todos: Todo[]) =>  {
    return todos.filter((todo) => todo.id === props.id)
      .pop()
  }
)

const applyFilter = (todos: Todo[], filter: Filter) => {
  switch (filter) {
    case Filter.All:
      return todos

    case Filter.Active:
      return todos.filter((item) => !item.done)

    case Filter.Done:
      return todos.filter((item) => item.done)

    default:
      return todos
  }
}

const applyQuery = (todos: Todo[], query: string) => {
  if (query.length === 0) {
    return todos
  }

  return todos.filter((item) => {
    return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
  })
}