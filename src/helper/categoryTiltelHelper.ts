import { GameList } from "../data/GameList";
import { allPlayerIds, lastGameList } from "./titleHelper";
import { PlayerList } from "../data/PlayerList";
import { CategoryId } from "./MainSettingEnums";

const HIGHEST_TECHNOLOGICAL_TITLE = 'der Allwissende';
const LAST_TECHNOLOGICAL_TITLE = 'der Erfinder';
const HIGHEST_CULTURAL_TITLE = 'der Kulturbanause';
const LAST_CULTURAL_TITLE = 'der Ansehnliche';
const HIGHEST_RELIGION_TITLE = 'der Gottesfürchtige';
const LAST_RELIGION_TITLE = 'Ach du Heiliger';
const HIGHEST_MILITARY_TITLE = 'Oberster Kriegsherr';
const LAST_MILITARY_TITLE = 'General';
const HIGHEST_TERRITORY_TITLE = 'der Besitzergreifende'
const LAST_TERRITORY_TITLE = 'der Expandierende'
const HIGHEST_DIPLOMACY_TITLE = 'Meister des Kompromisses'
const LAST_DIPLOMACY_TITLE = 'der Verhandlungskünstler'
const HIGHEST_SCORE_TITLE = 'Topscorer'
const LAST_SCORE_TITLE = 'der Abstauber'

export const getHighestTechnological = () => {
  let playerName: string = '';
  const highestTechnologicalList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    const categories = game.categories
    const technologyCategory = categories.find( category => category.id === CategoryId.Technology)
    if (technologyCategory) {
      technologyCategory.positions.forEach( position => {
        if ( position.position === 1 ) {
          const index = highestTechnologicalList.findIndex( player => player.id === position.playerId );
          highestTechnologicalList[index].counter++;
        }
      } )
    }
    highestTechnologicalList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestTechnologicalList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_TECHNOLOGICAL_TITLE}`;
}
export const getLastTechnological = () => {
  let playerName = ''
  const lastGame = lastGameList[0];
  const categories = lastGame.categories
  const technologyCategory = categories.find( category => category.id === CategoryId.Technology)
  if (technologyCategory) {
    technologyCategory.positions.forEach( position => {
      if ( position.position === 1 ) {
        const findName = PlayerList.find(player => player.id === position.playerId);
        playerName = findName ? findName.name : '';
      }
    } )
  }
  return `${playerName} ${LAST_TECHNOLOGICAL_TITLE}`;
}

export const getHighestCultural = () => {
  let playerName: string = '';
  const highestCulturalList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    const categories = game.categories
    const culturalCategory = categories.find( category => category.id === CategoryId.Culture)
    if (culturalCategory) {
      culturalCategory.positions.forEach( position => {
        if ( position.position === 1 ) {
          const index = highestCulturalList.findIndex( player => player.id === position.playerId );
          highestCulturalList[index].counter++;
        }
      } )
    }
    highestCulturalList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestCulturalList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_CULTURAL_TITLE}`;
}
export const getLastCultural = () => {
  let playerName = ''
  const lastGame = lastGameList[0];
  const categories = lastGame.categories
  const culturalCategory = categories.find( category => category.id === CategoryId.Culture)
  if (culturalCategory) {
    culturalCategory.positions.forEach( position => {
      if ( position.position === 1 ) {
        const findName = PlayerList.find(player => player.id === position.playerId);
        playerName = findName ? findName.name : '';
      }
    } )
  }
  return `${playerName} ${LAST_CULTURAL_TITLE}`;
}

export const getHighestReligion = () => {
  let playerName: string = '';
  const highestReligionList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    const categories = game.categories
    const religionCategory = categories.find( category => category.id === CategoryId.Faith)
    if (religionCategory) {
      religionCategory.positions.forEach( position => {
        if ( position.position === 1 ) {
          const index = highestReligionList.findIndex( player => player.id === position.playerId );
          highestReligionList[index].counter++;
        }
      } )
    }
    highestReligionList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestReligionList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_RELIGION_TITLE}`;
}
export const getLastReligion = () => {
  let playerName = ''
  const lastGame = lastGameList[0];
  const categories = lastGame.categories
  const religionCategory = categories.find( category => category.id === CategoryId.Faith)
  if (religionCategory) {
    religionCategory.positions.forEach( position => {
      if ( position.position === 1 ) {
        const findName = PlayerList.find(player => player.id === position.playerId);
        playerName = findName ? findName.name : '';
      }
    } )
  }
  return `${LAST_RELIGION_TITLE} ${playerName}`;
}

export const getHighestMilitary = () => {
  let playerName: string = '';
  const highestMilitaryList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    const categories = game.categories
    const militaryCategory = categories.find( category => category.id === CategoryId.Military)
    if (militaryCategory) {
      militaryCategory.positions.forEach( position => {
        if ( position.position === 1 ) {
          const index = highestMilitaryList.findIndex( player => player.id === position.playerId );
          highestMilitaryList[index].counter++;
        }
      } )
    }
    highestMilitaryList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestMilitaryList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${HIGHEST_MILITARY_TITLE} ${playerName} `;
}
export const getLastMilitary = () => {
  let playerName = ''
  const lastGame = lastGameList[0];
  const categories = lastGame.categories
  const militaryCategory = categories.find( category => category.id === CategoryId.Military)
  if (militaryCategory) {
    militaryCategory.positions.forEach( position => {
      if ( position.position === 1 ) {
        const findName = PlayerList.find(player => player.id === position.playerId);
        playerName = findName ? findName.name : '';
      }
    } )
  }
  return `${LAST_MILITARY_TITLE} ${playerName}`;
}

export const getHighestTerritory = () => {
  let playerName: string = '';
  const highestTerritoryList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    const categories = game.categories
    const territoryCategory = categories.find( category => category.id === CategoryId.Territory)
    if (territoryCategory) {
      territoryCategory.positions.forEach( position => {
        if ( position.position === 1 ) {
          const index = highestTerritoryList.findIndex( player => player.id === position.playerId );
          highestTerritoryList[index].counter++;
        }
      } )
    }
    highestTerritoryList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestTerritoryList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_TERRITORY_TITLE}`;
}
export const getLastTerritory = () => {
  let playerName = ''
  const lastGame = lastGameList[0];
  const categories = lastGame.categories
  const territoryCategory = categories.find( category => category.id === CategoryId.Territory)
  if (territoryCategory) {
    territoryCategory.positions.forEach( position => {
      if ( position.position === 1 ) {
        const findName = PlayerList.find(player => player.id === position.playerId);
        playerName = findName ? findName.name : '';
      }
    } )
  }
  return `${playerName} ${LAST_TERRITORY_TITLE}`;
}

export const getHighestDiplomacy = () => {
  let playerName: string = '';
  const highestDiplomacyList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    const categories = game.categories
    const diplomacyCategory = categories.find( category => category.id === CategoryId.Diplomacy)
    if (diplomacyCategory) {
      diplomacyCategory.positions.forEach( position => {
        if ( position.position === 1 ) {
          const index = highestDiplomacyList.findIndex( player => player.id === position.playerId );
          highestDiplomacyList[index].counter++;
        }
      } )
    }
    highestDiplomacyList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestDiplomacyList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_DIPLOMACY_TITLE}`;
}
export const getLastDiplomacy = () => {
  let playerName = ''
  const lastGame = lastGameList[0];
  const categories = lastGame.categories
  const diplomacyCategory = categories.find( category => category.id === CategoryId.Diplomacy)
  if (diplomacyCategory) {
    diplomacyCategory.positions.forEach( position => {
      if ( position.position === 1 ) {
        const findName = PlayerList.find(player => player.id === position.playerId);
        playerName = findName ? findName.name : '';
      }
    } )
  }
  return `${playerName} ${LAST_DIPLOMACY_TITLE}`;
}

export const getHighestScore = () => {
  let playerName: string = '';
  const highestScoreList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    const categories = game.categories
    const scoreCategory = categories.find( category => category.id === CategoryId.Score)
    if (scoreCategory) {
      scoreCategory.positions.forEach( position => {
        if ( position.position === 1 ) {
          const index = highestScoreList.findIndex( player => player.id === position.playerId );
          highestScoreList[index].counter++;
        }
      } )
    }
    highestScoreList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestScoreList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${HIGHEST_SCORE_TITLE} ${playerName}`;
}
export const getLastScore = () => {
  let playerName = ''
  const lastGame = lastGameList[0];
  const categories = lastGame.categories
  const scoreCategory = categories.find( category => category.id === CategoryId.Score)
  if (scoreCategory) {
    scoreCategory.positions.forEach( position => {
      if ( position.position === 1 ) {
        const findName = PlayerList.find(player => player.id === position.playerId);
        playerName = findName ? findName.name : '';
      }
    } )
  }
  return `${playerName} ${LAST_SCORE_TITLE}`;
}
