import { useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import { CardList } from "../../components/CardList"
import Icon from 'react-native-vector-icons/EvilIcons';

function renderItem(props){
    return<CardList {...props}/>
}

function Top(){
    const [text,setText] = useState('')

    return(
        <View style={styled.contHeader}>
             <View  style={styled.container}>
            <Icon style={styled.icon} name="search" size={30} color="#CCC" />
            <TextInput
                style={styled.input}
                value={text}
                placeholder="Search"
                keyboardType="default"
                onChangeText={(value)=>{setText(value)}}
            />
        </View>
            <Text style={styled.title}>Pesquisa: Torta de uva</Text>
        </View>
    )
}

export const Lista = ()=>{
    return(
        <FlatList
            data={["um","dois","tres","quatro","cinco","seis","sete"]}
            renderItem={renderItem}
            keyExtractor={item=> item}
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