import { createAction, props } from "@ngrx/store";
import { PageActionTypes } from "./actionTypes";

export const updatePage = createAction(
  PageActionTypes.UpdatePage, 
  props<{page: number}>()
);

export const incrementPage = createAction(
  PageActionTypes.IncrementPage
);

export const decrementPage = createAction(
  PageActionTypes.DecrementPage
);