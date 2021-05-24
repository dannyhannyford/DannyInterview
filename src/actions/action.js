import AsyncStorage from '@react-native-async-storage/async-storage';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TODOS_LOADED = 'TODOS_LOADED';
export const SAVE_NEW_TODO = 'SAVE_NEW_TODO';

export const addTodo = inputText => ({
  type: ADD_TODO,
  payload: {
    text: inputText,
  },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {id},
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {id},
});

export async function fetchTodos(dispatch, getState) {
  const response = await getTodos();
  console.log('action.js -- response:', response);
  dispatch({type: TODOS_LOADED, payload: response});
}

const getTodos = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log('action.js -- e:', e);
  }
};

// export const setTodos = async value => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem('todos', jsonValue);
//   } catch (e) {
//     // save error
//   }
// };
