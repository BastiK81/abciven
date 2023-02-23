export enum CivList {
  Aegypten = 'Ägypten',
  Amerika = 'Amerika',
  Arabien ='Arabien',
  Australien = 'Australien',
  Babylonien = 'Babylonien',
  Brasilien = 'Brasilien',
  Canada = 'Canada',
  China = 'China',
  Columbien = 'Kolumbien',
  Deutschland = 'Deutschland',
  England = 'England',
  Frankreich = 'Frankreich',
  Griechenland = 'Griechenland',
  Indien = 'Indien',
  Inka = 'Inka',
  Indonesien = 'Indonesien',
  Japan = 'Japan',
  Kongo = 'Kongo',
  Korea = 'Korea',
  Macedonien = 'Macedonien',
  Maori = 'Maori',
  Maya = 'Maya',
  Niederlande = 'Niederlande',
  Norwegen = 'Norwegen',
  Nubien = 'Nubien',
  OsmannischesReich = 'Osmannisches Reich',
  Persien = 'Persien',
  Roemer = 'Römer',
  Russisches_Reich = 'Russisches Reich',
  Schottland = 'Schottland',
  Ungarn = 'Ungarn'
}

export type LeaderType = {
  id: number;
  name: string;
  civ: CivList;
}

export const LeaderList: LeaderType[] = [
  {
    id: 1,
    name: 'Teddy Roosevelt',
    civ: CivList.Amerika
  },
  {
    id: 2,
    name: 'Teddy Roosevelt (Rough Rider)',
    civ: CivList.Amerika
  },
  {
    id: 3,
    name: 'Abraham Lincoln',
    civ: CivList.Amerika
  },
  {
    id: 4,
    name: 'Robert the Bruce',
    civ: CivList.Schottland
  },
  {
    id: 5,
    name: 'Friedrich Barbarossa',
    civ: CivList.Deutschland
  },
  {
    id: 6,
    name: 'Wilhelmina',
    civ: CivList.Niederlande
  },
  {
    id: 7,
    name: 'Hojo Tokimune',
    civ: CivList.Japan
  },
  {
    id: 8,
    name: 'Kupe',
    civ: CivList.Maori
  },
  {
    id: 9,
    name: 'Gitarja',
    civ: CivList.Indonesien
  },
  {
    id: 10,
    name: 'Pachacutec',
    civ: CivList.Inka
  },
  {
    id: 11,
    name: 'Trajan',
    civ: CivList.Roemer
  },
  {
    id: 12,
    name: 'Seondeok',
    civ: CivList.Korea
  },
  {
    id: 13,
    name: 'Saladin (Sultan)',
    civ: CivList.Arabien
  },
  {
    id: 14,
    name: 'Gorgo',
    civ: CivList.Griechenland
  },
  {
    id: 15,
    name: 'Kublai Khan',
    civ: CivList.China
  },
  {
    id: 16,
    name: 'Mvemba a Nzinga',
    civ: CivList.Kongo
  },
  {
    id: 17,
    name: 'Amanitore',
    civ: CivList.Nubien
  },
  {
    id: 18,
    name: 'Suleiman',
    civ: CivList.OsmannischesReich
  },
  {
    id: 19,
    name: 'Peter',
    civ: CivList.Russisches_Reich
  },
  {
    id: 20,
    name: 'Alexander',
    civ: CivList.Macedonien
  },
  {
    id: 21,
    name: 'Wah Chanil Ajaw',
    civ: CivList.Maya
  },
  {
    id: 22,
    name: 'Simon Bolivar',
    civ: CivList.Columbien
  },
  {
    id: 23,
    name: 'Matthias Corvinus',
    civ: CivList.Ungarn
  },
  {
    id: 24,
    name: 'Saladin (Sultan)',
    civ: CivList.Arabien
  },
  {
    id: 25,
    name: 'Cyrus',
    civ: CivList.Persien
  },
  {
    id: 26,
    name: 'Eleore von Aquitanien (E)',
    civ: CivList.England
  },
  {
    id: 27,
    name: 'Eleore von Aquitanien (F)',
    civ: CivList.Frankreich
  },
  {
    id: 28,
    name: 'Harald Hardrada',
    civ: CivList.Norwegen
  },
  {
    id: 29,
    name: 'Nzinga Mbande',
    civ: CivList.Kongo
  },
  {
    id: 30,
    name: 'Wilfrid Laurier',
    civ: CivList.Canada
  },
  {
    id: 31,
    name: 'Ghandi',
    civ: CivList.Indien
  },
  {
    id: 32,
    name: 'Chandra Gupta',
    civ: CivList.Indien
  },
  {
    id: 33,
    name: 'John Curtin',
    civ: CivList.Australien
  },
  {
    id: 34,
    name: 'Hammurabi',
    civ: CivList.Babylonien
  },
  {
    id: 35,
    name: 'Ramesses II',
    civ: CivList.Aegypten
  },
  {
    id: 36,
    name: 'Kleopatra',
    civ: CivList.Aegypten
  },
  {
    id: 37,
    name: 'Kleopatra (Ptolemaios)',
    civ: CivList.Aegypten
  },
  {
    id: 38,
    name: 'Pedro II',
    civ: CivList.Brasilien
  },
  {
    id: 39,
    name: 'Pericles',
    civ: CivList.Griechenland
  }
  ]