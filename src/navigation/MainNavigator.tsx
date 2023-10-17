import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import {
  AddCardScreen,
  CardsScreen,
  CardAddedConfirmationScreen,
  HomeScreen,
} from "screens";

import { NAV_CONSTANTS } from "utils/constants";
import { COLORS, TYPOGRAPHY } from "@theme";

import BackIcon from "../../assets/icons/back_arrow.svg";
import PlusIcon from "../../assets/icons/plus.svg";

export type RootStackParamList = {
  HomeScreen: undefined;
  CardsScreen: undefined;
  AddCardScreen: undefined;
  CardAddedConfirmationScreen: undefined;
};
export type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  "HomeScreen"
>;
export type AddCardProps = NativeStackScreenProps<
  RootStackParamList,
  "AddCardScreen"
>;
export type CardsProps = NativeStackScreenProps<
  RootStackParamList,
  "CardsScreen"
>;
export type CardAddedConfimationProps = NativeStackScreenProps<
  RootStackParamList,
  "CardAddedConfirmationScreen"
>;

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { goBack, navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const AddCardScreenOptions: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerTitle: "cadastro",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: TYPOGRAPHY.FONT_FAMILIES.PT_SANS,
      color: COLORS.TEXT.CIAN_BLUE,
      fontSize: TYPOGRAPHY.FONT_SIZES.H3,
    },
    headerLeft: () => (
      <TouchableOpacity onPress={goBack}>
        <BackIcon fill={COLORS.BASE.CIAN_BLUE} width={24} height={24} />
      </TouchableOpacity>
    ),
  };
  const CardsScreenOptions: NativeStackNavigationOptions = {
    headerTintColor: COLORS.BASE.WHITE,
    headerTitle: "Wallet Test",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: TYPOGRAPHY.FONT_FAMILIES.PT_SANS,
      color: COLORS.TEXT.DARK_BLUE,
      fontSize: TYPOGRAPHY.FONT_SIZES.H3,
    },
    headerLeft: () => (
      <TouchableOpacity onPress={goBack}>
        <BackIcon fill={COLORS.BASE.CIAN_BLUE} width={24} height={24} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => navigate("AddCardScreen")}>
        <PlusIcon fill={COLORS.BASE.CIAN_BLUE} width={24} height={24} />
      </TouchableOpacity>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.CARDS}
        component={CardsScreen}
        options={CardsScreenOptions}
      />
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.ADD_CARD}
        component={AddCardScreen}
        options={AddCardScreenOptions}
      />
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.CARD_ADDED_CONFIRMATION}
        component={CardAddedConfirmationScreen}
        options={AddCardScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
