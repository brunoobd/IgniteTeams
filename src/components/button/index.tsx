import { TouchableOpacityProps } from "react-native";
import {
  ButtonTypeStyleEnum,
  ButtonTypeStyleProps,
  Container,
  Title,
} from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: ButtonTypeStyleProps;
};

export const Button = ({
  title,
  variant = ButtonTypeStyleEnum.PRIMARY,
  ...props
}: Props) => {
  return (
    <Container variant={variant} {...props}>
      <Title>{title}</Title>
    </Container>
  );
};
