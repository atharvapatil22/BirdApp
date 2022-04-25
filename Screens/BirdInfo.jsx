import { View, Text, Image } from "react-native";
import React from "react";

const BirdInfo = (props) => {
  const birdData = props.route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={birdData.image}
        style={{
          width: 240,
          height: 240,
          // borderRadius: (width * 0.4) / 2,
        }}
      />
      <Text style={{ marginTop: 10, fontSize: 20 }}>{birdData.name}</Text>
    </View>
  );
};

export default BirdInfo;
