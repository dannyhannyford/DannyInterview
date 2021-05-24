/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';
import {useDispatch} from 'react-redux';
import {fetchTodos} from './actions/action';
import {Navigation} from 'react-native-navigation';

const App = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos);
  }, []);

  return <HomeScreen componentId={props.componentId} />;
};

export default App;
