import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../actions/action';

const TodoInput = () => {
  const [text, setText] = useState('');
  const {todos} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const appendTodoList = todo => dispatch(addTodo(todo));

  function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
  }

  const submitTodo = () => {
    const todo = {id: nextTodoId(todos), text: text, completed: false};

    appendTodoList(todo);
    setText('');
  };
  return (
    <View style={styles.root}>
      <Text>
        <Icon.Button
          name="add-to-list"
          backgroundColor="#4d089a"
          onPress={submitTodo}
        />
      </Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="black"
        placeholder="todo..."
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flexDirection: 'row', alignItems: 'center'},
  input: {
    color: 'black',
  },
});
export default TodoInput;
