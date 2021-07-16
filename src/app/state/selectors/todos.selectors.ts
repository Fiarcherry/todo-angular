import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Todo } from "../../models/todo.model";

export const selectTodos = (state: AppState) => state.todos;

export const selectVisibleTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos
);

export const selectTodoById = (props: { id: number }) => createSelector(
  selectTodos,
  (todos: Todo[]) =>  {
    return todos.filter((todo) => todo.id === props.id)
      .pop()
  }
)