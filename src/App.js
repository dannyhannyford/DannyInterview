/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './screens/HomeScreen';

const App = props => {
  return <HomeScreen componentId={props.componentId} />;
};

App.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

export default App;
