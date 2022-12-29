import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export const Card = ({img})=>{
    return(
        <View>
            <Image style={styled.image} source={img}/>
            <Text style={styled.title} >Greek salad</Text>
            <View style={styled.contText} >
                <Text >6 ingredients</Text>
                <Text> - </Text>
                <Text>40 min</Text>
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    image:{
        width:200,
        height:350,
        borderRadius:20,
        marginRight:20
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
    },
    contText:{
        flexDirection:"row"
    }
})