import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@ui-kitten/components";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView
      style={{
        paddingHorizontal: "10%",
      }}
    >
      <View
        style={{
          marginTop: "10%",
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginRight: "2%",
          }}
        >
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: "blue",
              fontWeight: "bold",
              fontSize: 20,
              // backgroundColor: "green",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Input
        style={styles.input}
        label="Name"
        placeholder="Name"
        value={name}
        onChangeText={(nextValue) => setName(nextValue)}
      />
      <Input
        style={styles.input}
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        style={styles.input}
        label="Mobile"
        placeholder="Mobile"
        value={mobile}
        onChangeText={(nextValue) => setMobile(nextValue)}
      />
      <Input
        style={styles.input}
        label="City"
        placeholder="City"
        value={city}
        onChangeText={(nextValue) => setCity(nextValue)}
      />
      <Input
        style={{ marginTop: "10%" }}
        value={password}
        label="Set Password"
        // placeholder="SetPassword"
        // accessoryRight={renderIcon}
        secureTextEntry={true}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Input
        style={{ marginTop: "10%" }}
        value={confirmPassword}
        label="Confirm Password"
        // placeholder="ConfirmPassword"
        // accessoryRight={renderIcon}
        secureTextEntry={true}
        onChangeText={(nextValue) => setConfirmPassword(nextValue)}
      />
      <Button style={{ marginTop: "10%", marginBottom: "30%" }}>
        <Text>Register</Text>
      </Button>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    marginTop: "8%",
  },
});
