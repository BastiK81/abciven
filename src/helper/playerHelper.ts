import { PlayerList } from "../data/PlayerList";
import { PlayerType } from "../types/mainTypes";
import { CivList, LeaderList } from "../data/LeaderList";

export const getPlayerById = ( id: number ): PlayerType => {
  return PlayerList.find( ( player ) => player.id === id ) as PlayerType;
}

export function getCivOfLeader( leader: number ): string {
  if ( leader === 0 ) {
    return '';
  }
  const civId: CivList = LeaderList.filter((leaderItem) => leaderItem.id === leader)[ 0 ].civ;
  return  civId;
}

export function getLeaderName( leader: number ) {
  if ( leader === 0 ) {
    return '';
  }
  return LeaderList.filter((leaderItem) => leaderItem.id === leader)[ 0 ].name || '';
}