import { CivList, LeaderList } from "../data/LeaderList";
import { GameList } from "../data/GameList";

export type PlayedLeaderType = {
  id: number;
  name: string;
  civ: CivList;
  count: number;
}

const emptyPlayedLeaderList: PlayedLeaderType[] = LeaderList.map((leader) => {
    return {
      id: leader.id,
      name: leader.name,
      civ: leader.civ,
      count: 0,
    }
  })

function getGamesCount( id: number ) {
  let count = 0;
  GameList.forEach((game) => {
    const players = game.players;
    if (players) {
      players.forEach((player) => {
        if (player.leader === id) {
          count++;
        }
      })
    }
  })
  return count;
}

export const playedLeaderList: PlayedLeaderType[] = emptyPlayedLeaderList.map((leader) => {
    return {
      ...leader,
      count: getGamesCount(leader.id)
    }
  })

export function getPlayedLeadersOfPlayer( id: number ) {
  console.log('getPlayedLeadersOfPlayer', id)
  const playedLeaders: PlayedLeaderType[] = [];
  GameList.forEach((game) => {
    const players = game.players;
    if (players) {
      players.forEach((player) => {
        if (player.id === id) {
          const leader = LeaderList.find((leader) => leader.id === player.leader);
          const isLeaderInList = playedLeaders.find((leader) => leader.id === player.leader)
          if (leader) {
            if (isLeaderInList) {
              isLeaderInList.count++;
            } else  {
              playedLeaders.push({
                ...leader,
                count: 1
              })
            }
          }
        }
      })
    }
  })
  return playedLeaders;
}
