import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";

const BirdCard = (props) => {
  const birdData = props.birdData;

  return (
    <View style={styles.card}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
        }}
      >
        <Image
          source={birdData.image}
          style={{
            width: 140,
            height: 140,
            // borderRadius: (width * 0.4) / 2,
          }}
        />
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{birdData.name}</Text>
          <Text>{birdData.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default BirdCard;

const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: widthSc * 900,
    height: 170,
    marginVertical: "3%",
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 7,
    marginHorizontal: "2%",
  },
  title: {
    color: "blue",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardInfo: {
    flex: 1,
    marginLeft: widthSc * 30,
    height: 140,
  },
});
