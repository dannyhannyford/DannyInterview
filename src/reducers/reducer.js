import {combineReducers} from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TODOS_LOADED,
} from './../actions/action';

const initialState = {
  todos: [],
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const {text} = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {id: nextTodoId(state.todos), text: text, completed: false},
        ],
      };
    }
    case DELETE_TODO: {
      const {id} = action.payload;
      const updatedTodos = state.todos.filter(todo => {
        return todo.id !== id;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case TOGGLE_TODO: {
      const updatedTodos = state.todos.map(todo => {
        return todo.id === action.id
          ? {...todo, completed: !todo.completed}
          : todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case TODOS_LOADED: {
      return {...state, todos: action.payload};
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
