import { Header } from "@components/header";
import { Container, Form } from "./style";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/button-icon";
import { Input } from "@components/input";
import { Filter } from "@components/filter";
import { Alert, FlatList, Platform, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Counter, HeaderList } from "@components/filter/style";
import { PlayerCard } from "@components/player-card";
import { ListEmpty } from "@components/list-empty";
import { Button } from "@components/button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Group, Player } from "src/model";
import { AppError } from "@utils/app-error";
import { createPlayerByGroup } from "@storage/player/create-player-by-group";
import { getGroupById } from "@storage/group/get-group-by-id";
import { getPlayersByGroupAndByTeam } from "@storage/player/get-players-by-group-and-by-team";
import { deletePlayer } from "@storage/player/delete-player";
import { deleteGroup } from "@storage/group/delete-group";
import { Loading } from "@components/loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

type RouteParams = {
  groupId: number;
};

export const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [group, setGroup] = useState<Group>();
  const [playersByTeam, setPlayersByTeam] = useState<Array<Player>>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState(0);

  const { groupId } = useRoute().params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const removeGroup = async () => {
    try {
      await deleteGroup(groupId);
      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover turma", "Não foi possível remover a turma.");
      console.log(error);
    }
  };

  const handleRemoveGroup = async () => {
    Alert.alert(
      "Remover turma",
      `Deseja mesmo remover a turma ${group?.name}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          onPress: () => removeGroup(),
        },
      ]
    );
  };

  const handleRemovePlayer = async (playerId: number) => {
    try {
      await deletePlayer(playerId, team, groupId);
      await fetchPlayersByTeam();
    } catch (error) {
      Alert.alert(
        "Remover participante",
        "Não foi possível remover o participante."
      );
      console.log(error);
    }
  };

  const handleAddPlayer = async () => {
    try {
      await createPlayerByGroup(newPlayerName, team, groupId);
      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo participante", error.message);
      } else {
        Alert.alert(
          "Novo participante",
          "Não foi possível adicionar um novo participante."
        );
        console.log(error);
      }
    } finally {
      setNewPlayerName("");
      newPlayerNameInputRef.current?.blur();
    }
  };

  const fetchGroup = async () => {
    try {
      const data = await getGroupById(groupId);

      setGroup(data);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Grupo", error.message);
      } else {
        Alert.alert("Grupo", "Grupo não encontrado.");
        console.log(error);
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(true);
      const data = await getPlayersByGroupAndByTeam(groupId, team);
      setPlayersByTeam(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!group) {
      fetchGroup();
    }

    fetchPlayersByTeam();
  }, [team]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: useTheme().COLORS.GRAY_600 }}
    >
      <Container
        enabled={Platform.OS === "ios" ? true : false}
        behavior="padding"
      >
        <Header showBackButton />

        <Highlight
          //REVER AQUI OQUE VAI FAZER CARAIO
          title={group ? group.name : ""}
          subtitle={"adicione a galera e separe os times"}
        />

        <Form>
          <Input
            inputRef={newPlayerNameInputRef}
            placeholder={"Nome da pessoa"}
            autoCorrect={false}
            value={newPlayerName}
            onChangeText={setNewPlayerName}
            onSubmitEditing={handleAddPlayer}
            returnKeyType={"done"}
          />
          <ButtonIcon name={"add"} onPress={handleAddPlayer} />
        </Form>

        <HeaderList>
          <FlatList
            data={[0, 1]}
            renderItem={({ item }: { item: number }) => (
              <Filter
                title={item === 0 ? "Time A" : "Time B"}
                isActive={item === team}
                onPress={() => setTeam(item)}
              />
            )}
            keyExtractor={(item: number) => `${item}`}
            scrollEnabled={false}
            horizontal
          />
          <Counter>{playersByTeam.length}</Counter>
        </HeaderList>

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={playersByTeam}
            renderItem={({ item }: { item: Player }) => (
              <PlayerCard
                name={item.name}
                onRemove={() => handleRemovePlayer(item.id)}
              />
            )}
            keyExtractor={(item) => `${item.id}-${item.name}`}
            ListEmptyComponent={
              <ListEmpty message="Não há pessoas nesse time" />
            }
            contentContainerStyle={[
              { paddingBottom: 100 },
              playersByTeam.length === 0 && { flex: 1 },
            ]}
            showsVerticalScrollIndicator={false}
          />
        )}

        <Button
          title={"Remover turma"}
          variant={"SECONDARY"}
          onPress={handleRemoveGroup}
        />
      </Container>
    </SafeAreaView>
  );
};
