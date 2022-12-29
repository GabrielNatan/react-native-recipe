import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

export const MiniCards = ()=>{
    return(
        <View style={styled.overflow}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}  
                showsVerticalScrollIndicator={false}
                style={styled.container}>
                <View style={styled.card}>
                    <Text style={styled.text}>Homemade Pizza</Text>
                </View>
                <View style={styled.card}>
                    <Text style={styled.text}>Lemon Fresh</Text>
                </View>
                <View style={styled.card}>
                    <Text style={styled.text}>Fresh greens salad</Text>
                </View>
                <View style={styled.card}>
                    <Text style={styled.text}>Soup</Text>
                </View>
                <View style={styled.gap}></View>
            </ScrollView>
        </View>
    )
}


const styled = StyleSheet.create({
    overflow:{
        overflow:"hidden",
        width:"100%",
        height:160,
        paddingVertical:20
    },
    container:{
        width:"100%",
        height:110,
        paddingHorizontal:20,
        flexDirection:"row",
    },
    card:{
        backgroundColor:"orange",
        width:110,
        height:110,
        marginRight:10,
        borderRadius:10,
        justifyContent:"flex-end",
        padding:15
    },
    text:{
        fontWeight:"bold",
        color:"#FFF"
    },
    gap:{
        width:40
    }
})