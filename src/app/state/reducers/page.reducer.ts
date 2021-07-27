import { createReducer, on } from "@ngrx/store";
import * as PageActions from '../actions/page.actions';

const initialState: Readonly<number> = 1

export const pageReducer = createReducer(
  initialState,
  on(PageActions.updatePage, (state, { page }) => page),

  on(PageActions.incrementPage, state => state + 1),
  
  on(PageActions.decrementPage, state => state - 1)
)