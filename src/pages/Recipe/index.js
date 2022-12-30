import react from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Banner } from "../../components/Banner";
import { CardIngredients } from "../../components/CardIngredients";
import { CardRecipe } from "../../components/CardRecipe";

export const Recipe = ()=>{
    return(
        <View style={styled.container}>
            <Banner/>
            <CardRecipe/>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styled.contIngredients}>
                <CardIngredients/>
                <CardIngredients/>
                <CardIngredients/>
                <CardIngredients/>
                <CardIngredients/>
            </ScrollView>
        </View>
    )
}


const styled = StyleSheet.create({
    container:{
      height:"100%",
      width:"100%",
      position:"relative"
    },
    contIngredients:{
        marginTop:60,
        padding:20
    }
})