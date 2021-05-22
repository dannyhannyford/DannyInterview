import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
const TodoInput = ({}) => {
  const [text, setText] = useState('');

  const handleChange = e => setText(e.target.value);
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor="black"
        placeholder="todo..."
        value={text}
        onChange={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'black',
  },
});
export default TodoInput;
