import { Category, Game, InGamePlayers } from "../types/mainTypes";
import { getPlayerById } from "./playerHelper";
import { calculateScoreValue } from "./mainTableHelper";
import { CategoryId } from "./MainSettingEnums";


export const calculateScoreOfCategoryWithRank = ( categories: Category[], playerPosition: number, categoryId: CategoryId ) => {
  if ( playerPosition === 0 ) {
    return 0;
  }
  const category = categories.find( ( category ) => category.id === categoryId );
  if ( category ) {
    return calculateScoreValue( playerPosition, category.positions.filter( ( position ) => position.position === playerPosition ).length );
  }
  return 0;
}

export const readPositionOutOfCategory = ( playerId: number, categories: Category[], categoryId: CategoryId ) => {
  const category = categories.find( ( category ) => category.id === categoryId );
  if ( category ) {
    const position = category.positions.find(
      ( position ) => position.playerId === playerId
    );
    if ( position ) {
      return position.position;
    }
  }
  return 0;
}

export const generateCategoryValue = ( playerId: number, categories: Category[], categoryId: CategoryId ) => {
  const rankInCategory = readPositionOutOfCategory( playerId, categories, categoryId )
  const scoreInCategory = calculateScoreOfCategoryWithRank( categories, rankInCategory, categoryId );
  return `${ rankInCategory } / ${ scoreInCategory }`;
}

export const bestInScore = ( categories: Category[], id: CategoryId ): string => {
  const positions = categories.filter( ( category ) => category.id === id )[0].positions
  if ( positions ) {
    const filteredPositions = positions.filter( ( position ) => position.position === 1 )
    if ( filteredPositions.length === 1 ) {
      return getPlayerById( filteredPositions[0].playerId ).name
    }
  }
  return ""
}

export const countPlayersFirstPlaces = ( game: Game ): { player: InGamePlayers, firstPlaces: number }[] => {
  const playerWithFirstPlaces: { player: InGamePlayers, firstPlaces: number }[] = []
  for ( let i = 0; i < game.players.length; i++ ) {
    const player = game.players[i]
    let counter = game.categories.filter( ( category ) => category.positions.filter( ( position ) => position.playerId === player.id && position.position === 1 ).length > 0 ).length
    if ( counter > 0 ) {
      playerWithFirstPlaces.push( { player, firstPlaces: counter } )
    }
  }
  return playerWithFirstPlaces.sort( ( a, b ) =>
    b.firstPlaces - a.firstPlaces
  );
}

export const bestPlayerInGame = ( game: Game ): InGamePlayers => {
  const playerWithFirstPlaces: { player: InGamePlayers, firstPlaces: number }[] = countPlayersFirstPlaces( game )
  const maxFirstPlaces = playerWithFirstPlaces[0].firstPlaces
  const bestPlayers =
    playerWithFirstPlaces.filter(
      ( player ) => player.firstPlaces === maxFirstPlaces
    )
  if ( bestPlayers.length === 1 ) {
    return bestPlayers[0].player
  }
  return {
    id: 0,
    leader: 0,
  }
}

export const setPlayerName = ( playerId: number ) => {
  if ( playerId === 0 ) {
    return '';
  }
  else {
    return getPlayerById( playerId ).name;
  }
}