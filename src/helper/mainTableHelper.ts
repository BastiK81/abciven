import { PlayerList } from "../data/PlayerList";
import { Categories, Game, Player, PlayerStats, Position, ScoreInCategory } from "../types/mainTypes";
import { GameList } from "../data/GameList";

const players = PlayerList;

export const getScoreById = ( scoreInCategories: ScoreInCategory[], number: number ) => {
  const scoreItem: ScoreInCategory = scoreInCategories.filter((score) => score.id === number)[0]
  if ( scoreItem ) {
    return scoreItem.score;
  }
  return 0;
}

const emptyPlayerStats = (player: Player) : PlayerStats => {
  return {
    name: player.name,
    id: player.id,
    firstWonder: 0,
    scoreInCategories: [],
    firstReligion: 0,
    firstWar: 0,
    firstTakenCity: 0,
    wins: 0,
    totalScore: 0,
  };
}

function calculateScoreValue(playerPositionInScore: number, numberOfPlayerWithPosition: number) {
  if (playerPositionInScore > 5 || playerPositionInScore === 0 ) {
    return 0;
  }
  switch ( playerPositionInScore + numberOfPlayerWithPosition - 1 ) {
    case 1: return 5;
    case 2: return 4;
    case 3: return 3;
    case 4: return 2;
    case 5: return 1;
    default: return 1;
  }
}

function playerIsInGame(player: Player, game: Game) {
  return game.players.some((gamePlayer) => gamePlayer.id === player.id);
}

function calculateTotalScore(playerStats: PlayerStats) {
  let totalScore =
    playerStats.wins +
    playerStats.firstTakenCity +
    playerStats.firstWar +
    playerStats.firstReligion +
    playerStats.firstWonder;
  for ( let i = 0; i < playerStats.scoreInCategories.length - 1; i ++ ) {
    const scoreInCategory = playerStats.scoreInCategories[i];
    totalScore += scoreInCategory.score;
  }
  return totalScore;
}

const getGamesByTrigger = (trigger: string): Game[] => {
  switch ( trigger ) {
    case 'open':  return GameList.filter((game) => !game.closed);
    case 'closed': return GameList.filter((game) => game.closed);
    default: return GameList;
  }
}

export const getPlayerStats = (gamesTrigger: string): PlayerStats[] => {
  const generalStats: PlayerStats[] = [] as PlayerStats[];
  const games = getGamesByTrigger(gamesTrigger);
  for ( let i = 0; i < players.length; i ++ ) {
    const player = players[i];
    const playerStats: PlayerStats = emptyPlayerStats(player);
    for ( let j = 0; j < games.length; j ++ ) {
      const game = games[j];
      if ( playerIsInGame(player, game) ) {
        if ( game.winnerId === player.id ) {
          playerStats.wins = playerStats.wins + 5;
        }
        if ( game.firstReligion === player.id ) {
          playerStats.firstReligion = playerStats.firstReligion + 2;
        }
        if ( game.firstWar === player.id ) {
          playerStats.firstWar = playerStats.firstWar + 2;
        }
        if ( game.firstTakenCity === player.id ) {
          playerStats.firstTakenCity = playerStats.firstTakenCity + 2;
        }
        if ( game.firstWonder === player.id ) {
          playerStats.firstWonder = playerStats.firstWonder + 2;
        }
        const scoreInCategories: ScoreInCategory[] = [];
        for ( let k = 0; k < game.scoreCategory.length; k ++ ) {
          const score: Categories = game.scoreCategory[ k ];
          const playerPositionInScore = score.positions.filter((position) => position.playerId === player.id)[ 0 ].position;
          const numberOfPlayerWithPosition = score.positions.filter((position) => position.position === playerPositionInScore).length;
          const scoreValue = calculateScoreValue(playerPositionInScore, numberOfPlayerWithPosition);
          console.log('position', playerPositionInScore, 'number with Positon', numberOfPlayerWithPosition, 'result',  scoreValue);
          const playerScore: ScoreInCategory = {
            score: scoreValue,
            name: score.name,
            id: score.id,
          }
          scoreInCategories.push(playerScore);
        }
        playerStats.scoreInCategories = scoreInCategories;
      }
    }
    playerStats.totalScore = calculateTotalScore(playerStats);
    generalStats.push(playerStats)
  }
  return generalStats;
}