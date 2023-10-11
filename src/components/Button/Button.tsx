import Text from "components/base/Text/Text";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { COLORS } from "utils/theme/colors/colors";

type ButtonVariant = "green" | "blue";
type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
} & TouchableOpacityProps;
const Button = ({
  variant,
  label,
  onPress,
  disabled,
  ...rest
}: ButtonProps) => {
  const { container } = styles;
  const isGreenVariant = variant === "green";
  const backgroundColor = disabled
    ? COLORS.BASE.ICE_WHITE
    : isGreenVariant
    ? COLORS.BASE.LIME_GREEN
    : COLORS.BASE.CIAN_BLUE;

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={[container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text
        color={disabled ? "LIGHT_GRAY" : isGreenVariant ? "DARK_BLUE" : "WHITE"}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginVertical: 12,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 12,
  },
});

export default Button;
