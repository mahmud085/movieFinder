import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';

import TopRated from './app/tabs/TopRated';
import Upcoming from './app/tabs/Upcoming';
import Popular from './app/tabs/Popular';

const MainScreenNavigator = TabNavigator({
  'Top Rated': { screen: TopRated },
  'Popular': { screen: Popular },
  'Upcoming': { screen: Upcoming },
});

export default MainScreenNavigator;
