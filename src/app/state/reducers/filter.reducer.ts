import { createReducer, on } from "@ngrx/store";
import * as FilterActions from '../actions/filter.actions';
import { Filter } from "src/app/models/filter.model";
import { FILTER } from "src/app/utils/initial-filter";

const initialState: Readonly<Filter> = FILTER

export const filterReducer = createReducer(
  initialState,
  on(FilterActions.updateFilter, (state, { filter }) => filter)
);