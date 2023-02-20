import { Game } from "../../types/mainTypes";

export const Game20230216: Game = {
  id: 5,
  date: [ 2023, 2, 16 ],
  players: [
    {
      id: 1,
      civ: 'England',
      leader: 'Eleonora'
    },
    {
      id: 2,
      civ: 'Kanada',
      leader: 'Wilfrid Laurier'
    },
    {
      id: 3,
      civ: 'Norwegen',
      leader: 'Harald '
    },
    {
      id: 6,
      civ: 'Kongolesisches Reich',
      leader: ''
    }
  ],
  winnerId: 3,
  firstReligion: 3,
  firstWar: 1,
  firstWonder: 6,
  firstTakenCity: 3,
  closed: 1,
  categories: [
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
          position: 4
        },
        {
          playerId: 3,
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
          position: 2
        },
        {
          playerId: 2,
          position: 3
        },
        {
          playerId: 3,
          position: 1
        },

        {
          playerId: 6,
          position: 0
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
          position: 1
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
          playerId: 6,
          position: 4
        }
      ]
    },
    {
      id: 5,
      name: 'Punkte',
      positions: [
        {
          playerId: 1,
          position: 2
        },
        {
          playerId: 2,
          position: 3
        },
        {
          playerId: 3,
          position: 1
        },
        {
          playerId: 6,
          position: 4
        }
      ]
    },
    {
      id: 6,
      name: 'Territorium',
      positions: [
        {
          playerId: 1,
          position: 3
        },
        {
          playerId: 2,
          position: 1
        },
        {
          playerId: 3,
          position: 2
        },
        {
          playerId: 6,
          position: 4
        }
      ]
    },
    {
      id: 7,
      name: 'Diplomatie',
      positions: [
        {
          playerId: 1,
          position: 2
        },
        {
          playerId: 2,
          position: 4
        },
        {
          playerId: 3,
          position: 1
        },
        {
          playerId: 6,
          position: 2
        }
      ]
    },
  ]
}
