import {
    ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import createUser from "../Services/auth";
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
  const navigation = useNavigation();
  //   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleSignup = async () => {
    // console.log("Username:", username);
    setIsCreating(true);
    await createUser(email, password);
    setIsCreating(false);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <View>


      <Text style={styles.title}>Signup</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Button title="login" onPress={()=>navigation.replace("Login")}/>
      {isCreating && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default SignUp;

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
});
