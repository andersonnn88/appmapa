import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const data = require('../services/contatolocais.json')

function MeusLocais({ navigation }){
    return (  
        <>
            {data.devs.map(dev => ( 
                
                <View style={styles.bt} key={dev._id}>
                   <TouchableOpacity
                     
                     onPress={() =>{navigation.navigate( 'Mapalocais', { 
                         latitude: dev.location.coordinates[1], 
                         longitude: dev.location.coordinates[0],
                         nome: dev.name,
                         bio: dev.bio,
                         telefone: dev.telefone
                        })}}
                    style={styles.button}
                >
                    <Text style={styles.text}>{dev.name}</Text>
                </TouchableOpacity> 
                </View>
            ))}

        </>
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

export default MeusLocais;
