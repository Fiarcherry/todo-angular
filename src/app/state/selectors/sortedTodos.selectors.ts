import { createSelector } from "@ngrx/store"
import { selectSort } from "./sort.selectors"
import { selectTodos } from './todos.selectors'

export const selectSortedTodos = createSelector(
  [selectTodos, selectSort], 
  ([...todos], sort) => {
    switch (sort) {
      case 'alphabetAsc':
        return todos.sort((a, b) => {
          return a.label > b.label ? 1 : -1
        })
      case 'alphabetDesc':
        return todos.sort((a, b) => {
          return a.label > b.label ? -1 : 1
        })
      case 'importantAsc':
        return todos.sort((a, b) => {
          return a.important < b.important ? 1 : -1
        })
      case 'importantDesc':
        return todos.sort((a, b) => {
          return a.important > b.important ? 1 : -1
        })
    
      default:
        return todos
    }
})