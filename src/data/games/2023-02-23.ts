import { Game } from "../../types/mainTypes";

export const Game20230203: Game = {
  id: 5,
  date: [ 2023, 2, 3 ],
  players: [
    {
      id: 1,
      civ: 'Großcolumbianisches Reich',
      leader: 'Simon Bolivar'
    },
    {
      id: 2,
      civ: 'Arabisches Reich',
      leader: 'Saladin Sultan'
    },
    {
      id: 3,
      civ: '',
      leader: ''
    },
    {
      id: 4,
      civ: 'Ungarisches Reich',
      leader: 'Matthias Corvinus'
    },
    {
      id: 6,
      civ: '',
      leader: ''
    }
  ],
  winnerId: 0,
  firstReligion: 3,
  firstWar: 0,
  firstWonder: 1,
  firstTakenCity: 3,
  closed: 0,
  categories: [
    {
      id: 1,
      name: 'Kultur',
      positions: [
        {
          playerId: 1,
          position: 1
        },
        {
          playerId: 2,
          position: 0
        },
        {
          playerId: 3,
          position: 0
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 6,
          position: 3
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
          position: 0
        },
        {
          playerId: 3,
          position: 0
        },
        {
          playerId: 4,
          position: 3
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
          position: 0
        },
        {
          playerId: 3,
          position: 0
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 6,
          position: 3
        }
      ]
    },
    {
      id: 4,
      name: 'Technologie',
      positions: [
        {
          playerId: 1,
          position: 1
        },
        {
          playerId: 2,
          position: 0
        },
        {
          playerId: 3,
          position: 0
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 6,
          position: 3
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
          position: 0
        },
        {
          playerId: 3,
          position: 0
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 6,
          position: 3
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
          position: 0
        },
        {
          playerId: 3,
          position: 0
        },
        {
          playerId: 4,
          position: 3
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
          position: 1
        },
        {
          playerId: 2,
          position: 0
        },
        {
          playerId: 3,
          position: 0
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 6,
          position: 3
        }
      ]
    },
  ]
}
