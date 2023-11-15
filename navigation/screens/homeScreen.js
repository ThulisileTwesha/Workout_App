import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';


export default function HomeScreen(){
    const sampleEvents = [
        { 'start': '2023-11-13 ', 'note': 'Full Body' },
        { 'start': '2023-11-14 ',  'note': 'Abs and Cardio' },
        { 'start': '2023-11-15 ',  'note': 'Leg Day' },
       
      ];

   
    return(
        <View StyleSheet = {StyleSheet.container}>
        <Text style={styles.setFontSizeOne}>Welcome Back Thuli</Text>
        <Text style={styles.setFontSizeOne}>Weekly Goal</Text>
        <WeeklyCalendar
        events={sampleEvents}
        selected="2023-11-13"
        startWeekday={0}
        weekdayFormat="ddd"
        locale="en"
        style={{ height: 400 }}
      />
       
            
       
        
      </View>



    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    },
    setFontSizeOne: {
        fontSize: 20,
        padding: 10
    }

  });

