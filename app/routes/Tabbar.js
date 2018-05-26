import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Image,
} from 'react-native';

import Home from '../pages/home';


const Tabbar = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => {
        return (
          <Image
            source={require('../images/icon_home.png')}
            style={{
              width: 20,
              height: 20,
              tintColor,
            }}
          />
        );
      },
    },
  },

}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    style: {
      height: 55,
      backgroundColor: 'white',
    },
    showIcon: true,
    activeBackgroundColor: '#fff',
    activeTintColor: 'red',
    inactiveTintColor: 'black',
    upperCaseLabel: false,
    indicatorStyle: {
      backgroundColor: 'white',
    },
    labelStyle: {
      fontSize: 14,
    },
  },
});


export default Tabbar;
