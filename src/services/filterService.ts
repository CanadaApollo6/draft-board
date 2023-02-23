import { PlayerCardInfo, Position } from "../types";

export const sortByBigBoardRank = (
  players: PlayerCardInfo[]
): PlayerCardInfo[] => {
  return players.sort((a, b) => a.bigBoardRank - b.bigBoardRank);
};

export const filterByPosition = (
  players: PlayerCardInfo[],
  positions: Position[]
): PlayerCardInfo[] => {
  return players.filter((player) => positions.includes(player.position));
};
