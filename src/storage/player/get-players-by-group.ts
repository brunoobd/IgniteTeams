import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storage-config";
import { Player } from "src/model";

export const getPlayersByGroup = async (
  groupId: number
): Promise<Array<Player>> => {
  try {
    const storage = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${groupId}`
    );
    const players: Array<Player> = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
};
