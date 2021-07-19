import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Todo } from "../../models/todo.model";
import { Filter } from "src/app/models/filter.model";

export const selectTodos = (state: AppState) => state.todos;
export const selectFilter = (state: AppState) => state.filter;

const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos: Todo[], filter: Filter) => applyFilter(todos, filter) 
)

export const selectVisibleTodos = createSelector(
  selectFilteredTodos,
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