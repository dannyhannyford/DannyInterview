import React from 'react';
import {View, FlatList} from 'react-native';
import TodoListItem from './TodoListItem';
import {useSelector} from 'react-redux';

const TodosList = () => {
  const {todos} = useSelector(state => state.todos);
  console.log('TodosList.js -- todos:', todos);

  const renderItem = ({item}) => {
    return <TodoListItem todo={item} />;
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
