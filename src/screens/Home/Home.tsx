import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeProps } from "navigation/MainNavigator";
import { Button, Screen, Text } from "components";
import { HomeStrings } from "strings";

const HomeScreen = ({ navigation }: HomeProps) => {
  const { navigate } = navigation;
  const { container, buttonsContainer } = styles;

  return (
    <Screen name="HOME">
      <View style={container}>
        <Text size="H1" color="WHITE">
          {HomeStrings.homeTitle}
        </Text>
        <View style={buttonsContainer}>
          <Button
            label={HomeStrings.myCardButtonText}
            onPress={() => navigate("CardsScreen")}
          />
          <Button
            label={HomeStrings.addCardButtonText}
            onPress={() => navigate("AddCardScreen")}
            variant="green"
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: { marginTop: 30, width: "100%" },
});

export default HomeScreen;
