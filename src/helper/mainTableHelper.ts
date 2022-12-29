import { PlayerList } from "../data/PlayerList";
import { Categories, Game, Player, PlayerStats, ScoreInCategory } from "../types/mainTypes";
import { GameList } from "../data/GameList";

const players = PlayerList;

export const getAverageScoreById = ( scoreInCategories: ScoreInCategory[], number: number ) => {
  const scoreItem: ScoreInCategory = scoreInCategories.filter( ( score ) => score.id === number )[0]
  if ( scoreItem ) {
    return ( scoreItem.score / scoreItem.count ).toFixed( 2 );
  }
  return 0;
}

const emptyPlayerStats = ( player: Player ): PlayerStats => {
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
      return 5;
    case 2:
      return 4;
    case 3:
      return 3;
    case 4:
      return 2;
    case 5:
      return 1;
    default:
      return 0;
  }
}

function playerIsInGame( player: Player, game: Game ) {
  return game.players.some( ( gamePlayer ) => gamePlayer.id === player.id );
}

function calculateTotalScore( playerStats: PlayerStats ) {
  let totalScore =
    ( playerStats.wins / playerStats.gamesCount ) +
    ( playerStats.firstConquest / playerStats.gamesCount ) +
    ( playerStats.firstWar / playerStats.gamesCount ) +
    ( playerStats.firstReligion / playerStats.gamesCount ) +
    ( playerStats.firstWonder / playerStats.gamesCount );
  for ( let i = 0; i < playerStats.scoreInCategories.length - 1; i++ ) {
    const scoreInCategory = playerStats.scoreInCategories[i];
    totalScore = totalScore + scoreInCategory.score / scoreInCategory.count;
  }
  return totalScore;
}

const getGamesByTrigger = ( trigger: string ): Game[] => {
  switch ( trigger ) {
    case 'open':
      return GameList.filter( ( game ) => !game.closed );
    case 'closed':
      return GameList.filter( ( game ) => game.closed );
    default:
      return GameList;
  }
}

function setStaticPoints( calculatedPlayerStats: PlayerStats, game: Game ) {
  calculatedPlayerStats.gamesCount++;
  if ( game.winnerId === calculatedPlayerStats.id ) {
    calculatedPlayerStats.wins += 5;
  }
  if ( game.firstReligion === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstReligion += 2;
  }
  if ( game.firstWar === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstWar += 2;
  }
  if ( game.firstTakenCity === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstConquest += 2;
  }
  if ( game.firstWonder === calculatedPlayerStats.id ) {
    calculatedPlayerStats.firstWonder += 2;
  }
  return calculatedPlayerStats;
}

export const calculatePlayerStats = ( gamesTrigger: string ): PlayerStats[] => {
  const calculatedStats: PlayerStats[] = [] as PlayerStats[];
  const games = getGamesByTrigger( gamesTrigger );

  for ( let i = 0; i < players.length; i++ ) {
    const player = players[i];
    const calculatedScoreInCategories: ScoreInCategory[] = [];
    let calculatedPlayerStats: PlayerStats = emptyPlayerStats( player );

    for ( let j = 0; j < games.length; j++ ) {
      const game = games[j];

      if ( playerIsInGame( player, game ) ) {
        calculatedPlayerStats = setStaticPoints( calculatedPlayerStats, game );
        for ( let k = 0; k < game.scoreCategory.length; k++ ) {
          const scoreCategory: Categories = game.scoreCategory[k];

          const playerPositionInCategory = scoreCategory.positions.filter( ( position ) => position.playerId === player.id )[0].position;
          const numberOfPlayerWithPosition = scoreCategory.positions.filter( ( position ) => position.position === playerPositionInCategory ).length;
          const categoryScoreValue = calculateScoreValue( playerPositionInCategory, numberOfPlayerWithPosition );

          const presentCalculatedScoreInCategory = calculatedScoreInCategories.filter( ( scoreInCategory ) => scoreInCategory.id === scoreCategory.id )[0];
          if ( presentCalculatedScoreInCategory ) {
            presentCalculatedScoreInCategory.score = presentCalculatedScoreInCategory.score + categoryScoreValue;
            presentCalculatedScoreInCategory.count = presentCalculatedScoreInCategory.count + 1;
          }
          else {
            const playerScore: ScoreInCategory = {
              score: categoryScoreValue,
              name: scoreCategory.name,
              id: scoreCategory.id,
              count: 1,
            }
            calculatedScoreInCategories.push( playerScore );
          }
          calculatedPlayerStats.scoreInCategories = calculatedScoreInCategories;
        }
      }
      calculatedPlayerStats.totalScore = calculateTotalScore( calculatedPlayerStats );
    }
    calculatedStats.push( calculatedPlayerStats )
  }
  return calculatedStats;
}