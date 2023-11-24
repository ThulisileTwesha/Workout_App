import * as React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from "react-native";
import Custom from "../../navigation/Custom.jpg";

export default function CustomPage() {
  return (
    <SafeAreaView Style={styles.container}>
      <Image source={Custom} style={styles.imageStyle} />

      <View Style={styles.contentContainer}>
        <Text style={styles.setFontSizeOne}>
          Create your first Custom workout
        </Text>
        <Text style={styles.setFontSizeOne}>
          Set up your own unique routine
        </Text>
      
      </View>

      <View style= {styles.myButton}>
      <Button
         title="Start"
         color="#841584"
         
       />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  setFontSizeOne: {
    fontSize: 16,
    margin: 40,
    left:40,

  },
  imageStyle: {
    width: 380,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 15,
  },
  myButton: {
    margin: 50,
  }

});
