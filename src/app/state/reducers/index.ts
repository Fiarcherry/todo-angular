import { todosReducer } from './todos.reducer'
import { filterReducer } from './filter.reducer';
import { queryReducer } from './query.reducer';
import { pageReducer } from './page.reducer';
import { sortReducer } from './sort.reducer';

const reducers = {
  filter: filterReducer, 
  page: pageReducer,
  query: queryReducer,
  sort: sortReducer, 
  todos: todosReducer, 
}

export default reducers