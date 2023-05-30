import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './routes';
import TabNavigator from './tabBavigator';

const Tab = createBottomTabNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer >
    )
}