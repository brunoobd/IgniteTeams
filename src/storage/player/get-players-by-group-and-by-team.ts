import { Player } from "src/model";
import { getPlayersByGroup } from "./get-players-by-group";

export const getPlayersByGroupAndByTeam = async (
  groupId: number,
  teamId: number
): Promise<Array<Player>> => {
  try {
    const playersByGroup = await getPlayersByGroup(groupId);
    const playersByTeamAndByGroup = playersByGroup.filter(
      (player) => player.teamId === teamId
    );

    return playersByTeamAndByGroup;
  } catch (error) {
    throw error;
  }
};
