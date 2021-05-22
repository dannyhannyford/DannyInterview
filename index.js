/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './src/App';
import AddTodos from './src/screens/AddTodos';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('AddTodos', () => AddTodos);

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
