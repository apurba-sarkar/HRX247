import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TextInputMask, Button } from "react-native-paper";
import login from "../icons/login.jpg";
import theme from "../theme";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <View style={styles.top}>
      <Text style={styles.title}>Please login with your E-mail</Text>
      <Image source={login} style={styles.login} />

        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          textColor={theme.colors.primary}
          inputMode="email"
          activeUnderlineColor={theme.colors.primary}
          activeOutlineColor={theme.colors.primary}
          label="Email"
          backgroundColor="#fff"
          //  selectionColor={theme.colors.primary}
        />
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          activeUnderlineColor={theme.colors.primary}
          activeOutlineColor={theme.colors.primary}
          backgroundColor="#fff"
        />

        <Button
          mode="contained-tonal"
          buttonColor={theme.colors.primary}
          textColor="#ffff"
          contentStyle={{ height: 50 }}
          onPress={() => navigation.replace("Login")}
          style={styles.cusButton}
        >
          Login
        </Button>
        <Text style={{ fontSize: 12 }}>
          New to HRX247, Don't worry your can Sign Up now
        </Text>
        <Button
          mode="outlined"
          // buttonColor={theme.colors.primary}
          textColor={theme.colors.primary}
          contentStyle={{ height: 50 }}
          onPress={() => navigation.replace("SignUp")}
          style={styles.cusButton}
        >
          Signup
        </Button>
   
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  cusButton: {
    width: 100,
    borderRadius: 10,
    height: 50,
    margin: 10,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    marginTop:15
  },
  top: {
    paddingTop: 40,
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  login: {
    height: 450,
    aspectRatio: 1,
    // marginTop:-30
  },
  title: {
    paddingTop: 20,
    fontSize: 18,
  },
  input: {
    width: 300,
  },
});
