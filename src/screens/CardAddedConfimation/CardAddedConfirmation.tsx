import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/MainNavigator";
import useCards from "hooks/useCards";
import { Button, Card, Screen, Text } from "components";

const CardAddedConfirmationScreen = () => {
  const { cards } = useCards();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const index = cards.length - 1;
  const addedCard = cards[index];

  const { container, marginB10, marginB32, marginT32 } = styles;

  return (
    <Screen name="CARD_ADDED_CONFIRMATION" style={container}>
      <Text color="WHITE" size="H1" style={marginB10}>
        Wallet Test
      </Text>
      <Text color="WHITE" size="H4" style={marginB32}>
        Cartão cadastrado com sucesso
      </Text>
      <Card
        cardData={addedCard}
        variant={index % 2 == 0 ? "green" : "black"}
        index={index}
        onPress={() => {}}
      />
      <Button
        label="avançar"
        style={marginT32}
        onPress={() => navigation.navigate("CardsScreen")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  marginB10: { marginBottom: 10 },
  marginB32: { marginBottom: 32 },
  marginT32: { marginTop: 32 },
});
export default CardAddedConfirmationScreen;
