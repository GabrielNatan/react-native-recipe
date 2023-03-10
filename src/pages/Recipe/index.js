import { useRoute } from "@react-navigation/native";
import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Banner } from "../../components/Banner";
import { CardIngredients } from "../../components/CardIngredients";
import { CardInstruction } from "../../components/CardInstruction";
import { CardRecipe } from "../../components/CardRecipe";
import tomate from "../../assets/tomate.png"
import cenoura from "../../assets/cenoura.png"
import batata from "../../assets/batata.png"
import batataDoce from "../../assets/batata-doce.png"
export default function Recipe(){
    const route = useRoute();
    const [receita,setReceita] = useState({})
    useEffect(()=>{
        if(route.params?.receita){
            setReceita(route.params?.receita) 
        }
    },[])
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
                    <CardIngredients 
                        image={tomate}
                        quant={3}
                        name="Tomate"
                    />
                    <CardIngredients 
                        image={cenoura}
                        quant={1}
                        name="Cenoura"
                    />
                    <CardIngredients 
                        image={batata}
                        quant={2}
                        name="Batata"
                    />
                    <CardIngredients 
                        image={batataDoce}
                        quant={1}
                        name="Batata Doce"
                    />
                </ScrollView>
            </View>
            <View
              style={styled.contInstruction}
              >
                <Text style={styled.title}>Cooking instruction</Text>
                <CardInstruction instructions={receita?.step}/>
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