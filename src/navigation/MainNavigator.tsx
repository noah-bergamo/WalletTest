import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddCardScreen from "screens/AddCard/AddCard";
import CardAddedConfirmationScreen from "screens/CardAddedConfimation/CardAddedConfirmation";
import CardsScreen from "screens/Cards/Cards";
import HomeScreen from "screens/Home/Home";
import { NAV_CONSTANTS } from "utils/constants";

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
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
