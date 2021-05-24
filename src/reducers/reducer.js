import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TODOS_LOADED,
} from '../actions/action';

const initialState = {
  todos: [],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const {todo} = action.payload;

      return {
        ...state,
        todos: [...state.todos, todo],
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
        const {id} = action.payload;
        return todo.id === id ? {...todo, completed: !todo.completed} : todo;
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
