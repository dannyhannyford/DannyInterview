import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoListItem = ({todo, dumpsterTodo, handleToggle}) => {
  const {text, completed, id} = todo;
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <View style={styles.root}>
      <BouncyCheckbox
        fillColor="green"
        iconStyle={{borderColor: 'green'}}
        isChecked={isChecked}
        onPress={() => {
          handleToggle(id, isChecked);
          setIsChecked(isChecked => !isChecked);
        }}
      />
      <Text style={isChecked ? styles.checked : styles.unChecked}>{text}</Text>
      <Text>
        <Icon.Button
          name="delete-outline"
          backgroundColor="#4d089a"
          onPress={() => dumpsterTodo(id)}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checked: {
    textDecorationLine: 'line-through',
  },
  unChecked: {
    textDecorationLine: 'none',
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TodoListItem;
