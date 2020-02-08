import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function Imc(){
   
    return <View style={styles.container}> 
            <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input}/>
            <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input}/>
            
        </View>
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    input: {
        height: 80,
        width:"50%",
        textAlign: "center",
        fontSize:50,
        marginTop:24,

    }
})
export default Imc;
