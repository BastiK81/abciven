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

export type Game = {
  id: number;
  players: InGamePlayers[];
  winnerId?: number;
  firstReligion?: number;
  firstWar?: number;
  firstTakenCity?: number;
}