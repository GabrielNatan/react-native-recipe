import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icons from "react-native-vector-icons/EvilIcons"
import Icon from "react-native-vector-icons/Octicons"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from "@react-native-async-storage/async-storage"
export const CreateAccount = ()=>{
    const navigation = useNavigation()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function createAccount(){
        if(name && email && password){
            let user = {name,email,password}
            await AsyncStorage.setItem("name",name)
            await AsyncStorage.setItem("email",email)
            await AsyncStorage.setItem("password",password)
            await AsyncStorage.setItem("login","false")
            return
        }
        let abc = await AsyncStorage.getAllKeys()
        let asyncName = await AsyncStorage.getItem("name")
        console.log(asyncName)
    }

    return(
        <View style={styled.container}> 
            <Text style={styled.h1}>Create Account</Text>
            <View  style={styled.cont}>
                <Icon style={styled.icon1} name="person" size={27} color="#CCC" />
                <TextInput 
                    style={styled.input}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View  style={styled.cont}>
                <Icon style={styled.icon1} name="mail" size={27} color="#CCC" />
                <TextInput 
                    style={styled.input}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View  style={styled.cont}>
                <Icon style={styled.icon} name="lock" size={30} color="#CCC" />
                <TextInput 
                    style={styled.input}
                    secureTextEntry={true}                
                    value={password}
                    onChangeText={setPassword}
                />
            </View>  
            
           <TouchableOpacity
            onPress={()=>{createAccount()}}
            style={styled.btn}
            >
            <Text style={styled.textBtn}>Create Account</Text>
           </TouchableOpacity>
           <TouchableOpacity
            onPress={()=>{navigation.goBack()}}
           >
                <Text style={styled.link}>Go to login</Text>
           </TouchableOpacity>
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    h1:{
        fontSize:40,
        fontWeight:"bold",
        marginBottom:30
    },
    cont:{
        width:"80%",
    },
    icon:{
        position:"absolute",
        left:16,
        top:13,
        zIndex:1

    },
    icon1:{
        position:"absolute",
        left:15,
        top:16,
        zIndex:1

    },
    input:{
        width:"100%",
        borderRadius:10,
        paddingLeft:56,
        paddingRight:15,
        paddingVertical:15,
        backgroundColor:"#FFF",
        fontSize:18,
        color:"#CCC",
        marginBottom:20
    },
    btn:{
        width:"80%",
        borderRadius:10,
        backgroundColor:"#589858",
        color:"#CCC",
        height:50,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center"
    },
    textBtn:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"bold"
    },
    link:{
        color:"blue",
        fontSize:12,

    }
})