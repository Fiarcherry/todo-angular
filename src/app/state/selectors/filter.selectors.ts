import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Filter } from "src/app/models/filter.model";

export const selectFilter = (state: AppState) => state.filter;

export const selectFilterType = createSelector(
  selectFilter,
  (filter: Filter) => filter
);