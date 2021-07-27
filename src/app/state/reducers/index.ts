import { todosReducer } from './todos.reducer'
import { filterReducer } from './filter.reducer';
import { queryReducer } from './query.reducer';
import { pageReducer } from './page.reducer';

const reducers = {
  todos: todosReducer, 
  filter: filterReducer, 
  query: queryReducer, 
  page: pageReducer
}

export default reducers