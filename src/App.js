/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {store} from './store/store';

const App = props => {
  return (
    <Provider store={store}>
      <HomeScreen componentId={props.componentId} />
    </Provider>
  );
};

App.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

export default App;
