import * as React from 'react';
import { View, Text, Image, StyleSheet,Button } from 'react-native';
import FullBodyImage from '../../navigation/fullbody.jpg';
import CalendarStrip from 'react-native-calendar-strip';
import { SafeAreaView } from 'react-native';
import Abs from '../../navigation/Abse.jpg';




export default function HomeScreen(){
    return(
        <SafeAreaView StyleSheet = {StyleSheet.container}>
          <View><Text style={styles.setFontSizeOne}>Welcome Back Thuli</Text></View>
          <View>
          <Text style={styles.setFontSizeOne}>Weekly Goal</Text>
          <CalendarStrip
         daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'black'}}
      style={{height:100, paddingTop: 10, paddingBottom: 10}}/>

          </View>
          <View><Text style={styles.setFontSizeOne}>Let's get moving!</Text></View>
          <View>
          <Image source={FullBodyImage} style={styles.imageStyle} />
           
            </View> 
          
          <Text style={styles.setFontSizeOne}>Recommended</Text>
          <Image source={Abs} style={styles.imageStyle}/>


          
    
    
    
      </SafeAreaView>           

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

