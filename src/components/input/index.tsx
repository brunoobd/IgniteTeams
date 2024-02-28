import { TextInputProps } from "react-native";
import { Container } from "./style";
import { useTheme } from "styled-components/native";

export const Input = ({ ...props }: TextInputProps) => {
  const { COLORS } = useTheme();

  return <Container placeholderTextColor={COLORS.GRAY_300} {...props} />;
};
