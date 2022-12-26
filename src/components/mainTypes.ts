export type Player = {
  id: number;
  name: string;
}

export type Title = {
  name: string;
  playerId: number;
  titleIsPrefix: boolean;
}

export type closedGame = {
  id: number;
  playerIds: number[];
  winnerId: number;
}