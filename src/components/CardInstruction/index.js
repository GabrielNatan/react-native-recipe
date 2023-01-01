import { StyleSheet, Text, View } from "react-native"

export const CardInstruction = ({instructions = []})=>{
    return(
        <View style={styled.container}>
            {instructions?.map((el, index)=>{
                return(
                    <>
                        <Text style={styled.title}>Step {index + 1}</Text>
                        <Text style={styled.text}>{el}</Text>
                    </>
                )
            })

            }
        </View>
    )
}

const styled = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"#E0E2F5",
        borderRadius:20
    },
    title:{
        fontSize:11,
        color:"orange",
        marginBottom:10
    },
    text:{
        color:"#525252",
        marginBottom:10
    }
})