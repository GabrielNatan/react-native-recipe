import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import hamburguer from "../../assets/hamburguer.jpg";
import bebidas from "../../assets/bebidas.jpg";
import caseira from "../../assets/caseira.jpg";
import sobremesa from "../../assets/sobremesa.jpg";
import { useNavigation } from "@react-navigation/native";
export const MiniCards = ({cards})=>{
    let images = {hamburguer,bebidas,caseira,sobremesa}
    const navigation = useNavigation()
    return(
        <View style={styled.overflow}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}  
                showsVerticalScrollIndicator={false}
                style={styled.container}>
                    {cards?.map(el=>{
                        return(
                            <TouchableOpacity 
                                key={el.id}
                                onPress={()=>{
                                    navigation.navigate("Lista",{name:el.name})
                                }}
                                style={styled.card}
                            >
                                <Image style={styled.img} source={images[el.img]}/>
                                <View style={styled.contText}>
                                    <Text style={styled.text}>{el.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })

                    }
                {/* <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate("Lista")
                    }}
                    style={styled.card}
                >
                    <Image style={styled.img} source={caseira}/>
                    <View style={styled.contText}>
                        <Text style={styled.text}>Comida caseira</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate("Lista")
                    }}
                    style={styled.card}
                >
                    <Image style={styled.img} source={sobremesa}/>
                    <View style={styled.contText}>
                        <Text style={styled.text}>Sobremesa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate("Lista")
                    }}
                    style={styled.card}
                >
                    <Image style={styled.img} source={bebidas}/>
                    <View style={styled.contText}>
                        <Text style={styled.text}>Bebida</Text>
                    </View>
                </TouchableOpacity> */}
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