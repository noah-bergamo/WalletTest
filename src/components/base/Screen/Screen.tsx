import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { NAV_CONSTANTS } from "utils/constants";
import { THEME } from "utils/theme";
import { COLORS } from "utils/theme/colors/colors";

type ScreenProps = {
  name: keyof typeof NAV_CONSTANTS.SCREENS;
  children: ReactNode;
  noPadding?: boolean;
} & ViewProps;

const HomeDetails = ({ showDetails }: { showDetails: boolean }) => {
  const { backgroundTopDetail, backgroundBottomDetail } = styles;
  return showDetails ? (
    <>
      <View style={backgroundTopDetail} />
      <View style={backgroundBottomDetail} />
    </>
  ) : null;
};

const Screen = ({ children, noPadding, name, style, ...rest }: ScreenProps) => {
  const { container } = styles;
  const showDetails = name === "HOME" || name === "ADD_CARD";
  return (
    <View
      style={[
        container,
        style,
        {
          paddingHorizontal: noPadding ? 0 : container.paddingHorizontal,
          paddingTop: noPadding ? 0 : container.paddingTop,
        },
      ]}
      {...rest}
    >
      <HomeDetails showDetails={showDetails} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: THEME.COLORS.BASE.DARK_BLUE,
  },
  backgroundTopDetail: {
    position: "absolute",
    backgroundColor: `${COLORS.TEXT.LIGHT_GRAY}40`,
    transform: [{ rotate: "60deg" }],
    top: -200,
    left: -50,
    width: 300,
    height: 400,
    borderRadius: 60,
  },
  backgroundBottomDetail: {
    position: "absolute",
    backgroundColor: `${COLORS.TEXT.LIGHT_GRAY}40`,
    transform: [{ rotate: "60deg" }],
    bottom: -230,
    right: -50,
    width: 300,
    height: 400,
    borderRadius: 60,
  },
});

export default Screen;
