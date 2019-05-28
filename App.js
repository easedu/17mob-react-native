import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screen/Home/home';
import SeasonalDetails from './screen/SeasonalDetails/seasonalDetails';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SeasonalDetails: {
      screen: SeasonalDetails,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);