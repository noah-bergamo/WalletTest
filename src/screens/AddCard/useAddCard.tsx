import { useState } from "react";
import { createNumberMask } from "react-native-mask-input";
import moment from "moment";
import { type CardType } from "components";
import { AddCardProps, RootStackParamList } from "navigation/MainNavigator";
import useCards from "hooks/useCards";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type State = CardType;

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

const useAddScreen = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { addCard } = useCards();

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

  const onSubmit = () => {
    addCard(formState);
    navigate("CardAddedConfirmationScreen");
    setFormState(INITIAL_STATE);
  };

  return {
    canSubmit,
    onSubmit,
    onChange,
    card: formState,
    cardMask,
    expDateMask,
  };
};

export default useAddScreen;
