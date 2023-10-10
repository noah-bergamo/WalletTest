import React, { ReactNode } from "react";
import { Image, StyleSheet, View, ViewProps } from "react-native";
import { NAV_CONSTANTS } from "utils/constants";
import { THEME } from "utils/theme";
import { COLORS } from "utils/theme/colors/colors";

type ScreenProps = {
  name: keyof typeof NAV_CONSTANTS.SCREENS;
  children: ReactNode;
} & ViewProps;

const Screen = ({ children, ...rest }: ScreenProps) => {
  const { backgroundTopDetail, backgroundBottomDetail } = styles;
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
        backgroundColor: THEME.COLORS.BASE.DARK_BLUE,
      }}
      {...rest}
    >
      <View style={backgroundTopDetail} />
      {children}
      <View style={backgroundBottomDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
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
