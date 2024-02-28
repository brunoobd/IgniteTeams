import { ButtonIcon } from "@components/button-icon";
import { Container, Icon, Name } from "./style";

type Props = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name={"person"} />
      <Name>{name}</Name>
      <ButtonIcon name="close" variant="SECONDARY" onPress={onRemove} />
    </Container>
  );
};
