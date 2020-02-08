import React from 'react';
import {View, Text} from 'react-native';

const data = require('../services/contatolocais.json')

function Profile(){
    
    return (
        <>
           {data.devs.map(dev => ( 
            <View>
             <Text>{dev._id}</Text>
             <Text>{dev.name}</Text>
             <Text>{dev.bio}</Text>
            
             <Text>{dev.location.coordinates[1]}</Text>
             <Text>{dev.location.coordinates[0]}</Text>
             
            
            </View>
           ))}
          
        </>
        
    )
  ;
}

export default Profile;
