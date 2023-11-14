import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={{flex:1}}>
        <Text
        onPress={() => navigation.navigate('Home')}
            style={{fontsize:26}}>Welcome Back Thuli</Text>
            
       
        
      </View>
    );
}