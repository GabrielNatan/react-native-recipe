import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from "./src/components/Header"
import { InputText } from "./src/components/Header/InputText";
export default function App(){
  return(
    <SafeAreaView style={styled.container}>
      <Header/>
      <InputText/>
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