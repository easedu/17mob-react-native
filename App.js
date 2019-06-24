import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screen/Home/home';
import Categories from './screen/Categories/categories';
import DetailsCategories from './screen/DetailsCategories/detailsCategories';
import Details from './screen/Details/details';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Categories: {
      screen: Categories,
    },
    DetailsCategories: {
      screen: DetailsCategories,
    },
    Details: {
      screen: Details,
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