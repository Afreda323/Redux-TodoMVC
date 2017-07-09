import { ADD_TODO, CHECK, CLEAR_COMPLETED, DELETE_TODO, EDIT_TODO } from "./types";

export function check(id) {
  return {
    type: CHECK,
    payload: id
  };
}
export function editTodo(text, id) {
  return {
    type: EDIT_TODO,
    payload: { id, text }
  };
}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  };
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  };
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  };
}
