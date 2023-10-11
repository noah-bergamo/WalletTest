import Screen from "components/base/Screen/Screen";
import Text from "components/base/Text/Text";
import React from "react";
import { View } from "react-native";
import { CardsStrings } from "strings";

const mockedCards = [
  {
    id: "4ec42ba9-50af-40d2-af90-8312edbd9ca2",
    number: "3529 5435 3355 8727",
    cvv: "317",
    name: "John Doe",
  },
];

const CardHeader = () => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
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
      <CardHeader />
      <View style={{ flex: 1 }} />
    </Screen>
  );
};
export default CardsScreen;
