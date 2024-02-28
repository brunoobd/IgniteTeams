import { Header } from "@components/header";
import { Container, Form } from "./style";
import { Highlight } from "@components/highlight";
import { ButtonIcon } from "@components/button-icon";
import { Input } from "@components/input";
import { Filter } from "@components/filter";
import { FlatList, View } from "react-native";
import { useState } from "react";
import { Counter, HeaderList } from "@components/filter/style";
import { PlayerCard } from "@components/player-card";
import { ListEmpty } from "@components/list-empty";
import { Button } from "@components/button";

export const Players = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["Bruno"]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={"Nome da turma"}
        subtitle={"acione a galera e separe os times"}
      />

      <Form>
        <Input placeholder={"Nome da pessoa"} autoCorrect={false} />
        <ButtonIcon name={"add"} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          renderItem={({ item }: { item: string }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          keyExtractor={(item: string) => item}
          scrollEnabled={false}
          horizontal
        />
        <Counter>{players.length}</Counter>
      </HeaderList>

      <FlatList
        data={players}
        renderItem={({ item }: { item: string }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        keyExtractor={(item: string) => item}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <Button title={"Remover turma"} variant={"SECONDARY"} />
    </Container>
  );
};
