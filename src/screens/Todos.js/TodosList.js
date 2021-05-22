import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TodoListItem from './TodoListItem';
import {useSelector} from 'react-redux';

const TodosList = ({}) => {
  const todos = useSelector(state => state.todos);
  console.log('TodosList.js -- todos:', todos);

  const renderItem = ({item}) => <TodoListItem todo={item} />;
  return (
    <View>
      <FlatList
        data={todos.todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default TodosList;
