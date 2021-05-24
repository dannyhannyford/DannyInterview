import React from 'react';
import {View, FlatList} from 'react-native';
import TodoListItem from './TodoListItem';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo, toggleTodo} from '../../actions/action';

const TodosList = () => {
  const {todos} = useSelector(state => state.todos);
  console.log('TodosList.js -- todos:', todos);
  const dispatch = useDispatch();

  const dumpsterTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id, todo) => {
    dispatch(toggleTodo(id, todo));
  };

  const renderItem = ({item}) => {
    return (
      <TodoListItem
        todo={item}
        dumpsterTodo={dumpsterTodo}
        handleToggle={handleToggle}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default TodosList;
