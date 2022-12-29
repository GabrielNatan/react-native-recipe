import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from "./src/components/Header"
import { InputText } from "./src/components/InputText";
import { MiniCards } from "./src/components/MiniCards"
export default function App(){
  return(
    <SafeAreaView style={styled.container}>
      <Header/>
      <InputText/>
      <MiniCards/>
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