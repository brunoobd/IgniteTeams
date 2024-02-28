import { TouchableOpacity } from "react-native";
import { BackButton, Container, Icon, Logo } from "./style";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <Icon />
        </BackButton>
      )}

      <Logo source={require("@assets/logo.png")} />
    </Container>
  );
};
