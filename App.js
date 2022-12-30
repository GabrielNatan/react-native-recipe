import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/pages/Home";
import { Recipe } from "./src/pages/Recipe";
export default function App(){
  return(
    <SafeAreaView style={styled.container}>
      <Recipe/>
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