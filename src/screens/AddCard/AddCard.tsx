import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { createNumberMask } from "react-native-mask-input";
import moment from "moment";
import { Button, Text, Screen, TextInput } from "components";
import { HomeStrings } from "strings";
import { AddCardProps } from "navigation/MainNavigator";
import { CameraIcon } from "../../../assets/icons";
import { AddCardStrings } from "strings/AddCardStrings";

type State = typeof INITIAL_STATE;

const cardMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const expDateMask = createNumberMask({
  separator: "/",
});

const INITIAL_STATE = {
  id: "",
  number: "",
  name: "",
  expDate: "",
  cvv: "",
};

const validateExpDate = (expirationDate: string) => {
  const [month, year] = expirationDate.split("/");
  const newDate = moment(`20${year}-${month}-30`);
  if (newDate > moment()) return true;
};

const AddCardScreen = ({ navigation }: AddCardProps) => {
  const { navigate } = navigation;
  const [formState, setFormState] = useState<State>(INITIAL_STATE);

  const { number, cvv, expDate, name } = formState;

  const canSubmit =
    number.length === 19 &&
    cvv.length === 3 &&
    expDate.length == 5 &&
    validateExpDate(expDate) &&
    name.split(" ").length > 1;

  const onChange = (text: string, field: keyof typeof INITIAL_STATE) => {
    const newState = { ...formState };
    newState[field] = text;
    setFormState(newState);
  };

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
          behavior="padding"
        >
          <Text size="H1" color="WHITE" style={textContainer}>
            {HomeStrings.homeTitle}
          </Text>

          <TextInput
            label={AddCardStrings.cardNumber}
            placeholder="1234 5678 9012 3456"
            onChangeText={(unmasked) => onChange(unmasked, "number")}
            value={formState.number}
            icon={CameraIcon}
            mask={cardMask}
          />
          <TextInput
            label={AddCardStrings.holderName}
            placeholder=""
            onChangeText={(unmasked) => onChange(unmasked, "name")}
            value={formState.name}
          />
          <View style={inputRowContainer}>
            <TextInput
              label={AddCardStrings.expDate}
              placeholder="03/31"
              style={marginRight}
              onChangeText={(masked) => {
                onChange(masked, "expDate");
              }}
              value={formState.expDate}
              mask={expDateMask}
              maxLength={5}
            />
            <TextInput
              label={AddCardStrings.cvv}
              placeholder="***"
              onChangeText={(unmasked) => {
                onChange(unmasked, "cvv");
              }}
              value={formState.cvv}
              mask={[/\d/, /\d/, /\d/]}
            />
          </View>

          <Button
            label={AddCardStrings.buttonText}
            onPress={() => {
              navigate("CardAddedConfirmationScreen", {
                card: formState,
              });
            }}
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
