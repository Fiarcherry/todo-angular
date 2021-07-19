import { createAction, props } from "@ngrx/store";
import { FilterActionTypes } from "./actionTypes";
import { filterTypes } from "src/app/models/filterTypes";

export const updateFilterType = createAction(
  FilterActionTypes.UpdateFilter, 
  props<{filterType: filterTypes}>()
);