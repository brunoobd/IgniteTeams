import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage-config";
import { Group } from "src/model";

export const getGroups = async (): Promise<Array<Group>> => {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: Array<Group> = storage ? JSON.parse(storage) : [];
    
    return groups;
  } catch (error) {
    throw error;
  }
};
