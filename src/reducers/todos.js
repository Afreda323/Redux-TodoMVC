import {
  ADD_TODO,
  CHECK,
  CLEAR_COMPLETED,
  DELETE_TODO,
  EDIT_TODO
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        { id: Date.now(), text: action.payload, completed: false },
        ...state
      ];
    case CHECK:
      return state.map(
        todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
      );
    case EDIT_TODO:
    console.log(action.payload)
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
}
