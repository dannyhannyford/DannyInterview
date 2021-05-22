import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = ({componentId}) => {
  return (
    <View style={styles.root}>
      <Text>HomeScreen works!</Text>
      <Button
        title="Push AddTodos Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: 'AddTodos',
              options: {
                topBar: {
                  title: {
                    text: 'AddTodos',
                  },
                },
              },
            },
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default HomeScreen;
