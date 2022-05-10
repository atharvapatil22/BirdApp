import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
} from "react-native-table-component";
const BirdInfo = (props) => {
  const birdData = props.route.params;

  return (
    <ScrollView style={{ width: "100%" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 30,
          minHeight: heightSc * 900,
          marginBottom: 100,
        }}
      >
        <Image
          source={birdData.image}
          style={{
            elevation: 10,
            zIndex: 10,
            width: widthSc * 650,
            height: widthSc * 650,
            borderRadius: 300,
            borderColor: "blue",
            borderWidth: 4,
          }}
        />
        <View style={styles.card}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              width: "100%",
              textAlign: "center",
            }}
          >
            {birdData.birdName}
          </Text>

          <Table
            borderStyle={{ borderWidth: 0.4 }}
            style={{ marginHorizontal: "2%", marginVertical: 25 }}
          >
            <TableWrapper style={styles.wrapper}>
              <Col
                data={[
                  "Scientific Name",
                  "Conservation Status",
                  "Incubation Period",
                  "LifeSpan",
                  "Diet",
                ]}
                style={styles.title}
                heightArr={[60, 60, 60, 60, 80]}
                textStyle={styles.labelText}
              />
              <Rows
                data={[
                  [birdData.scientificName],
                  [birdData.conservationStatus],
                  [birdData.incubationPeriod],
                  [birdData.lifeSpan],
                  [birdData.diet],
                ]}
                flexArr={[1.5]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
      </View>
    </ScrollView>
  );
};

export default BirdInfo;
const { height, width } = Dimensions.get("window");
const heightSc = height / 1000;
const widthSc = width / 1000;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: widthSc * 360,
    elevation: -10,
    zIndex: -10,

    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
    paddingTop: heightSc * 200,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 7,
  },

  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 60 },
  labelText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    textAlignVertical: "center",
    height: "100%",
  },
});
