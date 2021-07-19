import { createReducer, on } from "@ngrx/store";
import * as QueryActions from '../actions/query.actions';

const initialState: Readonly<string> = ''

export const queryReducer = createReducer(
  initialState,
  on(QueryActions.updateQuery, (state, { query }) => query)
);