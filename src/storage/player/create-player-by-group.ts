import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storage-config";
import { getPlayersByGroup } from "./get-players-by-group";
import { AppError } from "@utils/app-error";
import { getPlayersByGroupAndByTeam } from "./get-players-by-group-and-by-team";

export const createPlayerByGroup = async (
  name: string,
  teamId: number,
  groupId: number
) => {
  try {
    const playersByGroup = await getPlayersByGroup(groupId);
    const playerAlredyExists = playersByGroup.find(
      (player) => player.name === name
    );

    if (name === "") {
      throw new AppError("O nome do participante não pode ser vazio.");
    } else if (!!playerAlredyExists) {
      console.log('.....................................')
      throw new AppError("Já existe um participante cadastrado com esse nome.");
    }

    const playersByTeamAndByGroup = await getPlayersByGroupAndByTeam(
      groupId,
      teamId
    );
    const playersIds = playersByTeamAndByGroup.map((player) => player.id);
    const nextPlayerId = !!playersIds.length ? Math.max(...playersIds) + 1 : 0;

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${groupId}`,
      JSON.stringify([...playersByGroup, { id: nextPlayerId, name, teamId }])
    );
  } catch (error) {
    throw error;
  }
};
