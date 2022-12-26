import { Game } from "../../types/mainTypes";

export const Game20222212: Game = {
  id: 2,
  date: [ 2022, 12, 8 ],
  players: [
    {
      id: 1,
      civ: 'Inka',
      leader: 'Pachacutec'
    },
    {
      id: 2,
      civ: 'Römisches Reich',
      leader: 'Trajan'
    },
    {
      id: 6,
      civ: 'Korea',
      leader: 'Seondeok'
    },
    {
      id: 3,
      civ: 'Arabien',
      leader: 'Saladin (Sultan)'
    },
    {
      id: 5,
      civ: 'Griechenland',
      leader: 'Gorgo'
    }
  ],
  winnerId: 0,
  firstReligion: 3,
  firstWar: 0,
  firstTakenCity: 0,
  closed: false,
  score: [
    {
      id: 1,
      name: 'Kultur',
      positions: [
        {
          playerId: 1,
          position: 4
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
          playerId: 5,
          position: 1
        },
        {
          playerId: 6,
          position: 5
        }

      ]
    },
    {
      id: 2,
      name: 'Glaube',
      positions: [
        {
          playerId: 1,
          position: 4
        },
        {
          playerId: 2,
          position: 2
        },
        {
          playerId: 3,
          position: 1
        },
        {
          playerId: 5,
          position: 2
        },
        {
          playerId: 6,
          position: 5
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
          playerId: 5,
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
          position: 4
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
          playerId: 4,
          position: 5
        },
        {
          playerId: 6,
          position: 2
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
          position: 4
        },
        {
          playerId: 5,
          position: 1
        },
        {
          playerId: 6,
          position: 5
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
          position: 3
        },
        {
          playerId: 3,
          position: 4
        },
        {
          playerId: 4,
          position: 1
        },
        {
          playerId: 6,
          position: 5
        }
      ]
    }
  ],
}