import { CategoryId } from "../helper/MainSettingEnums";
import { LeaderType } from "../data/LeaderList";

export type PlayerType = {
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
  leader: number;
}

export type Position = {
  playerId: number;
  position: number;
}

export type Category = {
  id: CategoryId;
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
  closed: number;
  categories: Category[];
}

export type ScoreInCategory = {
  id: CategoryId;
  name: string;
  score: number;
  count: number;
}

export type PlayerStats = {
  id: number;
  gamesCount: number;
  name: string;
  wins: number;
  firstWonder: number;
  firstWar: number;
  firstReligion: number;
  firstConquest: number;
  scoreInCategories: ScoreInCategory[];
  totalScore: number;
}
