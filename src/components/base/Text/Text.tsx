import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { THEME } from "utils/theme";
import { COLORS } from "utils/theme/colors/colors";
import { TYPOGRAPHY } from "utils/theme/typography/typography";

type TextSize = keyof typeof TYPOGRAPHY.FONT_SIZES;
type TextColor = keyof typeof COLORS.TEXT;

type TextProps = { size?: TextSize; color?: TextColor } & RNTextProps;

const Text = ({
  style,
  color = "BLACK",
  children,
  size = "P1",
  ...rest
}: TextProps) => {
  const textSize = TYPOGRAPHY.FONT_SIZES[size];
  const textColor = COLORS.TEXT[color];

  return (
    <RNText
      style={[
        style,
        {
          fontFamily: THEME.TYPOGRAPHY.FONT_FAMILIES.PT_SANS,
          fontSize: textSize,
          color: textColor,
        },
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
