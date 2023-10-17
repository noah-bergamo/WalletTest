import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Text, Screen, TextInput } from "components";
import { HomeStrings } from "strings";
import { CameraIcon } from "../../../assets/icons";
import { AddCardStrings } from "strings/AddCardStrings";
import useAddScreen from "./useAddCard";

const AddCardScreen = () => {
  const { canSubmit, onChange, card, onSubmit, expDateMask, cardMask } =
    useAddScreen();

  const { number, cvv, expDate, name } = card;
  const {
    container,
    textContainer,
    inputRowContainer,
    marginRight,
    keyboardAvoidingContiner,
  } = styles;

  return (
    <Screen name="ADD_CARD" style={container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={keyboardAvoidingContiner}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text size="H1" color="WHITE" style={textContainer}>
            {HomeStrings.homeTitle}
          </Text>

          <TextInput
            label={AddCardStrings.cardNumber}
            placeholder="1234 5678 9012 3456"
            onChangeText={(unmasked) => onChange(unmasked, "number")}
            value={number}
            icon={CameraIcon}
            mask={cardMask}
            keyboardType="number-pad"
          />
          <TextInput
            label={AddCardStrings.holderName}
            placeholder="Digite seu nome"
            onChangeText={(unmasked) => onChange(unmasked, "name")}
            value={name}
            keyboardType="default"
          />
          <View style={inputRowContainer}>
            <TextInput
              label={AddCardStrings.expDate}
              placeholder="03/31"
              style={marginRight}
              onChangeText={(masked) => {
                onChange(masked, "expDate");
              }}
              value={expDate}
              mask={expDateMask}
              maxLength={5}
              keyboardType="number-pad"
            />
            <TextInput
              label={AddCardStrings.cvv}
              placeholder="***"
              onChangeText={(unmasked) => {
                onChange(unmasked, "cvv");
              }}
              value={cvv}
              mask={[/\d/, /\d/, /\d/]}
              keyboardType="number-pad"
            />
          </View>

          <Button
            label={AddCardStrings.buttonText}
            onPress={onSubmit}
            disabled={!canSubmit}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center" },
  textContainer: { textAlign: "center", marginBottom: 16 },
  inputRowContainer: { flexDirection: "row", justifyContent: "space-between" },
  marginRight: { marginRight: 12 },
  keyboardAvoidingContiner: { flex: 1, justifyContent: "center" },
});
export default AddCardScreen;
