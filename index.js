/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import AddTodos from './src/screens/AddTodos';
import App from './src/App';
import store from './src/store/store';
import {Provider} from 'react-redux';

Navigation.registerComponent('App', () => props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
));
Navigation.registerComponent('Todos', () => props => (
  <Provider store={store}>
    <AddTodos />
  </Provider>
));

Navigation.setDefaultOptions({
  statusBar: {
    visible: false,
    backgroundColor: '#4d089a',
  },
  topBar: {
    drawBehind: false,
    title: {
      text: 'Home',
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});
