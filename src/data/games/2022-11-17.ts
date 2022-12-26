import { Game } from "../../types/mainTypes";

export const Game20221117: Game = {
  id: 1,
  date: [2022, 11, 17],
  players: [
    {
      id: 1,
      civ: 'Schottland',
      leader: 'Robert the Bruce'
    },
    {
      id: 2,
      civ: 'Deutschland',
      leader: 'Frederick Barbarossa'
    },
    {
      id: 6,
      civ: 'Niederlande',
      leader: 'Wilhelmina'
    },
    {
      id: 5,
      civ: 'Japan',
      leader: 'Hojo Tokimune'
    },
    {
      id: 3,
      civ: 'Maori',
      leader: 'Kupe'
    },
    {
      id: 4,
      civ: 'Indonesien',
      leader: 'Gitarja'
    }
  ],
  Score: [
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
          position: 1
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 5,
          position: 0
        },
        {
          playerId: 6,
          position: 0
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
          position: 4
        },
        {
          playerId: 3,
          position: 2
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 5,
          position: 0
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
          position: 3
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
          position: 3
        },
        {
          playerId: 5,
          position: 0
        },
        {
          playerId: 6,
          position: 0
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
          playerId: 4,
          position: 3
        },
        {
          playerId: 5,
          position: 0
        },
        {
          playerId: 6,
          position: 0
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
          position: 4
        },
        {
          playerId: 3,
          position: 1
        },
        {
          playerId: 4,
          position: 3
        },
        {
          playerId: 5,
          position: 0
        },
        {
          playerId: 6,
          position: 0
        }
      ]
    }
  ],
  winnerId: 0,
  firstReligion: 1,
  firstWar: 2,
  firstTakenCity: 2,
  closed: true,
}