import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";

import RoutesHome from './RoutesHome';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import { Login } from '../pages/Login';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Recipe') {
                iconName = focused ? 'settings' : 'settings';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown:false
          })}
        >
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Home' component={RoutesHome} />
        <Tab.Screen name='Recipe' component={Recipe} />
      </Tab.Navigator>
}