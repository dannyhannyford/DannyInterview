import AsyncStorage from '@react-native-async-storage/async-storage';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TODOS_LOADED = 'TODOS_LOADED';
export const SAVE_NEW_TODO = 'SAVE_NEW_TODO';

export const addTodo = todo => async dispatch => {
  try {
    const jsonValue = JSON.stringify(todo);
    const id = todo.id.toString();
    await AsyncStorage.setItem(id, jsonValue);
  } catch (e) {
    console.log('action.js -- e:', e);
  }
  dispatch({
    type: ADD_TODO,
    payload: {
      todo,
    },
  });
};

export const deleteTodo = id => async dispatch => {
  try {
    let todoId = id.toString();
    await removeValue(todoId);
  } catch (e) {
    console.log('action.js -- e:', e);
  }
  dispatch({
    type: DELETE_TODO,
    payload: {id},
  });
};

export const toggleTodo = (id, isCompleted) => async dispatch => {
  try {
    let todoId = id.toString();
    let merge = {completed: !isCompleted};
    const jsonValue = JSON.stringify(merge);
    await toggleTodoAsyncStorage(todoId, jsonValue);
  } catch (e) {
    console.log('action.js -- e:', e);
  }
  dispatch({
    type: TOGGLE_TODO,
    payload: {id},
  });
};

export async function fetchTodos(dispatch, getState) {
  const response = await getTodos();
  console.log('action.js -- response:', response);
  dispatch({type: TODOS_LOADED, payload: response});
}

async function getTodos() {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    let values = await AsyncStorage.multiGet(keys);
    let todos = values.map(e => JSON.parse(e[1]));
    return todos !== null ? todos : [];
  } catch (e) {
    console.log('action.js -- e:', e);
  }
}

const removeValue = async id => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (e) {
    console.log('action.js -- e:', e);
  }
};

const toggleTodoAsyncStorage = async (id, todo) => {
  try {
    let todoId = id.toString();
    await AsyncStorage.mergeItem(todoId, todo);
  } catch (e) {
    console.log('action.js -- e:', e);
  }
};
