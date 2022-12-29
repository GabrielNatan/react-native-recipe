import React from "react";
import { StyleSheet, View } from "react-native";
import { Text,Image } from "react-native";
import perfil from "../../assets/perfil.webp";
export const Header = ()=>{
    return(
        <View style={styled.container}>
            <Text style={styled.text}>Hello, Gabriel</Text>
            <Image style={styled.image} source={perfil}/>
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:25,
        paddingHorizontal:20
    },  
    text:{
        fontSize:28,
        fontWeight:"bold"
    },
    image:{
        width:45,
        height:45,
        borderRadius:5
    }
})