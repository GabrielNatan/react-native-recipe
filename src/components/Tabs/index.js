import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import Octicons from "react-native-vector-icons/Octicons"
export const Tabs = ()=>{
    return(
        <View style={styled.container}>
            <TouchableOpacity>
                <Icon name="home" size={25} color="orange"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="heart" size={25} color="#CCC"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Octicons name="stack" size={25} color="#CCC"/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="user" size={25} color="#CCC"/>
            </TouchableOpacity>
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:50,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
        marginHorizontal:"10%",
        position:"absolute",
        bottom:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    }
})