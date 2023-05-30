import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { Intro } from '../screens/Intro';
import { Tools } from '../screens/tools';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Intro" component={Intro} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="gear" size={20} color="#4044c9" />
                ),
            }} />
            <Tab.Screen name="Main" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Icon name="book" size={20} color="#4044c9" />
                ),
            }} />
            <Tab.Screen name="Tools" component={Tools} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" size={20} color="#4044c9" />
                ),
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
