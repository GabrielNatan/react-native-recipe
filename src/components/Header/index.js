import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text,Image } from "react-native";
import perfil from "../../assets/perfil.webp";
import { AuthContext } from "../../context/AuthContext";
export const Header = ()=>{
    const { user } = useContext(AuthContext)
    return(
        <View style={styled.container}>
            <Text style={styled.text}>Hello, {user?.nome}</Text>
            <Image style={styled.image} source={perfil}/>
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:25,
        paddingHorizontal:20,
    },  
    text:{
        fontSize:28,
        fontWeight:"bold",
        color:"#0f1519"
    },
    image:{
        width:45,
        height:45,
        borderRadius:5
    }
})