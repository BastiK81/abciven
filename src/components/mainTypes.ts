export type Player = {
  id: number;
  name: string;
}

export type Title = {
  name: string;
  playerId: number;
  titleIsPrefix: boolean;
}

type InGamePlayers = {
  id: number;
  civ: string;
}

export type closedGame = {
  id: number;
  playerIds: InGamePlayers[];
  winnerId: number;

}