import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Todo } from "../../models/todo.model";
import { Filter } from "src/app/models/filter.model";
import { pagesOptions } from "src/app/utils/pages.options";

export const selectTodos = (state: AppState) => state.todos;

export const selectDoneCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => item.done).length
)

export const selectNotDoneCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => !item.done).length
)