import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home';
import SearchResults from '../screens/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const ExploreStack = () => {
    const Stack=createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Home}
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen name="SearchResults" component={SearchResultsTabNavigator}
            options={{
                title:"Search your destination",
            }}
            />
        </Stack.Navigator>
    )
}

export default ExploreStack
