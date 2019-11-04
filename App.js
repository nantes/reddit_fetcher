/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import RootNavigator from './src/navigator';
const App = createAppContainer(RootNavigator);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
