import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTodo, deleteTodo} from '../../actions/action';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoListItem = ({todo}) => {
  const {text, completed, id} = todo;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const dumpsterTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={styles.root}>
      <BouncyCheckbox
        fillColor="green"
        iconStyle={{borderColor: 'green'}}
        onPress={isChecked => {
          setIsChecked(isChecked => !isChecked);
          dispatch(toggleTodo(id));
        }}
      />
      <Text style={isChecked ? styles.checked : styles.unChecked}>{text}</Text>
      <Text>
        <Icon.Button
          name="delete-outline"
          backgroundColor="#4d089a"
          onPress={dumpsterTodo}
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
