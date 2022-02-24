import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from 'react-native-paper';

const image = require('./sky.png');

const App = () => {
  const [zipCode, setZipCode] = React.useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TextInput placeholder="zip code" mode='outlined' value={zipCode} onChangeText={zipCode => setZipCode(zipCode)} />
        <Button icon="weather-cloudy" mode="contained" onPress={() => console.log("pressed")}>Get Forecast</Button>
        <View ><Text style={styles.text}>sdfsdf</Text></View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",

  },
  resultContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#0000FF60"
  }
});

export default App;