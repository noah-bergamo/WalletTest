import { useNavigation } from "@react-navigation/native";
import Button from "components/Button/Button";
import Screen from "components/base/Screen/Screen";
import Text from "components/base/Text/Text";
import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeStrings } from "strings";

const HomeScreen = () => {
  const { navigate } = useNavigation();
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
