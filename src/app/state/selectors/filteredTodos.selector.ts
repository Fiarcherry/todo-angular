import { createSelector } from "@ngrx/store"
import { Filter } from "src/app/models/filter.model"
import { Todo } from "src/app/models/todo.model"
import { selectFilter } from './filter.selectors'
import { selectTodos } from './todos.selectors'

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => applyFilter(todos, filter) 
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