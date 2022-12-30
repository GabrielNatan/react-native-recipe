import { StyleSheet, Text, View } from "react-native"

export const CardInstruction = ()=>{
    return(
        <View style={styled.container}>
            <Text style={styled.title}>Step 1</Text>
            <Text style={styled.text}>Bring well-salted water to boil. Cook the</Text>
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        height:600,
        padding:20,
        backgroundColor:"yellow",
        borderRadius:20
    },
    title:{
        fontSize:11,
        color:"orange",
        marginBottom:10
    },
    text:{
        color:"#525252"
    }
})