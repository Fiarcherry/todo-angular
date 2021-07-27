import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";

export const selectTodos = (state: AppState) => state.todos;

export const selectDoneCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => item.done).length
)

export const selectNotDoneCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => !item.done).length
)