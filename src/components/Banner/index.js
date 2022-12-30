import react, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import banner from "../../assets/comida-1.webp"
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from "@react-native-community/blur";
export const Banner = ()=>{
    const [like,setLike] = useState(false)
    return(
        <View style={styled.container}>
            <View  style={styled.containerBtn}>
                <TouchableOpacity 
                style={styled.btn}>
                    <BlurView
                          style={styled.absolute}
                          blurType="dark"
                          blurAmount={5}
                          reducedTransparencyFallbackColor="black"
                    />
                <Icon name="ios-chevron-back" size={30} color="#FFF"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setLike(!like)} style={styled.btn}>
                    <BlurView
                          style={styled.absolute}
                          blurType="dark"
                          blurAmount={5}
                          reducedTransparencyFallbackColor="black"
                    />
                    {like ?
                    <Icon name="heart" size={30} color="red"/>
                    :
                    <Icon name="heart-outline" size={30} color="#FFF"/>
                    }
                </TouchableOpacity>
            </View>
            <Image  style={styled.image} source={banner}></Image>
        </View>
    )
}


const styled = StyleSheet.create({
    container:{
      height:"100%",
      width:"100%"
    },
    image:{
        width:"100%",
        height:380,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
    },
    containerBtn:{
        flexDirection:"row",
        position:"absolute",
        zIndex:5,
        justifyContent:"space-between",
        padding:20,
        width:"100%"
    },
    btn:{
        padding:20,
        position: "relative",
        borderRadius:10,
        overflow:"hidden"
    },
    absolute:{
        position: "absolute",
        width:80,
        height:80,
    }
})