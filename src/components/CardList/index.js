import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import hamburguer from "../../assets/hamburguer.jpg"
import Icons from "react-native-vector-icons/FontAwesome5"
import Icon from "react-native-vector-icons/Octicons"
export const CardList = ()=>{
    return(
        <TouchableOpacity style={styled.contCard}>
            <View style={styled.contImage}>
                <Image  style={styled.image} source={hamburguer}/>
            </View>
            <View  style={styled.contTitle}>
                <Text  style={styled.title}>Torta de uva</Text>
                <Text  style={styled.subTitle}>6 ingredients</Text>
                <View  style={styled.cont}>
                    <View  style={styled.info}>
                        <Icons name="clock" size={15} color="orange"/>
                        <Text  style={styled.subTitle}>30 min</Text>
                    </View>
                    <View  style={styled.info}>
                        <Icons name="fire" size={15} color="orange"/>
                        <Text  style={styled.subTitle}>30 min</Text>
                    </View>
                    <View  style={styled.info}>
                        <Icon name="people" size={15} color="orange"/>
                        <Text  style={styled.subTitle}>30 min</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styled = StyleSheet.create({
    contCard:{
        padding:10,
        flexDirection:"row",
        backgroundColor:"#FFF",
        borderBottomWidth:1,
        borderBottomColor:"#CCC",
        alignItems:"center"
    },
    contImage:{
        width:90,
        height:90,
        overflow:"hidden",
        borderRadius:10
    },
    image:{
        width:"100%",
        height:"100%"
    },
    contTitle:{
        padding:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    },
    subTitle:{
        fontSize:12,
        color:"#999"
    },
    cont:{
        width:"75%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    info:{
        width:"25%",
        paddingTop:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
})