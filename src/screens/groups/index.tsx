import { Header } from "@components/header";
import { Container } from "./style";
import { Highlight } from "@components/highlight";
import { GroupCard } from "@components/group-card";
import { FlatList } from "react-native";
import { useCallback, useState } from "react";
import { Group } from "src/model";
import { ListEmpty } from "@components/list-empty";
import { Button } from "@components/button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getGroups } from "@storage/group/get-groups";
import { Loading } from "@components/loading";

export const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState(Array<Group>);
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Group }) => {
    return (
      <GroupCard name={item.name} onPress={() => handleOpenGroup(item.id)} />
    );
  };

  const keyExtractor = ({ id }: Group) => `${id}`;

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const handleOpenGroup = (groupId: number) => {
    navigation.navigate("players", { groupId });
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const data = await getGroups();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title={"Turmas"} subtitle={"jogue com a sua turma"} />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={
            <ListEmpty message={"Que tal cadastrar a primeira turma?"} />
          }
        />
      )}

      <Button title={"Criar nova turma"} onPress={handleNewGroup} />
    </Container>
  );
};
