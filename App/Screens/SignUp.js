import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import createUser from "../Services/auth";
import { useNavigation } from "@react-navigation/native";
import { useController, useForm } from "react-hook-form";
import { TextInput, TextInputMask, Button } from "react-native-paper";
import theme from "../theme";

const SignUp = () => {
  // const { control, handleSubmit } = useForm();
  // const { field } = useController({ control, defaultValue: "" });

  const navigation = useNavigation();
  const [isCreating, setIsCreating] = useState(false);

  const handleSignup = async () => {
    // console.log("Username:", username);
    setIsCreating(true);
    await createUser(email, password);
    setIsCreating(false);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.signup}>
      <Text style={styles.title}>Signup</Text>

      {/* <TextInput
        style={styles.input}
        // value={username}
        value={field.value}
        onChangeText={field.onChange}
        textColor={theme.colors.primary}
        inputMode="text"
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        label="Full Name"
        backgroundColor="#fff"
        id="fullName"
        control={control}

        //  selectionColor={theme.colors.primary}
      /> */}
      {/* <TextInput
        style={styles.input}
        // value={username}
        // onChangeText={(text) => setUsername(text)}
        textColor={theme.colors.primary}
        inputMode="numeric"
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        label="Birth Year"
        backgroundColor="#fff"
        keyboardType="number-pad"
        id="birthYear"
        control={control}
        //  selectionColor={theme.colors.primary}
      />
      <TextInput
        style={styles.input}
        // value={username}
        // onChangeText={(text) => setUsername(text)}
        textColor={theme.colors.primary}
        inputMode="numeric"
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        label="Age"
        backgroundColor="#fff"
        disabled
        id="age"
        // {...register("age")}

        //  selectionColor={theme.colors.primary}
      />
      <TextInput
        style={styles.input}
        // value={username}
        // onChangeText={(text) => setUsername(text)}
        textColor={theme.colors.primary}
        inputMode="text"
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        label="Blood Group"
        backgroundColor="#fff"
        id="bloodGroup"
        {...register("bloodGroup")}
        // disabled

        //  selectionColor={theme.colors.primary}
      />
      <TextInput
        style={styles.input}
        // value={username}
        // onChangeText={(text) => setUsername(text)}
        textColor={theme.colors.primary}
        inputMode="numeric"
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        label="Mobile"
        backgroundColor="#fff"
        id="mobile"
        {...register("mobile")}

        // disabled

        //  selectionColor={theme.colors.primary}
      />
      <TextInput
        style={styles.input}
        // value={username}
        // onChangeText={(text) => setUsername(text)}
        textColor={theme.colors.primary}
        inputMode="email"
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        label="Email"
        backgroundColor="#fff"
        id="email"
        {...register("email")}

        // disabled

        //  selectionColor={theme.colors.primary}
      />

      <TextInput
        style={styles.input}
        // value={username}
        // onChangeText={(text) => setUsername(text)}
        textColor={theme.colors.primary}
        inputMode="text"
        activeUnderlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        label="Password"
        backgroundColor="#fff"
        id="password"
        {...register("password")}

        // disabled

        //  selectionColor={theme.colors.primary}
      /> */}
      {/* <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity> */}
      {/* <Button title="login" onPress={()=>navigation.replace("Login")}/>
      {isCreating && <ActivityIndicator size="large" color="#0000ff" />} */}
      <Button
        mode="contained"
        // buttonColor={theme.colors.primary}
        textColor="#fff"
        contentStyle={{ height: 50 }}
        // onPress={() => navigation.replace("SignUp")}
        // onPress={handleSubmit(onSubmit)}
        style={styles.cusButton}
        buttonColor={theme.colors.primary}
      >
        SignUp
      </Button>
      <Text> Already Registered. </Text>
      <Button
        mode="contained"
        // buttonColor={theme.colors.primary}
        textColor="#fff"
        contentStyle={{ height: 50 }}
        // onPress={() => navigation.replace("SignUp")}
        // onPress={handleSubmit(onSubmit)}
        style={styles.cusButton}
        buttonColor={theme.colors.primary}
      >
        SignUp
      </Button>
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
  cusButton: {
    width: 100,
    borderRadius: 10,
    height: 50,
    margin: 10,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    marginTop: 15,
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
    marginBottom: -40,
  },
  title: {
    paddingTop: 20,
    fontSize: 18,
    color: theme.colors.font,
    // fontWeight:""
  },
  input: {
    width: 300,
  },
  signup: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
