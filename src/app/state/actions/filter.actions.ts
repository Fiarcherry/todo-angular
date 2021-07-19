import { createAction, props } from "@ngrx/store";
import { FilterActionTypes } from "./actionTypes";
import { Filter } from "src/app/models/filter.model";

export const updateFilter = createAction(
  FilterActionTypes.UpdateFilter, 
  props<{filter: Filter}>()
);