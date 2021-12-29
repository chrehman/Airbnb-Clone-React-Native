/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
  StatusBar,
  useColorScheme,
  FlatList,

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from './src/components/post';
import Home from './src/screens/Home';
import feed from './src/assets/data/feed';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import Guest from './src/screens/Guest';
import Router from './src/navigation/Router';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router/>
    </>
  );
};


export default App;
