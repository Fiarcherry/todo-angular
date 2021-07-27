import { createSelector } from "@ngrx/store"
import { selectOnPageTodos } from "./onPageTodos.selector"


export const selectVisibleTodos = createSelector(
  selectOnPageTodos,
  (todos) => {
    return todos}
)