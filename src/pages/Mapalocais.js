import React, {useState}from 'react';
import MapView, { Marker , Callout } from 'react-native-maps';
import { StyleSheet,View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Mapalocais({ navigation }){
    const name = navigation.getParam('nome');
    const bio = navigation.getParam('bio');
    const telefone = navigation.getParam('telefone');

    const currentRegion = {
        latitude: navigation.getParam('latitude'),
        longitude: navigation.getParam('longitude'),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }

return( 
    
    <MapView initialRegion={currentRegion} style={ styles.map} >
        <Marker coordinate={currentRegion}>
            <MaterialCommunityIcons name="home-circle" size={40} />
           <Callout>
               <View style={styles.callout} >
                    <Text style={styles.devName}>{name}</Text>
                    <Text style={styles.devBio}>{bio}</Text>
                    <Text style={styles.devTechs}>{telefone}</Text>
               </View>
           </Callout>
        </Marker>   

    </MapView>
    
        
    )


}
const styles = StyleSheet.create({
    map: {
        flex:1
    },
  
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize:16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,

    },
})
export default Mapalocais;