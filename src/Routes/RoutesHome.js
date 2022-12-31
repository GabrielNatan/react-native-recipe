import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Recipe from '../pages/Recipe';

const Stack = createNativeStackNavigator();

export default function RoutesHome({ ComponentePrincipal = Home }) {
    return <Stack.Navigator 
            screenOptions={{
                headerShown:false,
            }}
        >
        <Stack.Screen name='HomeScreen' component={ComponentePrincipal} />
        <Stack.Screen name='RecipeScreen' component={Recipe} />
    </Stack.Navigator>
}