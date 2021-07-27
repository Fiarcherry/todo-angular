import { createSelector } from "@ngrx/store"
import { Todo } from "src/app/models/todo.model"
import { selectItemsPerPage, selectPage, selectPagesCount } from "./page.selectors"
import { selectSearchedByQueryTodos } from "./searchedByQueryTodos.selector"


export const selectOnPageTodos = createSelector(
  [
    selectSearchedByQueryTodos,
    selectPagesCount,
    selectItemsPerPage,
    selectPage,
  ],
  (todos, pagesCount, itemsPerPage, page) => {
    const todosOnPages = calcTodosOnPages(todos, pagesCount, itemsPerPage)

    let result: Todo[] = []

    const index = page - 1

    if (todosOnPages[index]) {
      result = todosOnPages[index].map((item) => item)
    }

    return result
  }
)

const calcTodosOnPages = (todos: Todo[], pagesCount: number, itemsPerPage: number) => {
  let result = []

  for (let i = 0; i < pagesCount; i++) {
    let itemsOnPage = []

    for (let j = 0; j < itemsPerPage; j++) {
      const item = todos[i * itemsPerPage + j]
      itemsOnPage.push(item)
    }

    result.push(itemsOnPage)
  }

  const lastPage = result.length - 1

  if (result[lastPage]) {
    result[lastPage] = result[lastPage].filter((item) => item !== undefined)
  }

  return result
}