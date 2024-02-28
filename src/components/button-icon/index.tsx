import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./style";

type Props = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap;
  variant?: ButtonIconTypeStyleProps;
};

export const ButtonIcon = ({
  name,
  variant = 'PRIMARY',
  ...props
}: Props) => {
  return (
    <Container {...props}>
      <Icon name={name} variant={variant} />
    </Container>
  );
};
