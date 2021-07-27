import { createAction, props } from "@ngrx/store";
import { SortActionTypes } from "./actionTypes";

export const updateSort = createAction(
  SortActionTypes.UpdateSort, 
  props<{sort: string}>()
);