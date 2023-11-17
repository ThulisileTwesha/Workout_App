import * as React from 'react';
import { View, Text, SafeAreaView,Image } from 'react-native';
import { StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';



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
    
    

      </SafeAreaView>           



    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',

    },
    setFontSizeOne: {
        fontSize: 20,
        padding: 10
    }

  });

