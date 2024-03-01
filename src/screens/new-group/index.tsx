import { Header } from "@components/header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

export const NewGroup = () => {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  const handleNewGroup = () => {
    if (group.trim() === "") {
      Alert.alert("Nome da Turma", "O nome da turma não pode ser vazio");
      setGroup("");
    } else {
      navigation.navigate("players", { group });
    }
  };

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title={"Nova turma"}
          subtitle={"crie a turma para adicionar as pessoas"}
        />
        <Input
          placeholder={"Nome da turma"}
          onChangeText={setGroup}
          value={group}
        />
        <Button title={"Criar"} onPress={handleNewGroup} />
      </Content>
    </Container>
  );
};
