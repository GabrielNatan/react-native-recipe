import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "./src/components/Card";
import { Header } from "./src/components/Header"
import { InputText } from "./src/components/InputText";
import { MiniCards } from "./src/components/MiniCards";
import comida1 from "./src/assets/comida-1.webp"
import comida2 from "./src/assets/comida-2.jpg"
export default function App(){
  return(
    <SafeAreaView style={styled.container}>
      <Header/>
      <InputText/>
      <MiniCards/>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styled.conCard}
      >
        <Card img={comida1}/>
        <Card img={comida2}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  container:{
    backgroundColor:"#FBF9F6",
    height:"100%",
    width:"100%"
  },
  conCard:{
    flexDirection:"row",
    padding:20
  }
})