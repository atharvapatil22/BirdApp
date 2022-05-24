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
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { birdsList } from "../birdData";

const Home = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [detectedBird, setDetectedBird] = useState("");

  const [backendURL, setBackendURL] = useState(null);

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

    // console.log("Image selected: ", result);

    if (!result.cancelled) {
      setImage(result.uri);
      setTimeout(() => {
        getPrediction();
      }, 1000);
    }
  };

  const getPrediction = () => {
    const myFormData = new FormData();
    let imageName;

    // const random_num = Math.floor(Math.random() * 10000);
    // const imageName = random_num.toString() + ".jpg";

    // console.log("image name:", imageName);

    // Get file name:

    try {
      imageName = image.split("/ImagePicker/")[1];
    } catch (err) {
      imageName = "random.jpg";
    }

    myFormData.append("file", {
      uri: image,
      name: imageName,
      type: `image/jpg`,
    });

    setModalType("detecting");
    setShowModal(true);

    // console.log(
    //   "Called with backend url: ",
    //   backendURL + "/predict",
    //   "\n For image: ",
    //   myFormData
    //   // "\n ImageName: ",
    //   // imageName
    // );
    axios
      .post(backendURL + "/predict", myFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log("pred: ", res.data.prediction);
        const prediction = res.data.prediction;
        setDetectedBird(prediction);
        setModalType("bird");
      })
      .catch((err) => {
        setModalType("error");
        console.log("Error:", err);
        console.log("Error message: ", err?.response?.data);
      });
  };

  // MODAL
  function MyModal({ setShowModal, setBackendURL }) {
    const [modalVisible, setModalVisible] = useState(true);
    const [backendURL_model, setbackendURL_model] = useState(backendURL);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            if (modalType !== "detecting") {
              Alert.alert("Modal has been closed.");
              setShowModal(false);
            }
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {modalType == "bird" ? (
                <>
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
                      onPress={() => {
                        const birdObject = birdsList.filter(
                          (item) => item.birdName == detectedBird
                        )[0];
                        console.log(birdObject);
                        navigation.navigate("BirdInfo", birdObject);

                        setShowModal(false);
                      }}
                    >
                      <Text style={styles.textStyle}>View Info</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.modalButton, styles.buttonClose]}
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      <Text style={styles.textStyle}>Go back</Text>
                    </Pressable>
                  </View>
                </>
              ) : modalType == "detecting" ? (
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 25, marginRight: "4%" }}>
                    Detecting
                  </Text>
                  <ActivityIndicator size="large" color="blue" />
                </View>
              ) : modalType == "error" ? (
                <View
                  style={{
                    height: "100%",
                    flex: 1,
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text style={{ fontSize: 25, marginRight: "4%" }}>
                    Some Error occured
                  </Text>
                  <Pressable
                    style={[styles.modalButton, styles.buttonClose]}
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              ) : modalType == "backend-url" ? (
                <>
                  <Text>
                    Current Value: {backendURL == null ? "NULL" : backendURL}
                  </Text>
                  <TextInput
                    style={{
                      height: 40,
                      // width: "50%"
                      marginHorizontal: "20%",
                      marginTop: 30,
                      padding: 10,
                      margin: 12,
                      borderWidth: 1,
                      borderRadius: 10,
                      width: "100%",
                    }}
                    onChangeText={(newVal) => {
                      setbackendURL_model(newVal);
                    }}
                    value={backendURL_model}
                    placeholder="set backend url"
                  />
                  <TouchableOpacity
                    style={{
                      marginHorizontal: "20%",
                      width: "40%",
                      backgroundColor: "blue",
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      setBackendURL(backendURL_model);
                      setShowModal(false);
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        padding: 8,
                        textAlign: "center",
                      }}
                    >
                      Done
                    </Text>
                  </TouchableOpacity>
                </>
              ) : (
                <></>
              )}
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
      {showModal && (
        <View style={{ position: "absolute" }}>
          <MyModal
            setShowModal={setShowModal}
            setBackendURL={setBackendURL}
            type={modalType}
          />
        </View>
      )}

      <Text style={{ fontSize: 25, marginBottom: 20 }}>Select a picture</Text>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
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

      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 5,
          borderRadius: 10,
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
        onPress={() => {
          setShowModal(true);
          setModalType("backend-url");
        }}
      >
        <MaterialIcons name={"settings"} size={20} color={"white"} />
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
