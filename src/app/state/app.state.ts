import { Todo } from 'src/app/models/todo.model'
import { Filter } from 'src/app/models/filter.model';

export interface AppState {
  filter: Filter
  page: number
  query: string
  sort: string
  todos: Todo[]
}