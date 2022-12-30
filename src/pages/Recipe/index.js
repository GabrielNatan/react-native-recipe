import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { Banner } from "../../components/Banner";

export const Recipe = ()=>{
    return(
        <View style={styled.container}>
            <Banner/>
        </View>
    )
}


const styled = StyleSheet.create({
    container:{
      height:"100%",
      width:"100%"
    }
})