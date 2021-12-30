import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { View, Text } from 'react-native'
import DestinationSearch from '../screens/DestinationSearch';
import Home from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import ExploreStack from './ExploreStack';
const HomeTabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator
            screenOptions={{

                tabBarActiveTintColor: '#f15454',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            }}

        >
            <Tab.Screen name="Explore" component={ExploreStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="search" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Saved" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="heart-o" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Airbnb" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="airbnb" size={25} color={color} />
                    )
                }}
            />
             <Tab.Screen name="Messages" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="message-square" size={25} color={color} />
                    )
                }}
            />
<Tab.Screen name="profile" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <EvilIcons name="user" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>

    )
}

export default HomeTabNavigator
