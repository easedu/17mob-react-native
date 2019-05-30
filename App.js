import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screen/Home/home';
import SeasonalDetails from './screen/SeasonalDetails/seasonalDetails';
import Categories from './screen/Categories/categories';
import DetailsCategories from './screen/DetailsCategories/detailsCategories';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SeasonalDetails: {
      screen: SeasonalDetails,
    },
    Categories: {
      screen: Categories,
    },
    DetailsCategories: {
      screen: DetailsCategories,
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