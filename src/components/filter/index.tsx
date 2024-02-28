import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Title } from "./style";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export const Filter = ({ title, isActive = false, ...props }: Props) => {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  );
};
