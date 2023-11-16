import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
//import WeeklyCalendar from 'react-native-weekly-calendar';
import { DatePicker } from 'react-native-week-month-date-picker';
import { addDays } from 'date-fns';


export default function HomeScreen(){
  const [selectedDate, setSelectedDate] = React.useState(new Date());
   // const sampleEvents = [
        //{ 'start': '2023-11-13 ', 'note': 'Full Body' },
        //{ 'start': '2023-11-14 ',  'note': 'Abs and Cardio' },
        //{ 'start': '2023-11-15 ',  'note': 'Leg Day' },
       
      //];

   
    return(
        <View StyleSheet = {StyleSheet.container}>
        <Text style={styles.setFontSizeOne}>Welcome Back Thuli</Text>

        <SafeAreaView>
      <DatePicker
        startDate={new Date()}
        maxFutureDays={90}
        markedDates={[new Date(), addDays(new Date(), 2)]}
        onDateChange={(date) => setSelectedDate(date)}
        theme={{
          primaryColor: 'purple',
        }}
      >
        <View>
          <Text>Timeslots</Text>
          <Text>{selectedDate.toString()}</Text>
        </View>
      </DatePicker>
    </SafeAreaView>
    
            
       
        
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

