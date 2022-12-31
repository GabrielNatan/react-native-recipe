import react, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import banner from "../../assets/comida-1.webp"
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
export const Banner = ()=>{
    const [like,setLike] = useState(false)
    const navigation = useNavigation()

    return(
        <View style={styled.container}>
            <View  style={styled.containerBtn}>
                <TouchableOpacity 
                    style={styled.btn}
                    onPress={()=>{
                        navigation.goBack()
                    }}
                >
                    <BlurView
                          style={styled.absolute}
                          blurType="dark"
                          blurAmount={5}
                          reducedTransparencyFallbackColor="black"
                    />
                <Icon name="ios-chevron-back" size={25} color="#FFF"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setLike(!like)} style={styled.btn}>
                    <BlurView
                          style={styled.absolute}
                          blurType="dark"
                          blurAmount={5}
                          reducedTransparencyFallbackColor="black"
                    />
                    {like ?
                    <Icon name="heart" size={25} color="red"/>
                    :
                    <Icon name="heart-outline" size={25} color="#FFF"/>
                    }
                </TouchableOpacity>
            </View>
            <Image  style={styled.image} source={banner}></Image>
        </View>
    )
}


const styled = StyleSheet.create({
    container:{
      height:"auto",
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
        width:"100%",
        alignItems:"center"
    },
    btn:{
        padding:10,
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