import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { birdsList } from "../birdData";

const Home = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [onViewInfo, setOnViewInfo] = useState(() => {});
  const [detectedBird, setDetectedBird] = useState("");

  const getPrediction = () => {
    const myFormData = new FormData();

    // const random_num = Math.floor(Math.random() * 10000);
    // const imageName = random_num.toString() + ".jpg";

    // console.log("image name:", imageName);

    myFormData.append("file", {
      uri: image,
      name: "xyhjhhjjgj.jpg",
      type: `image/jpg`,
    });

    // axios
    //   .post("https://ca16-103-200-75-174.in.ngrok.io/predict", myFormData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("pred: ", res.data.prediction);

    //     const prediction = res.data.prediction;
    //     setDetectedBird(prediction);

    //     // REMOVE CODE ---->
    //     // const birdObject = birdsList.filter(
    //     //   (item) => item.birdName == prediction
    //     // )[0];
    //     // console.log(birdObject);
    //     // setOnViewInfo(() => {
    //     //   navigation.navigate("BirdInfo", birdObject);
    //     // });
    //     // REMOVE CODE ----<
    //     setShowModal(true);
    //   })
    //   .catch((err) => console.log("error: ", err?.response?.data));

    setDetectedBird("WHITE RUMPED VULTURE");
    setShowModal(true);
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

  // MODAL

  function MyModal() {
    const [modalVisible, setModalVisible] = useState(true);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{ fontSize: 16 }}>Detected: {detectedBird}</Text>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <Pressable
                  style={[styles.modalButton, styles.buttonClose]}
                  // onPress={() => setModalVisible(!modalVisible)}
                  onPress={() => {
                    const birdObject = birdsList.filter(
                      (item) => item.birdName == detectedBird
                    )[0];
                    console.log(birdObject);
                    navigation.navigate("BirdInfo", birdObject);

                    setModalVisible(!modalVisible);
                    setShowModal(false);
                  }}
                >
                  <Text style={styles.textStyle}>View Info</Text>
                </Pressable>
                <Pressable
                  style={[styles.modalButton, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setShowModal(false);
                  }}
                >
                  <Text style={styles.textStyle}>Go back</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {true && (
        <View style={{ position: "absolute" }}>
          <MyModal setShowModal={setShowModal} />
        </View>
      )}

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

  // Model styles

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  modalView: {
    width: "80%",
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "blue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
