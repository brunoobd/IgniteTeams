import { Header } from "@components/header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";

export const NewGroup = () => {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title={"Nova turma"}
          subtitle={"crie a turma para adicionar as pessoas"}
        />
        <Input placeholder={'Nome da turma'}/>
        <Button title={"Criar"} />
      </Content>
    </Container>
  );
};
