import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

function Main({ navigation }) {
    return (

        <View style={styles.container}>
             <View style={styles.bt}>
                <TouchableOpacity
                     onPress={() =>{navigation.navigate( 'MeusLocais' )}}
                    style={styles.button}
                >
                    <Text style={styles.text}>Meus Locais</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.bt}>
                <TouchableOpacity
                    onPress={() =>{navigation.navigate( 'Profile' )}}
                    style={styles.button}
                >
                    <Text style={styles.text}>Calculo Passagem</Text>
                    
                </TouchableOpacity>
            </View>
          
            <View style={styles.bt}>
                <TouchableOpacity
                     onPress={() =>{navigation.navigate( 'Imc' )}}
                    style={styles.button}
                >
                    <Text style={styles.text}>Calculo Imc</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.bt}>
                <TouchableOpacity
                     onPress={() =>{navigation.navigate( 'Extras' )}}
                    style={styles.button}
                >
                    <Text style={styles.text}>Calculo horas Extras</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.bt}>
                <TouchableOpacity
                     onPress={() =>{navigation.navigate( 'Onibus' )}}
                    style={styles.button}
                >
                    <Text style={styles.text}>Onibus map</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,


    },
    bt: {
        paddingTop: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4B0082',
        borderRadius: 50,
        width: "100%",
        height: 50,
        justifyContent: 'center'


    },
    text:{
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontStyle: 'italic',
        color: '#FFF'
    }

})


export default Main;
