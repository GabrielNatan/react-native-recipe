import { useRoute } from "@react-navigation/native";
import react from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Banner } from "../../components/Banner";
import { CardIngredients } from "../../components/CardIngredients";
import { CardInstruction } from "../../components/CardInstruction";
import { CardRecipe } from "../../components/CardRecipe";

export default function Recipe(){
    const route = useRoute();
    return(
        <ScrollView style={styled.container}>
            <Banner/>
            <CardRecipe/>
            <View
                style={styled.contIngredients}
            >
                <Text style={styled.title}>Ingredients</Text>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >
                    <CardIngredients/>
                    <CardIngredients/>
                    <CardIngredients/>
                    <CardIngredients/>
                    <CardIngredients/>
                </ScrollView>
            </View>
            <View
              style={styled.contInstruction}
              >
                <Text style={styled.title}>Cooking instruction</Text>
                <CardInstruction/>
            </View>
            <View style={styled.marginBottom}></View>
        </ScrollView>
    )
}


const styled = StyleSheet.create({
    container:{
      height:"100%",
      width:"100%",
      position:"relative",
      paddingBottom:360
    },
    contIngredients:{
        marginTop:60,
        padding:20
    },
    contInstruction:{
        padding:20
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#525252",
        marginBottom:10
    },
    marginBottom:{
        height:60
    }
})