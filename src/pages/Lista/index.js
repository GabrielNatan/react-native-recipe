import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import { CardList } from "../../components/CardList"
import Icon from 'react-native-vector-icons/EvilIcons';
import { useRoute } from "@react-navigation/native";
import api from "../../services/api"

function renderItem(props){
    return<CardList {...props}/>
}

function Top(){
    const [categoria,setCategory] = useState('')
    const params = useRoute()
    useEffect(()=>{
        setCategory(params.params?.name)
    },[])
    return(
        <View style={styled.contHeader}>
             <View  style={styled.container}>
            <Icon style={styled.icon} name="search" size={30} color="#CCC" />
            <TextInput
                style={styled.input}
                placeholder="Search"
                keyboardType="default"
                onChangeText={setCategory}
                value={categoria}
            />
        </View>
            <Text style={styled.title}>Resultados: {categoria}</Text>
        </View>
    )
}

export const Lista = ()=>{
    const params = useRoute()
    const [data,setData] = useState(api.receitas)
    const [categoria,setCategory] = useState(params.params?.name)
    useEffect(()=>{
        setData(api.receitas.filter(res=> res.category === categoria))
    },[categoria])
    return(
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item=> item.id}
            ListHeaderComponent={Top}
        />
            
    )
}

const styled = StyleSheet.create({
    contHeader:{
        width:"100%",
        padding:10,
        marginBottom:20,
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center"
    },
    container:{
        paddingHorizontal:20,
        marginVertical:30
    },
    icon:{
        position:"absolute",
        left:30,
        top:17,
        zIndex:1

    },
    input:{
        borderRadius:10,
        paddingLeft:45,
        paddingRight:15,
        paddingVertical:15,
        backgroundColor:"#FFF",
        fontSize:18,
        color:"#CCC"
    }
})