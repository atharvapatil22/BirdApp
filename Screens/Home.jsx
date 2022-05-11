import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { birdsList } from "../birdData";

const Home = () => {
  const [image, setImage] = useState(null);

  const getPrediction = () => {
    // const myFormData = new FormData();
    // myFormData.append("file", image);

    // axios
    //   .post("https://0793-103-200-75-160.in.ngrok.io/predict", myFormData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     // put code snippet here
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err.response.data));

    // SNIPPET:
    const prediction = "COPPERSMITH BARBET";
    const birdObject = birdsList.filter((item) => item.birdName == prediction);
    console.log(birdObject);
  };

  const pickImage = async (type) => {
    let result;
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [3, 4],
      quality: 1,
    };

    if (type === "camera") {
      result = await ImagePicker.launchCameraAsync(options);
    } else if (type === "gallery") {
      result = await ImagePicker.launchImageLibraryAsync({
        ...options,
        allowsEditing: true,
      });
    }

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      getPrediction();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Select a picture</Text>
      {/* {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )} */}
      <TouchableOpacity
        onPress={() => pickImage("camera")}
        style={styles.button}
      >
        <Ionicons name={"camera"} color={"white"} size={50} />
        <Text style={styles.label}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => pickImage("gallery")}
        style={styles.button}
      >
        <MaterialIcons name={"collections"} size={50} color={"white"} />
        <Text style={styles.label}>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: widthSc * 600,
    height: 150,
    marginVertical: heightSc * 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  label: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
  },
});
