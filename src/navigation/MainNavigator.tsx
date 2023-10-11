import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddCardScreen from "screens/AddCard/AddCard";
import CardAddedConfirmationScreen from "screens/CardAddedConfimation/CardAddedConfirmation";
import CardsScreen from "screens/Cards/Cards";
import HomeScreen from "screens/Home/Home";
import { NAV_CONSTANTS } from "utils/constants";
import { COLORS } from "utils/theme/colors/colors";
import { TYPOGRAPHY } from "utils/theme/typography/typography";
import BackIcon from "../../assets/icons/back_arrow.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { goBack, navigate } = useNavigation();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.CARDS}
        component={CardsScreen}
        options={{
          headerTintColor: COLORS.BASE.WHITE,
          headerTitle: "Wallet Test",
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
        }}
      />
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.ADD_CARD}
        component={AddCardScreen}
      />
      <Stack.Screen
        name={NAV_CONSTANTS.SCREENS.CARD_ADDED_CONFIRMATION}
        component={CardAddedConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
