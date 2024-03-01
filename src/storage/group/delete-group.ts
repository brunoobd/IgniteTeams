import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storage-config";
import { getGroups } from "./get-groups";

export const deleteGroup = async (groupId: number) => {
  try {
    const groups = await getGroups();
    const groupsFiltered = groups.filter((group) => group.id !== groupId);

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupId}`);
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(groupsFiltered)
    );
  } catch (error) {
    throw error;
  }
};
