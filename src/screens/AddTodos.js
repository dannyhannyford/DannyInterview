import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import TodosList from './todos/TodosList';
import TodoInput from './TodoInput';

const AddTodos = () => {
  return (
    <View style={styles.root}>
      <TodoInput />
      <TodosList />
    </View>
  );
};

AddTodos.options = {
  statusBar: {
    visible: false,
  },
  topBar: {
    drawBehind: false,
    title: {
      text: 'AddTodos',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    paddingTop: '15%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default AddTodos;
