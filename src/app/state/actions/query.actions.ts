import { createAction, props } from "@ngrx/store";
import { QueryActionTypes } from "./actionTypes";

export const updateQuery = createAction(
  QueryActionTypes.UpdateQuery, 
  props<{query: string}>()
);