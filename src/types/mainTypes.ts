export type Player = {
  id: number;
  name: string;
}

export type Title = {
  name: string;
  playerId: number;
  titleIsPrefix: boolean;
}

export type InGamePlayers = {
  id: number;
  leader: string;
  civ: string;
}

type Positions = {
  playerId: number;
  position: number;
}

export type Score = {
  id: number;
  name: string;
  positions: Positions[];
}

export type Game = {
  id: number;
  date: number[];
  players: InGamePlayers[];
  winnerId: number;
  firstReligion: number;
  firstWar: number;
  firstTakenCity: number;
  closed: boolean;
  score: Score[];
}