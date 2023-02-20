import { GameList } from "../data/GameList";
import { PlayerList } from "../data/PlayerList";

const HIGHEST_WAR_MANAGER_TITLE = "der Konfliktbereite";
const LAST_WAR_MANAGER_TITLE = "Kriegsverfechter";
const HIGHEST_RELIGIOUS_TITLE = "der Göttliche";
const LAST_RELIGIOUS_TITLE = "Erster Prophet";
const HIGHEST_WONDER_TITLE = "Baumeister der Wunder";
const LAST_WONDER_TITLE = "Titan der modernen Baukunst";
const HIGHEST_EMPEROR_TITLE = "der Erorberer";
const LAST_EMPEROR_TITLE = "Erster Kreuzfahrer";
const HIGHEST_WINNER_TITLE = "the Winning Machine";
const LAST_WINNER_TITLE = "der letzte Triumphator";

export const allPlayerIds = PlayerList.map(player => player.id);
export const lastGameList = GameList.sort(( a, b) => {
  if (a.date[0] > b.date[0]) {
    return -1;
  }
  if (a.date[1] > b.date[1]) {
    return -1;
  }
  if (a.date[2] > b.date[2]) {
    return -1;
  }
  return 0;
})

export const getHighestWarManagerTitle = (): string => {
  let playerName: string = '';
  const highestWarManagerList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    if (game.firstWar) {
      const index = highestWarManagerList.findIndex(player => player.id === game.firstWar);
      highestWarManagerList[index].counter++;
    }
    highestWarManagerList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestWarManagerList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_WAR_MANAGER_TITLE}`;
}
export const getLastWarManagerTitle = (): string => {
  const findName = PlayerList.find(player => player.id === lastGameList[0].firstWar);
  return `${LAST_WAR_MANAGER_TITLE} ${findName ? findName.name : ''}`;
}

export const getHighestEmperorTitle = (): string => {
  let playerName: string = '';
  const highestEmperorList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    if (game.firstTakenCity) {
      const index = highestEmperorList.findIndex(player => player.id === game.firstTakenCity);
      highestEmperorList[index].counter++;
    }
    highestEmperorList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestEmperorList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_EMPEROR_TITLE}`;
}
export const getLastEmperorTitle = (): string => {
  const findName = PlayerList.find(player => player.id === lastGameList[0].firstTakenCity);
  return `${LAST_EMPEROR_TITLE} ${findName ? findName.name : ''}`;
}

export const getHighestWonderTitle = (): string => {
  let playerName: string = '';
  const highestWonderList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    if (game.firstWonder) {
      const index = highestWonderList.findIndex(player => player.id === game.firstWonder);
      highestWonderList[index].counter++;
    }
    highestWonderList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestWonderList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_WONDER_TITLE}`;
}
export const getLastWonderTitle = (): string => {
  const findName = PlayerList.find(player => player.id === lastGameList[0].firstWonder);
  return `${findName ? findName.name : ''} ${LAST_WONDER_TITLE}`;
}

export const getHighestReligiousTitle = (): string => {
  let playerName: string = '';
  const highestReligiousList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    if (game.firstReligion) {
      const index = highestReligiousList.findIndex(player => player.id === game.firstReligion);
      highestReligiousList[index].counter++;
    }
    highestReligiousList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestReligiousList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_RELIGIOUS_TITLE}`;
}
export const getLastReligiousTitle = (): string => {
  const findName = PlayerList.find(player => player.id === lastGameList[0].firstReligion);
  return `${LAST_RELIGIOUS_TITLE} ${findName ? findName.name : ''}`;
}

export const getHighestWinnerTitle = (): string => {
  let playerName: string = '';
  const highestWinnerList: {id: number, counter: number}[] = allPlayerIds.map(id => {
    return {id, counter: 0};
  })
  GameList.forEach(game => {
    if (game.winnerId) {
      const index = highestWinnerList.findIndex(player => player.id === game.winnerId);
      highestWinnerList[index].counter++;
    }
    highestWinnerList.sort((a, b) => b.counter - a.counter);
    const findName = PlayerList.find(player => player.id === highestWinnerList[0].id);
    playerName = findName ? findName.name : '';
  })
  return `${playerName} ${HIGHEST_WINNER_TITLE}`;
}
export const getLastWinnerTitle = (): string => {
  const findName = PlayerList.find(player => player.id === lastGameList[0].winnerId);
  return `${findName ? findName.name : ''} ${LAST_WINNER_TITLE}`;
}

