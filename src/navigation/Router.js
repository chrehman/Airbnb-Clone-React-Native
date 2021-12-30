import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import DestinationSearch from '../screens/DestinationSearch';
import Guest from '../screens/Guest';
import PostScreen from '../screens/PostScreen';
import HomeTabNavigator from './HomeTabNavigator';

const Router = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeTabNavigator} 
                options={{
                    headerShown: false
                }}
                />
                <Stack.Screen
                    options={{
                        title: 'Destination Search',

                        headerTitleAlign: 'center',

                    }}
                    name="Search" component={DestinationSearch} />
                <Stack.Screen
                    options={{
                        title: 'How many people?',
                        headerTitleAlign: 'center',
                    }}
                    name="Guest" component={Guest} />
                    <Stack.Screen
                    options={{
                        title: 'Accumodation',
                        headerTitleAlign: 'center',
                    }}
                    name="Post" component={PostScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
