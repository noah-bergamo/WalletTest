import React from "react";
import { View } from "react-native";
import { Screen, Text, CardList } from "components";
import { CardsStrings } from "strings";

const mockedCards = [
  {
    id: "4ec42ba9-50af-40d2-af90-8312edbd9ca2",
    number: "3529 5435 3355 8727",
    cvv: "317",
    name: "John Doe",
    expDate: "12/24",
  },
  {
    id: "4ec42ba9-50af-40d2-af90-8312edbd9ca1",
    number: "3529 5435 3355 8727",
    cvv: "317",
    name: "John Doe",
    expDate: "12/24",
  },
];

const CardsHeader = () => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.3,
      }}
    >
      <Text color="CIAN_BLUE" size="H4">
        {CardsStrings.headerText}
      </Text>
    </View>
  );
};

const CardsScreen = () => {
  return (
    <Screen noPadding name="CARDS">
      <CardsHeader />
      <View
        style={{
          flex: 0.7,
          justifyContent: "flex-end",
        }}
      >
        <CardList data={mockedCards} />
      </View>
      <View style={{ flex: 0.3 }}></View>
    </Screen>
  );
};
export default CardsScreen;
