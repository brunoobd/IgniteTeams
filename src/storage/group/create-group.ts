import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage-config";
import { getGroups } from "./get-groups";
import { AppError } from "@utils/app-error";

export const groupCreate = async (name: string): Promise<number> => {
  try {
    const groups = await getGroups();
    const groupAlredyExists = groups.find((group) => group.name === name);

    if (name === "") {
      throw new AppError("O nome da turma não pode ser vazio.");
    } else if (!!groupAlredyExists) {
      throw new AppError("Já existe uma turma cadastrada com esse nome.");
    }

    const groupsIds: Array<number> = groups.map((group) => group.id);
    const nextGroupId = !!groups.length ? Math.max(...groupsIds) + 1 : 0;

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, { id: nextGroupId, name }])
    );

    return nextGroupId;
  } catch (error) {
    throw error;
  }
};
