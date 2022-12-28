import { Game } from "../../types/mainTypes";

export const Game20221222: Game = {
  id: 3,
  date: [ 2022, 12, 22 ],
  players: [
    {
      id: 1,
      civ: 'Nubien',
      leader: 'Amanitore'
    },
    {
      id: 2,
      civ: 'Schottland',
      leader: 'Robert the Bruce'
    },
    {
      id: 6,
      civ: 'Römisches Reich',
      leader: 'Trajan'
    },
    {
      id: 3,
      civ: 'China',
      leader: 'Kublai Khan'
    },
    {
      id: 4,
      civ: 'Kongo',
      leader: 'Mvemba a Nzinga'
    }
  ],
  winnerId: 0,
  firstReligion: 1,
  firstWar: 1,
  firstWonder: 0,
  firstTakenCity: 1,
  closed: false,
  scoreCategory: [
    {
      id: 1,
      name: 'Kultur',
      positions: [
        {
          playerId: 1,
          position: 2
        },
        {
          playerId: 2,
          position: 2
        },
        {
          playerId: 3,
          position: 2
        },
        {
          playerId: 4,
          position: 2
        },
        {
          playerId: 6,
          position: 1
        }

      ]
    },
    {
      id: 2,
      name: 'Glaube',
      positions: [
        {
          playerId: 1,
          position: 1
        },
        {
          playerId: 2,
          position: 5
        },
        {
          playerId: 3,
          position: 2
        },
        {
          playerId: 4,
          position: 4
        },
        {
          playerId: 6,
          position: 3
        }
      ]
    },
    {
      id: 3,
      name: 'Herrschaft',
      positions: [
        {
          playerId: 1,
          position: 1
        },
        {
          playerId: 2,
          position: 1
        },
        {
          playerId: 3,
          position: 1
        },
        {
          playerId: 4,
          position: 1
        },
        {
          playerId: 6,
          position: 1
        }
      ]
    },
    {
      id: 4,
      name: 'Technologie',
      positions: [
        {
          playerId: 1,
          position: 3
        },
        {
          playerId: 2,
          position: 5
        },
        {
          playerId: 3,
          position: 2
        },
        {
          playerId: 4,
          position: 4
        },
        {
          playerId: 6,
          position: 1
        }
      ]
    },
    {
      id: 5,
      name: 'Punkte',
      positions: [
        {
          playerId: 1,
          position: 1
        },
        {
          playerId: 2,
          position: 5
        },
        {
          playerId: 3,
          position: 2
        },
        {
          playerId: 4,
          position: 4
        },
        {
          playerId: 6,
          position: 3
        }
      ]
    },
    {
      id: 7,
      name: 'Diplomatie',
      positions: [
        {
          playerId: 1,
          position: 3
        },
        {
          playerId: 2,
          position: 3
        },
        {
          playerId: 3,
          position: 2
        },
        {
          playerId: 4,
          position: 2
        },
        {
          playerId: 6,
          position: 1
        }
      ]
    },
    {
      id: 6,
      name: 'Territorium',
      positions: [
        {
          playerId: 1,
          position: 1
        },
        {
          playerId: 2,
          position: 5
        },
        {
          playerId: 3,
          position: 3
        },
        {
          playerId: 4,
          position: 4
        },
        {
          playerId: 6,
          position: 2
        }
      ]
    }
  ],
}