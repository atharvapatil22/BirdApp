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
    image: require("../assets/bird1.jpg"),
    birdName: "BLACK-HEADED IBIS",
    scientificName: "Threskiornis melanocephalus",
    conservationStatus: "Near Threatened",
    lifeSpan: "30+ years in captivity",
    incubationPeriod: "20-30 days",
    diet: "Fish, invertebrates (insects and crustaceans) and frogs",
  },
  {
    id: 2,
    image: require("../assets/bird2.jpg"),
    birdName: "COMMON HAWK-CUCKOO",
    scientificName: "Hierococcyx varius",
    conservationStatus: "Least Concern",
    lifeSpan: "",
    incubationPeriod: "",
    diet: "Mainly insects, can handle hairy caterpillars",
  },
  {
    id: 3,
    image: require("../assets/bird3.jpg"),
    birdName: "GREAT INDIAN BUSTARD",
    scientificName: "Ardeotis nigriceps",
    conservationStatus: "Critically Endangered",
    lifeSpan: "12-15 years in the wild, 40 years in captivity",
    incubationPeriod: "Around 30 days",
    diet: "Insects consisting mainly Orthoptera, beetles (Mylabris), grass seeds, berries, rodents, reptiles. Exposed groundnut, millets and pods of legumes in cutivated areas",
  },
];
