import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import hamburguer from "../../assets/hamburguer.jpg";
import bebidas from "../../assets/bebidas.jpg";
import caseira from "../../assets/caseira.jpg";
import sobremesa from "../../assets/sobremesa.jpg";
export const MiniCards = ()=>{
    return(
        <View style={styled.overflow}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}  
                showsVerticalScrollIndicator={false}
                style={styled.container}>
                <TouchableOpacity style={styled.card}>
                    <Image style={styled.img} source={hamburguer}/>
                    <View style={styled.contText}>
                        <Text style={styled.text}>hamburguer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styled.card}>
                    <Image style={styled.img} source={caseira}/>
                    <View style={styled.contText}>
                        <Text style={styled.text}>Comida caseira</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styled.card}>
                    <Image style={styled.img} source={sobremesa}/>
                    <View style={styled.contText}>
                        <Text style={styled.text}>Sobremesa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styled.card}>
                    <Image style={styled.img} source={bebidas}/>
                    <View style={styled.contText}>
                        <Text style={styled.text}>Bebida</Text>
                    </View>
                </TouchableOpacity>
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
        position:"relative",
        overflow:"hidden"
    },
    contText:{
        width:110,
        height:50,
        backgroundColor:"rgba(0,0,0,.5)",
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
    },
    img:{
        position:"absolute",
        left:0,
        top:0,
        width:110,
        height:110
    },
    text:{
        fontWeight:"bold",
        color:"#FFF"
    },
    gap:{
        width:40
    }
})