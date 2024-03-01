import { Header } from "@components/header";
import { Container } from "./style";
import { Highlight } from "@components/highlight";
import { GroupCard } from "@components/group-card";
import { FlatList } from "react-native";
import { useState } from "react";
import { Group } from "src/model";
import { ListEmpty } from "@components/list-empty";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";

export const Groups = () => {
  const [groups, setGroups] = useState(Array<Group>);
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Group }) => {
    return <GroupCard name={item.name} />;
  };

  const keyExtractor = ({ id }: Group) => `${id}`;

  const handleNewGroup = () => {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />
      <Highlight title={"Turmas"} subtitle={"jogue com a sua turma"} />

      <FlatList
        data={groups}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message={"Que tal cadastrar a primeira turma?"} />
        }
      />
      <Button title={'Criar nova turma'} onPress={handleNewGroup} />
    </Container>
  );
};
