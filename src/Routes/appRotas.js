import React, { useEffect } from 'react';
import RoutesHome from './RoutesHome';
import { Login } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();



export default function AppRotas() {
  const { navigate } = useNavigation()

  async function verifylogin(){
    let islogged = await AsyncStorage.getItem("login")
    // if(islogged){navigate("Home")}
  }

  useEffect(()=>{
    verifylogin()
  },[])
  return <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Create account' component={CreateAccount} />
      <Stack.Screen name='Home' component={RoutesHome} />
    </Stack.Navigator>
}
