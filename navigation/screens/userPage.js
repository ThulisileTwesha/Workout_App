import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native";

export default function UserPage(){
    return(
        <SafeAreaView  StyleSheet={StyleSheet.container}>
          <View>
          <Text>User</Text>


          </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  }
  });
