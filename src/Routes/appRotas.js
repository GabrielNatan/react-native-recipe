import React from 'react';


import RoutesHome from './RoutesHome';
import { Login } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



export default function AppRotas() {
  return <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Create account' component={CreateAccount} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={RoutesHome} />
    </Stack.Navigator>
}
