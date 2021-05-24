import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = ({componentId}) => {
  return (
    <View style={styles.root}>
      <Text>
        <Icon.Button
          name="list"
          backgroundColor="#4d089a"
          onPress={() =>
            Navigation.push(componentId, {
              component: {
                name: 'Todos',
                options: {
                  topBar: {
                    title: {
                      text: 'Todos',
                    },
                  },
                },
              },
            })
          }>
          Todos
        </Icon.Button>
      </Text>
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
