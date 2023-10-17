import React from "react";
import { StyleSheet, View } from "react-native";
import { Screen, Text, CardList } from "components";
import { CardsStrings } from "strings";

const CardsHeader = () => {
  const { cardHeader } = styles;
  return (
    <View style={cardHeader}>
      <Text color="CIAN_BLUE" size="H4">
        {CardsStrings.headerText}
      </Text>
    </View>
  );
};

const CardsScreen = () => {
  const { cardsContainer } = styles;
  return (
    <Screen noPadding name="CARDS">
      <CardsHeader />
      <View style={cardsContainer}>
        <CardList />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
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
    zIndex: 999,
    marginBottom: 32
  },
  cardsContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default CardsScreen;
