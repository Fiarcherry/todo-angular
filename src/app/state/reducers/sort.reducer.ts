import { createReducer, on } from "@ngrx/store";
import * as SortActions from 'src/app/state/actions/sort.actions';

const initialState: Readonly<string> = 'none'

export const sortReducer = createReducer(
  initialState,
  on(SortActions.updateSort, (state, { sort }) => sort)
);