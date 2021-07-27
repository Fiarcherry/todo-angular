import { createSelector } from "@ngrx/store";
import { pagesOptions } from "src/app/utils/pages.options";
import { AppState } from "../app.state";
import { selectSearchedByQueryTodos } from "./searchedByQueryTodos.selector";

export const selectPage = (state: AppState) => state.page;

export const selectItemsPerPage = () => pagesOptions.itemsPerPage
const selectCanClickPagesCount = () => pagesOptions.canClickPagesCount

export const selectPagesCount = createSelector(
  [selectSearchedByQueryTodos, selectItemsPerPage],
  (todos, itemsPerPage) => calcPagesCount(todos.length, itemsPerPage)
)

export const selectPages = createSelector(
  selectPagesCount,
  (pagesCount) => {
    let result: number[] = []

    for (let i = 1; i < pagesCount + 1; i++) {
      result.push(i)
    }

    return result
  }
)

export const selectFirstPage = createSelector(
  selectPages,
  (pages) => pages[0]
)

export const selectLastPage = createSelector(
  selectPages,
  (pages) => pages[pages.length - 1]
)

export const selectMiddleFirstPage = createSelector(
  [selectPage, selectCanClickPagesCount],
  (page, canClickPagesCount) => page - canClickPagesCount
) 

export const selectMiddleLastPage = createSelector(
  [selectPage, selectCanClickPagesCount],
  (page, canClickPagesCount) => page + canClickPagesCount
) 

const selectMiddlePages = createSelector(
  [selectMiddleFirstPage, selectMiddleLastPage, selectFirstPage, selectLastPage],
  (middleFirstPage, middleLastPage, firstPage, lastPage) => {
    let result: number[] = []

    for (let i = middleFirstPage; i < middleLastPage + 1; i++) {
      if (i > firstPage && i < lastPage) {
        result.push(i)
      }
    }

    return result
  }
)

export const selectVisiblePages = createSelector(
  [selectFirstPage, selectMiddlePages, selectLastPage],
  (firstPage, middlePages, lastPage) => {
    let result: number[] = []

    result.push(firstPage)
    for (let i = 0; i < middlePages.length; i++) {
      result.push(middlePages[i])
    }
    result.push((lastPage))

    return result
  }
)

export const selectIsFirstPage = createSelector(
  [selectPage, selectFirstPage],
  (page, firstPage) => page <= firstPage
) 

export const selectIsLastPage = createSelector(
  [selectPage, selectLastPage],
  (page, lastPage) => page >= lastPage
) 

export const selectIsLastPageDeleted = createSelector(
  [selectPage, selectPagesCount],
  (page, pagesCount) => page > pagesCount 
)

const calcPagesCount = (length: number, perPage: number) => {
  let result = Math.floor(length / perPage)

  if (length % perPage !== 0) {
    result++
  }

  return result
}