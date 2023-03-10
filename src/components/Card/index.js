import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import api from "../../services/api"
export const Card = ({img})=>{
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            onPress={()=>{
                navigation.navigate('RecipeScreen',{receita:api.receitas[0]})
            }}
        >
            <Image style={styled.image} source={img}/>
            <Text style={styled.title} >Greek salad</Text>
            <View style={styled.contText} >
                <Text >6 ingredients</Text>
                <Text> - </Text>
                <Text>40 min</Text>
            </View>
        </TouchableOpacity>
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