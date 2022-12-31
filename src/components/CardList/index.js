import { Image, StyleSheet, Text, Touchable, View } from "react-native"

export const CardList = ()=>{
    return(
        <Touchable style={styled.contCard}>
            <View style={styled.contImage}>
                <Image  style={styled.image} source={hamburguer}/>
            </View>
            <View  style={styled.contTitle}>
                <Text  style={styled.title}>Torta de uva</Text>
                <Text  style={styled.subTitle}>6 ingredients</Text>
                <View  style={styled.cont}>
                    <View  style={styled.info}>
                        <Text  style={styled.subTitle}>30 min</Text>
                    </View>
                    <View  style={styled.info}>
                        <Text  style={styled.subTitle}>30 min</Text>
                    </View>
                    <View  style={styled.info}>
                        <Text  style={styled.subTitle}>30 min</Text>
                    </View>
                </View>
            </View>
        </Touchable>
    )
}

const Styled = StyleSheet.create({
    contCard:{},
    contImage:{},
    image:{},
    contTitle:{},
    title:{},
    subTitle:{},
    cont:{},
    info:{},
})