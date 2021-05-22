/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from './src/App';
import AddTodos from './src/screens/AddTodos';
import store from './src/store/store';
import {Provider} from 'react-redux';

Navigation.registerComponent('App', () => props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
));
Navigation.registerComponent('AddTodos', () => props => (
  <Provider store={store}>
    <AddTodos />
  </Provider>
));

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
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
