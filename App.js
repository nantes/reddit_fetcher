/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import InitPage from './src/pages/InitPage.js';
import React from 'react';

export default () => (
  <Provider store={store}>
    <InitPage />
  </Provider>
);
