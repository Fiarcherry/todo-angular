import { createReducer, on } from "@ngrx/store";
import * as FilterActions from 'src/app/state/actions/filter.actions';
import { Filter } from "src/app/models/filter.model";
import { get as filterHandlerGet } from 'src/app/handlers/filter.handler'

const initialState: Readonly<Filter> = filterHandlerGet()

export const filterReducer = createReducer(
  initialState,
  on(FilterActions.updateFilter, (state, { filter }) => filter)
);