import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@ui-kitten/components";

import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const renderIcon = (props) => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}
    >
      <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={22} />
    </TouchableWithoutFeedback>
  );

  return (
    <View
      style={{
        // justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingHorizontal: "10%",
      }}
    >
      <Text style={{ fontSize: 25, marginTop: "30%" }}>Welcome!</Text>
      <Input
        style={{ marginTop: "10%" }}
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Input
        style={{ marginTop: "10%" }}
        value={password}
        label="Password"
        placeholder="Password"
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(nextValue) => setPassword(nextValue)}
      />
      <Button style={{ width: "100%", marginTop: "10%" }}>
        <Text>Login</Text>
      </Button>

      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          height: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginRight: "2%",
          }}
        >
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              color: "blue",
              fontWeight: "bold",
              fontSize: 20,
              // backgroundColor: "green",
            }}
          >
            Create One
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
