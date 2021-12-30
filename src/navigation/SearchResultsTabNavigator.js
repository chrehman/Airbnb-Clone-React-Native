import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { View, Text } from 'react-native'
import SearchResultMaps from '../screens/SearchResultMaps';
import SearchResults from '../screens/SearchResults';

const SearchResultsTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#f15454',
            tabBarLabelStyle: { fontSize: 12,fontWeight:'bold' },
            tabBarIndicatorStyle:{backgroundColor:'#f15454'}
          }}
        >
            <Tab.Screen name="list" component={SearchResults} />
            <Tab.Screen name="map" component={SearchResultMaps} />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
