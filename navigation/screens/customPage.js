import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Custom from '../../navigation/Custom.jpg';

export default function CustomPage({navigation}){
    return(
        <View StyleSheet = {StyleSheet.container}>
             <Image source={Custom} style={styles.imageStyle}/>

        <Text></Text>
      
        
      </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
    },
    setFontSizeOne: {
      fontSize: 16,
      margin:10,
    },
    imageStyle: {
      width: 380,
      height:200,
      justifyContent:'center',
      alignItems:'center',
      margin:12,
      
    
    },
  });
  