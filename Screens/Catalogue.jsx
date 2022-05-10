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
    lifeSpan: "13 years",
    incubationPeriod: "13 days",
    diet: "Mainly insects, can handle hairy caterpillars",
  },

  {
    id: 3,
    image: require("../assets/bird3.jpg"),
    birdName: "COMMON WOOD PIGEON",
    scientificName: "Columba palumbus",
    conservationStatus: "Least Concern",
    lifeSpan: "5-15 years",
    incubationPeriod: "17-19 days",
    diet: "Leaves from  Caryophyllaceae, Asteraceae, cruciferous vegetables, grains, pine nuts, certain fruits and also larvae, ants and small worms",
  },
  {
    id: 4,
    image: require("../assets/bird4.jpg"),
    birdName: "COPPERSMITH BARBET",
    scientificName: "Psilopogon haemacephalus",
    conservationStatus: "Least Concern",
    lifeSpan: "",
    incubationPeriod: "Estimated around 14 days",
    diet: "Banyan, peepul, wild figs, drupes, berries, insects, flower petals",
  },
  {
    id: 5,
    image: require("../assets/bird5.jpg"),
    birdName: "GREAT INDIAN BUSTARD",
    scientificName: "Ardeotis nigriceps",
    conservationStatus: "Critically Endangered",
    lifeSpan: "12-15 years in the wild, 40 years in captivity",
    incubationPeriod: "Around 30 days",
    diet: "Insects consisting mainly Orthoptera, beetles (Mylabris), grass seeds, berries, rodents, reptiles. Exposed groundnut, millets and pods of legumes in cutivated areas",
  },

  {
    id: 6,
    image: require("../assets/bird6.jpg"),
    birdName: "GREATER COUCAL",
    scientificName: "Centropus sinensis",
    conservationStatus: "Least Concern",
    lifeSpan: "",
    incubationPeriod: "15-16 days",
    diet: "Wide range of insects, caterpillars, snails and small vertebrates (Saw-scaled vipers), bird eggs, nestlings, fruits (known to feed on toxic fruits of Yellow Oleandaer/Cascabela thevetia, fleshy mesocarps of ripe fruits in oil palm cultivation), seeds",
  },

  {
    id: 7,
    image: require("../assets/bird7.jpg"),
    birdName: "GREATER FLAMINGO",
    scientificName: "Phoenicopterus roseus",
    conservationStatus: "Least Concern",
    lifeSpan: "30-40 years in wild, 60+ years in captivity",
    incubationPeriod: "27-31 days",
    diet: "Algae, diatoms, crustaceans, insect larvae, mollusks, brine shrimp (Artemia selina), chironomid larvae or (Chironomidae), and rice (Oryza sativa)",
  },

  {
    id: 8,
    image: require("../assets/bird8.jpg"),
    birdName: "GREEN BEE EATER",
    scientificName: "Merops orientalis",
    conservationStatus: "Least Concern",
    lifeSpan: "",
    incubationPeriod: "14-22 days",
    diet: "Flying insects especially bees, wasps and ants",
  },

  {
    id: 9,
    image: require("../assets/bird9.jpg"),
    birdName: "GREY-FRONTED GREEN PIGEON",
    scientificName: "Treron affinis",
    conservationStatus: "Least Concern",
    lifeSpan: "",
    incubationPeriod: "12-14 days",
    diet: "Fruits, berries, drupes, figs, termites",
  },

  {
    id: 10,
    image: require("../assets/bird10.jpg"),
    birdName: "INDIAN PEAFOWL",
    scientificName: "Pavo cristatus",
    conservationStatus: "Least Concern",
    lifeSpan: "10-25 years in the wild",
    incubationPeriod: "Around 28-30 days",
    diet: "Seeds, insects, fruits, small mammals, reptiles (small snakes)",
  },

  {
    id: 11,
    image: require("../assets/bird11.jpg"),
    birdName: "PAINTED STORK",
    scientificName: "Mycteria leucocephala",
    conservationStatus: "Near Threatened",
    lifeSpan: "",
    incubationPeriod: "Around 30 days",
    diet: "Small fish, crustaceans, amphibians (frogs), insects, reptiles (small snakes)",
  },
  {
    id: 12,
    image: require("../assets/bird12.jpg"),
    birdName: "ROCK DOVE",
    scientificName: "Columba livia",
    conservationStatus: "Least Concern",
    lifeSpan: "3-6 years in the wild, 15 years in captivity ",
    incubationPeriod: "17-19 days",
    diet: "Fruits, grains, seeds, insects, spiders",
  },
  {
    id: 13,
    image: require("../assets/bird13.jpg"),
    birdName: "SPECKLED WOOD PIGEON",
    scientificName: "Columba hodgsonii",
    conservationStatus: "Least Concern",
    lifeSpan: "",
    incubationPeriod: "Around 17 days",
    diet: "Wild fruits, berries, seeds of wild plants and grass, grains, cereals, shoots and buds ",
  },
  {
    id: 14,
    image: require("../assets/bird14.jpg"),
    birdName: "WHITE RUMPED VULTURE",
    scientificName: "Gyps bengalensis",
    conservationStatus: "Critically Endangered",
    lifeSpan: "",
    incubationPeriod: "45-48 days",
    diet: "Scavenge on carrion (particularly of cattle), remains of other animals including their own kind",
  },
];
