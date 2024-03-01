import { Player } from "src/model";
import { getPlayersByGroup } from "./get-players-by-group";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storage-config";

export const deletePlayer = async (
  playerId: number,
  teamId: number,
  groupId: number
) => {
  try {
    /* ARRUMAR ISSO AQUI, ELE TA DELETANDO DUAS PESSOAS DE TIMES DIFERENTES QUE TEM IDS IGUAIS */
    const players = await getPlayersByGroup(groupId);
    let playersFiltered = players.filter(
      (player) => player.teamId !== teamId || player.id !== playerId
    );

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${groupId}`,
      JSON.stringify(playersFiltered)
    );
  } catch (error) {
    throw error;
  }
};
