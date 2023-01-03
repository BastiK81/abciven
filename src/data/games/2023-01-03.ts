import { Game } from "../../types/mainTypes";

export const Game20230103: Game = {
  id: 4,
  date: [ 2023, 1, 3 ],
  players: [
    {
      id: 1,
      civ: 'Maya',
      leader: 'Wah Chanil Ajaw'
    },
    {
      id: 2,
      civ: '',
      leader: ''
    },
{
      id: 3,
      civ: '',
      leader: ''
},
{
      id: 6,
      civ: 'Osmannisches Reich',
      leader: 'Suleiman'
}
  ],
  winnerId: 0,
  firstReligion: 2,
  firstWar: 3,
  firstWonder: 6,
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
          position: 1
        },
        {
          playerId: 3,
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
          position: 1
        },
        {
          playerId: 3,
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
          position: 4
        },
        {
          playerId: 3,
          position: 2
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
          position: 2
        },
        {
          playerId: 3,
          position: 3
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
          position: 1
        },
        {
          playerId: 2,
          position: 1
        },
        {
          playerId: 3,
          position: 4
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
          position: 2
        },
        {
          playerId: 2,
          position: 1
        },
        {
          playerId: 3,
          position: 3
        },
        {
          playerId: 6,
          position: 4
        }
      ]
    }
  ]
}
