import { PlayerList } from "../data/PlayerList";
import { Category, Game, PlayerType, PlayerStats, ScoreInCategory } from "../types/mainTypes";
import { GameList } from "../data/GameList";
import { CategoryId } from "./MainSettingEnums";
import { categoryScore, categoryScoreDecreaseFactor, firstPlayerScore, winnerScore } from "../data/MainSettings";

const players = PlayerList;

export const getAverageScoreById = ( scoreInCategories: ScoreInCategory[], number: CategoryId ) => {
  const scoreItem: ScoreInCategory = scoreInCategories.filter( ( score ) => score.id === number )[0]
  if ( scoreItem ) {
    return ( scoreItem.score / scoreItem.count ).toFixed( 2 );
  }
  return 0;
}

const emptyPlayerStats = ( player: PlayerType ): PlayerStats => {
  return {
    name: player.name,
    id: player.id,
    gamesCount: 0,
    firstWonder: 0,
    scoreInCategories: [],
    firstReligion: 0,
    firstWar: 0,
    firstConquest: 0,
    wins: 0,
    totalScore: 0,
  };
}

export const calculateScoreValue = ( playerPositionInScore: number, numberOfPlayerWithPosition: number ) => {
  if ( playerPositionInScore > 5 || playerPositionInScore === 0 ) {
    return 0;
  }
  if ( playerPositionInScore === 5 ) {
    return 1;
  }
  switch ( playerPositionInScore + numberOfPlayerWithPosition - 1 ) {
    case 1:
      return categoryScore;
    case 2:
      return categoryScore - 1 * categoryScoreDecreaseFactor;
    case 3:
      return categoryScore - 2 * categoryScoreDecreaseFactor;
    case 4:
      return categoryScore - 3 * categoryScoreDecreaseFactor;
    case 5:
      return categoryScore - 4 * categoryScoreDecreaseFactor;
    default:
      return 0;
  }
}

function playerIsInGame( player: PlayerType, game: Game ) {
  return game.players.some( ( gamePlayer ) => gamePlayer.id === player.id );
}

function calculateTotalScore( playerStats: PlayerStats ) {
  let totalScore =
    ( playerStats.wins / playerStats.gamesCount ) +
    ( playerStats.firstConquest / playerStats.gamesCount ) +
    ( playerStats.firstWar / playerStats.gamesCount ) +
    ( playerStats.firstReligion / playerStats.gamesCount ) +
    ( playerStats.firstWonder / playerStats.gamesCount );
  for ( let i = 0; i < playerStats.scoreInCategories.length; i++ ) {
    const scoreInCategory = playerStats.scoreInCategories[i];
    totalScore = totalScore + scoreInCategory.score / scoreInCategory.count;
  }
  return totalScore;
}

export const getGamesByTrigger = ( trigger: string ): Game[] => {
  switch ( trigger ) {
    case 'open':
      return GameList.filter( ( game ) => game.closed === 0 );
    case 'closed':
      return GameList.filter( ( game ) => game.closed === 1 );
    default:
      return GameList;
  }
}

function setStaticPoints( calculatedPlayerStats: PlayerStats, game: Game ) {
  calculatedPlayerStats.gamesCount++;
  if ( game.winnerId === calculatedPlayerStats.id ) {
    calculatedPlayerStats.wins += winnerScore;
  }
  if ( game.firstReligion === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstReligion += firstPlayerScore;
  }
  if ( game.firstWar === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstWar += firstPlayerScore;
  }
  if ( game.firstTakenCity === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstConquest += firstPlayerScore;
  }
  if ( game.firstWonder === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstWonder += firstPlayerScore;
  }
  return calculatedPlayerStats;
}

export const calculatePlayerStats = ( games: Game[] ): PlayerStats[] => {
  const calculatedStats: PlayerStats[] = [] as PlayerStats[];

  for ( let i = 0; i < players.length; i++ ) {
    const player = players[i];
    const calculatedScoreInCategories: ScoreInCategory[] = [];
    let calculatedPlayerStats: PlayerStats = emptyPlayerStats( player );

    for ( let j = 0; j < games.length; j++ ) {
      const game = games[j];

      if ( playerIsInGame( player, game ) ) {
        calculatedPlayerStats = setStaticPoints( calculatedPlayerStats, game );
        for ( let k = 0; k < game.categories.length; k++ ) {
          const category: Category = game.categories[k];

          const playerPositionInCategory: number = category.positions.filter( ( position ) => position.playerId === player.id )[0].position;
          const numberOfPlayerWithPosition: number = category.positions.filter( ( position ) => position.position === playerPositionInCategory ).length;
          const categoryScoreValue = calculateScoreValue( playerPositionInCategory, numberOfPlayerWithPosition );

          const presentCalculatedScoreInCategory = calculatedScoreInCategories.filter( ( scoreInCategory ) => scoreInCategory.id === category.id )[0];
          if ( presentCalculatedScoreInCategory ) {
            presentCalculatedScoreInCategory.score = presentCalculatedScoreInCategory.score + categoryScoreValue;
            presentCalculatedScoreInCategory.count = presentCalculatedScoreInCategory.count + 1;
          }
          else {
            const playerScoreInCategory: ScoreInCategory = {
              score: categoryScoreValue,
              name: category.id.toString(),
              id: category.id,
              count: 1,
            }
            calculatedScoreInCategories.push( playerScoreInCategory );
          }
          calculatedPlayerStats.scoreInCategories = calculatedScoreInCategories;
        }
      }
    }
    calculatedPlayerStats.totalScore = calculateTotalScore( calculatedPlayerStats );
    calculatedStats.push( calculatedPlayerStats )
  }
  return calculatedStats;
}