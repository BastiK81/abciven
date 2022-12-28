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

export type Position = {
  playerId: number;
  position: number;
}

export type Categories = {
  id: number;
  name: string;
  positions: Position[];
}

export type Game = {
  id: number;
  date: number[];
  players: InGamePlayers[];
  winnerId: number;
  firstReligion: number;
  firstWar: number;
  firstTakenCity: number;
  firstWonder: number;
  closed: boolean;
  scoreCategory: Categories[];
}

export type ScoreInCategory = {
  id: number;
  name: string;
  score: number;
}

export type PlayerStats = {
  id: number;
  name: string;
  wins: number;
  firstWonder: number;
  firstWar: number;
  firstReligion: number;
  firstTakenCity: number;
  scoreInCategories: ScoreInCategory[];
  totalScore: number;
}
