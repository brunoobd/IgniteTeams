import { TouchableOpacity } from "react-native";
import { BackButton, Container, Icon, Logo } from "./style";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.navigate('groups')}>
          <Icon />
        </BackButton>
      )}

      <Logo source={require("@assets/logo.png")} />
    </Container>
  );
};
