import * as React from 'react';
import { View, Text } from 'react-native';

export default function TrainingPage({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text
        onPress={() => navigation.navigate('Home')}
            style={{fontsize:26,}}>User</Text>
       
        
      </View>
    );
}