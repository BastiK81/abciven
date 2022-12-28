import { Game, InGamePlayers, Categories } from "../types/mainTypes";
import { getPlayerById } from "./playerHelper";

export const readOutScore = (playerId: number, score: Categories[], scoreId: number) => {
  const scoreObject = score.find((score) => score.id === scoreId);
  if ( scoreObject ) {
    const position = scoreObject.positions.find(
      (position) => position.playerId === playerId
    );
    if ( position ) {
      return position.position;
    }
  }
  return 0;
}

export const bestInScore = (score: Categories[], id: number): string => {
  const positions = score.filter((score) => score.id === id)[ 0 ].positions
  if ( positions ) {
    const filteredPositions = positions.filter((position) => position.position === 1)
    if ( filteredPositions.length === 1 ) {
      return getPlayerById(filteredPositions[ 0 ].playerId).name
    }
  }
  return ""
}

export const bestPlayerInGame = (game: Game): InGamePlayers => {
  const playerWithFirstPlaces: { player: InGamePlayers, firstPlaces: number }[] = []
  for ( let i = 0; i < game.players.length - 1; i ++ ) {
    const player = game.players[ i ]
    let counter = 0;
    for ( let j = 0; j < game.scoreCategory.length - 1; j ++ ) {
      const score = game.scoreCategory[ j ]
      for ( let k = 0; k < score.positions.length - 1; k ++ ) {
        const position = score.positions[ k ]
        if ( position.playerId === player.id ) {
          if ( position.position === 1 ) {
            counter ++
          }
        }
      };
    };
    if ( counter > 0 ) {
      playerWithFirstPlaces.push({ player, firstPlaces: counter })
    }
  }
  const maxFirstPlaces =
    playerWithFirstPlaces.sort(
      (a, b) =>
        b.firstPlaces - a.firstPlaces
    )[ 0 ].firstPlaces
  const bestPlayers =
    playerWithFirstPlaces.filter(
      (player) => player.firstPlaces === maxFirstPlaces
    )
  if ( bestPlayers.length === 1 ) {
    return bestPlayers[ 0 ].player
  }
  return {
    id: 0,
    leader: "",
    civ: ""
  }
}

export const setPlayerName = (playerId: number) => {
  if ( playerId === 0 ) {
    return '';
  } else {
    return getPlayerById(playerId).name;
  }
}