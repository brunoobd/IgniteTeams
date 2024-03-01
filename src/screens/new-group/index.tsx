import { Header } from "@components/header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Platform } from "react-native";
import { groupCreate } from "@storage/group/create-group";
import { AppError } from "@utils/app-error";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

export const NewGroup = () => {
  const [groupName, setGroupName] = useState("");
  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      const groupId = await groupCreate(groupName.trim());
      navigation.navigate("players", { groupId });
    } catch (error) {
      setGroupName("");
      if (error instanceof AppError) {
        Alert.alert("Nova turma", error.message);
      } else {
        Alert.alert("Nova turma", "Não foi possível criar uma nova turma.");
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: useTheme().COLORS.GRAY_600 }}
    >
      <Container
        enabled={Platform.OS === "ios" ? true : false}
        behavior="padding"
      >
        <Header showBackButton />
        <Content>
          <Icon />
          <Highlight
            title={"Nova turma"}
            subtitle={"crie a turma para adicionar as pessoas"}
          />
          <Input
            placeholder={"Nome da turma"}
            onChangeText={setGroupName}
            value={groupName}
          />
          <Button title={"Criar"} onPress={handleNewGroup} />
        </Content>
      </Container>
    </SafeAreaView>
  );
};
