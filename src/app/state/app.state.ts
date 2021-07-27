import { Todo } from '../models/todo.model'
import { Filter } from '../models/filter.model';

export interface AppState {
  todos: Todo[]
  filter: Filter
  query: string
  page:  number
}