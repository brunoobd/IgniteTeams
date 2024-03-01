import { Group } from "src/model";
import { getGroups } from "./get-groups";
import { AppError } from "@utils/app-error";

export const getGroupById = async (groupId: number): Promise<Group> => {
  try {
    const groupById = (await getGroups()).find((group) => group.id === groupId);

    if (!groupById) {
      throw new AppError(
        `Não foi possível encontrar o grupo pelo id: ${groupId}.`
      );
    }

    return groupById;
  } catch (error) {
    throw error;
  }
};
