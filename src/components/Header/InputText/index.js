import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';

export const InputText = ()=>{
    const [text,setText] = useState('')
    return(
        <View  style={styled.container}>
            <Icon style={styled.icon} name="search" size={30} color="#CCC" />
            <TextInput
                style={styled.input}
                value={text}
                placeholder="place"
                keyboardType="default"
                onChangeText={(value)=>{setText(value)}}
            />
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        paddingHorizontal:20,
    },
    icon:{
        position:"absolute",
        left:30,
        top:17,
        zIndex:1

    },
    input:{
        borderRadius:10,
        paddingLeft:45,
        paddingRight:15,
        paddingVertical:15,
        backgroundColor:"#FFF",
        fontSize:18,
        color:"#CCC"
    }
})