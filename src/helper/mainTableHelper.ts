import { PlayerList } from "../data/PlayerList";
import { Categories, Game, Player, PlayerStats, Position, ScoreInCategory } from "../types/mainTypes";
import { GameList } from "../data/GameList";

const players = PlayerList;

const emptyPlayerStats = (player: Player) : PlayerStats => {
  return {
    name: player.name,
    id: player.id,
    firstWonder: 0,
    scoreInCategories: [],
    firstReligion: 0,
    firstWar: 0,
    firstTakenCitie: 0,
    wins: 0,
    totalScore: 0,
  };
}

function calculateScoreValue(playerPositionInScore: number, numberOfPlayerWithPosition: number) {
  if (playerPositionInScore > 5) {
    return 0;
  }
  switch ( playerPositionInScore + numberOfPlayerWithPosition ) {
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
    playerStats.firstTakenCitie +
    playerStats.firstWar +
    playerStats.firstReligion +
    playerStats.firstWonder;
  for ( let i = 0; i < playerStats.scoreInCategories.length - 1; i ++ ) {
    const scoreInCategory = playerStats.scoreInCategories[i];
    totalScore += scoreInCategory.score;
  }
  return totalScore;
}

export const getPlayerStats = (): PlayerStats[] => {
  const generalStats: PlayerStats[] = [] as PlayerStats[];
  for ( let i = 0; i < players.length - 1 ; i ++ ) {
    console.log('player', i);
    const player = players[i];
    const playerStats: PlayerStats = emptyPlayerStats(player);
    for ( let j = 0; j < GameList.length - 1; j ++ ) {
      console.log('game', j);
      const game = GameList[j];
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
          playerStats.firstTakenCitie = playerStats.firstTakenCitie + 2;
        }
        if ( game.firstWonder === player.id ) {
          playerStats.firstWonder = playerStats.firstWonder + 2;
        }
        const scoreInCategories: ScoreInCategory[] = [];
        for ( let k = 0; k < game.scoreCategory.length - 1; k ++ ) {
          const score: Categories = game.scoreCategory[ k ];
          const positions: Position[] = score.positions;
          const positionInScore = positions.filter((position) => position.playerId === player.id);
          const playerPositionInScore = positionInScore[ 0 ].position;
          const numberOfPlayerWithPosition = positions.filter((position) => position.position === playerPositionInScore).length;
          const scoreValue = calculateScoreValue(playerPositionInScore, numberOfPlayerWithPosition);
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
    const totalScore = calculateTotalScore(playerStats);
    playerStats.totalScore = totalScore;
    generalStats.push(playerStats)
  }
  return generalStats;
}