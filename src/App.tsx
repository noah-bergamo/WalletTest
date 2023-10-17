import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "navigation/MainNavigator";
import CardProvider from "contexts/CardContext";

const App = () => {
  return (
    <CardProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </CardProvider>
  );
};

export default App;
