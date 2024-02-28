import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./style";

type Props = TouchableOpacityProps & {
  name: string;
};

export const GroupCard = ({ name, ...props }: Props) => {
  return (
    <Container {...props}>
      <Icon />
      <Title>{name}</Title>
    </Container>
  );
};
