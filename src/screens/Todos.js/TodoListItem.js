import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const TodoListItem = ({todo}) => {
  const {text, completed} = todo;
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
export default TodoListItem;
