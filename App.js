import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Tabs } from "./src/components/Tabs";
import Home from "./src/pages/Home";
import { Recipe } from "./src/pages/Recipe";
export default function App(){
  return(
    <SafeAreaView style={styled.container}>
      <Recipe/>
      {/* <Home/> */}
      <Tabs/>
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