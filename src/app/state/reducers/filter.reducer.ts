import { createReducer, on } from "@ngrx/store";
import * as FilterActions from '../actions/filter.actions';
import { Filter } from "src/app/models/filter.model";
import { filterTypes } from "src/app/models/filterTypes";

const initialState: Readonly<Filter> = { type: filterTypes.All }

export const filterReducer = createReducer(
  initialState,
  on(FilterActions.updateFilterType, (state, { filterType }) => ({ ...state, type: filterType }) ),
);