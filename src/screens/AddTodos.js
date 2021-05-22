import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddTodos = () => {
  return (
    <View style={styles.root}>
      <Text>AddTodos works!</Text>
    </View>
  );
};

AddTodos.options = {
  topBar: {
    title: {
      text: 'AddTodos',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default AddTodos;