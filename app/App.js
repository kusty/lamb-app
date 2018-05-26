/*
 * @Author: wayne
 * @Date: 2017-12-26 16:00:45
 * @Last Modified by: wayne
 * @Last Modified time: 2018-03-01 10:27:44
 */

import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';

import Storage from 'react-native-storage';
import navigator from './utils/navigator';
import AppNavigation from './routes';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
});

export default class App extends Component<{}> {
  render() {
    global.storage = storage;
    return (
      <AppNavigation
        ref={
          (navigatorRef) => {
            navigator.setContainer(navigatorRef);
          }
        }
      />
    );
  }
}
