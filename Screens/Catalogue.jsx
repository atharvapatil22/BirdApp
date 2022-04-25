import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BirdCard from "../Components/BirdCard";

const Catalogue = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        {temp__birds.map((bird) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BirdInfo", bird)}
          >
            <BirdCard key={bird.id} birdData={bird} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Catalogue;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const temp__birds = [
  {
    id: 1,
    name: "Parrot",
    description:
      "They are colorful, quite intelligent, highly sociable, and long-lived creatures",
    image: require("../assets/bird1.jpg"),
  },
  {
    id: 2,
    name: "KingFisher",
    description:
      "Kingfishers or Alcedinidae are a family of small to medium-sized, brightly colored birds in the order Coraciiformes",
    image: require("../assets/bird2.jpg"),
  },
  {
    id: 3,
    name: "Crow",
    description:
      "A crow is a bird of the genus Corvus, or more broadly a synonym for all of Corvus.",
    image: require("../assets/bird3.jpg"),
  },
  {
    id: 4,
    name: "Eagle",
    description:
      "Eagle is the common name for many large birds of prey of the family Accipitridae. ",
    image: require("../assets/bird4.jpg"),
  },
  {
    id: 5,
    name: "Vulture",
    description: "A vulture is a bird of prey that scavenges on carrion.",
    image: require("../assets/bird5.jpg"),
  },
];
