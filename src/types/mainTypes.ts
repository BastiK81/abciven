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
  leader: string;
  civ: string;
}

type Positions = {
  playerId: number;
  position: number;
}

type Score = {
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
  Score: Score[];
}