import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppRotas from "./src/Routes/appRotas";
export default function App(){
  return(
    <SafeAreaView style={styled.container}>
      <NavigationContainer>
          <AppRotas/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  container:{
    backgroundColor:"#FBF9F6",
    height:"100%",
    width:"100%"
  }
})