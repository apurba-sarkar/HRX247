import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import wel from "../icons/wel.jpg";
import theme from "../theme";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Image source={wel} style={styles.wel} />
      <Text style={styles.text}>Find doctors</Text>
      <Text style={styles.text}>Search and book appoinments effortlessly</Text>
      <View style={styles.wbutton}>
        <Button
          mode="contained-tonal"
          buttonColor={theme.colors.primary}
          textColor="#ffff"
          contentStyle={{ height: 50 }}
          onPress={() => navigation.replace("Login")}
        >
          Book Your Appointment
        </Button>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  main: {
    // display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 80,
    backgroundColor: "#fff",
    fontSize: 100,
    // gap:15
    // alignItems:"flex-end"
    // alignItems: "flex-end",

    //    flexDirection:"row"
  },
  wbutton: {
    marginTop: 20,
  },
  wel: {
    height: 350,
    aspectRatio: 1,
    marginBottom: 80,
    // width:40
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.font,
  },
});
