import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import createUser, { addNewUser } from "../Services/auth";
import { useNavigation } from "@react-navigation/native";
import { Controller, useController, useForm } from "react-hook-form";
import { TextInput, TextInputMask, Button } from "react-native-paper";
import theme from "../theme";

// activeUnderlineColor={theme.colors.primary}
// activeOutlineColor={theme.colors.primary}
// textColor={theme.colors.primary}
// label={field.name}
// backgroundColor="#fff"

const inputStyles = {
  activeUnderlineColor: theme.colors.primary,
  activeOutlineColor: theme.colors.primary,
  textColor: theme.colors.primary,
  backgroundColor: "#fff",
};

const SignUp = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const initialData = {
  //   fullname: "",
  //   age: 0,
  //   email:"",
  //   bloodgroup: "",
  //   mobile: 0,
  //   password: "",
  // };

  const onSubmit = async(data) => {
    // console.log(cusData);
    await createUser(data);
    try {
    } catch (error) {}
    console.log(data);
    // alert(JSON.stringify(data))
    // reset([]);
    // e.target.reset();
  };

  return (
    <View style={styles.signup}>
      <Text style={styles.title}>Signup</Text>
      <Controller
        control={control}
        name="fullname"
        rules={{ required: "this field is required" }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="full name"
            onChangeText={(value) => onChange(value)}
            {...inputStyles}
            style={styles.input}
          />
        )}
      />
      {errors?.fullname?.message && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <Controller
        control={control}
        name="age"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="age"
       
            onChangeText={(value) => onChange(value)}
            {...inputStyles}
            style={styles.input}
            keyboardType="numeric"
          />
        )}
      />
      {errors?.age?.message && (
        <Text style={styles.error}>This is required.</Text>
      )}

      <Controller
        control={control}
        name="bloodgroup"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="bloodgroup"
   
            onChangeText={(value) => onChange(value)}
            {...inputStyles}
            style={styles.input}
          />
        )}
      />
      {errors?.bloodgroup?.message && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <Controller
        control={control}
        name="mobile"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="mobile"
        
            onChangeText={(value) => onChange(value)}
            {...inputStyles}
            style={styles.input}
            keyboardType="numeric"
          />
        )}
      />
      {errors?.mobile?.message && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="email"
     
            onChangeText={(value) => onChange(value)}
            {...inputStyles}
            style={styles.input}
        
          />
        )}
      />
      {errors?.email?.message && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="password"
     
            onChangeText={(value) => onChange(value)}
            {...inputStyles}
            style={styles.input}
          />
        )}
      />
      {errors?.password?.message && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <Button
        mode="contained"
        textColor="#fff"
        contentStyle={{ height: 50 }}
        onPress={handleSubmit(onSubmit)}
        style={styles.cusButton}
        buttonColor={theme.colors.primary}
      >
        SignUp
      </Button>
      <Text> Already Registered. </Text>
      <Button
        mode="contained"
        textColor="#fff"
        contentStyle={{ height: 50 }}
        style={styles.cusButton}
        buttonColor={theme.colors.primary}
      >
        Log in
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
    // backgroundColor:"red"
  },
  signup: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
  },
});
