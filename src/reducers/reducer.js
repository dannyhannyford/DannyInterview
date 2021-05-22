import {combineReducers} from 'redux';
import {dummyData} from '../utils/dummyData';

// temp
// const initState = {};
// export const reducer = (state = initState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const initialState = {
  todos: dummyData,
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      };
    }
    // case 'todos/todoToggled': {
    //   return state.map(todo => {
    //     if (todo.id !== action.payload) {
    //       return todo;
    //     }

    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   });
    // }
    // case 'todos/todoDeleted': {
    //   return state.filter(todo => todo.id !== action.payload);
    // }
    // case 'todos/allCompleted': {
    //   return state.map(todo => {
    //     return {...todo, completed: true};
    //   });
    // }
    // case 'todos/completedCleared': {
    //   return state.filter(todo => !todo.completed);
    // }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
