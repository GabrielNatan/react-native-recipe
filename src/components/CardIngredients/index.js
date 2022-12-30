import { StyleSheet, View, Text } from "react-native"

export const CardIngredients = ()=>{
    return(
        <View>
            <View style={styled.contImage}></View>
            <Text  style={styled.title}>Timato</Text>
            <Text style={styled.text}>1 items</Text>
        </View>
    )
}

const styled = StyleSheet.create({
    contImage:{
        width:90,
        height:90,
        borderRadius:5,
        backgroundColor:"red",
        marginRight:10
    },
    title:{
        fontSize:15,
        fontWeight:"bold",
    },
    text:{
        fontSize:11,
        color:"#CCC"
    },
})