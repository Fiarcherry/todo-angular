import { createSelector } from "@ngrx/store"
import { Todo } from "src/app/models/todo.model"
import { selectFilteredTodos } from "./filteredTodos.selector"
import { selectQuery } from "./query.selectors"


export const selectSearchedByQueryTodos = createSelector(
  [selectFilteredTodos, selectQuery],
  (todos, query) => applyQuery(todos, query)
)

const applyQuery = (todos: Todo[], query: string) => {
  if (query.length === 0) {
    return todos
  }

  return todos.filter((item) => {
    return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
  })
}