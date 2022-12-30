import { StyleSheet, Text, View } from "react-native"
import Icons from "react-native-vector-icons/FontAwesome5"
import Icon from "react-native-vector-icons/Octicons"

export const CardRecipe = ()=>{
    return(
        <View style={styled.container}>
            <Text style={styled.title}> Greek salad</Text>
            <Text style={styled.text}>6 ingredients</Text>
            <View style={styled.containerIcons}>
                <View style={styled.card}>
                    <Icons name="clock" size={25} color="orange"/>
                    <Text style={styled.text}>30 min</Text>
                </View>
                <View style={styled.card}>
                    <Icons name="fire" size={25} color="orange"/>
                    <Text style={styled.text}>30 min</Text>
                </View>
                <View style={styled.card}>
                    <Icon name="people" size={25} color="orange"/>
                    <Text style={styled.text}>30 min</Text>
                </View>
            </View>
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        width:"90%",
        marginHorizontal:"5%",
        padding:20,
        backgroundColor:"#FFF",
        borderRadius:20,
        position:"absolute",
        top:300,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        color:"#525252"
    },
    text:{
        textAlign:"center",
        color:"#CCC"
    },
    containerIcons:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:15
    },
    card:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"24%",
        marginRight:5
    },

})