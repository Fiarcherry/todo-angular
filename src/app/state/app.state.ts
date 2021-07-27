import { Todo } from '../models/todo.model'
import { Filter } from '../models/filter.model';

export interface AppState {
  filter: Filter
  page: number
  query: string
  sort: string
  todos: Todo[]
}