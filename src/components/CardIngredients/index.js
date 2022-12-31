import { StyleSheet, View, Text, Image } from "react-native"

export const CardIngredients = ({image,quant,name})=>{
    return(
        <View>
            <View style={styled.contImage}>
                <Image style={styled.image} source={image}/>
            </View>
            <Text  style={styled.title}>{name}</Text>
            <Text style={styled.text}>{quant} {quant > 1 ? "items":"item"}</Text>
        </View>
    )
}

const styled = StyleSheet.create({
    contImage:{
        width:90,
        height:90,
        borderRadius:5,
        marginRight:10,
        overflow:"hidden",
        backgroundColor:"#F68724",
        justifyContent:"center",
        padding:10
    },
    title:{
        fontSize:15,
        fontWeight:"bold",
    },
    image:{
        width:80,
        height:80
    },
    text:{
        fontSize:11,
        color:"#CCC"
    },
})