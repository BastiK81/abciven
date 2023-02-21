import { Game } from "../../types/mainTypes";
import { CategoryId } from "../../helper/MainSettingEnums";

export const Game20221117: Game = {
  id: 1,
  date: [ 2022, 11, 17 ],
  winnerId: 0,
  firstReligion: 1,
  firstWar: 2,
  firstTakenCity: 2,
  firstWonder: 1,
  closed: 1,
  players: [
    {
      id: 1,
      leader: 4,
    },
    {
      id: 2,
      leader: 5
    },
    {
      id: 6,
      leader: 6
    },
    {
      id: 5,
      leader: 7
    },
    {
      id: 3,
      leader: 8
    },
    {
      id: 4,
      leader: 9
    }
  ],
  categories: [
    {
      id: CategoryId.Technology,
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
          position: 6
        },
        {
          playerId: 6,
          position: 6
        }
      ]
    },
    {
      id: CategoryId.Culture,
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
          position: 6
        },
        {
          playerId: 6,
          position: 6
        }

      ]
    },
    {
      id: CategoryId.Faith,
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
          position: 6
        },
        {
          playerId: 6,
          position: 6
        }
      ]
    },
    {
      id: CategoryId.Military,
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
          position: 6
        },
        {
          playerId: 6,
          position: 6
        }
      ]
    },
    {
      id: CategoryId.Territory,
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
      id: CategoryId.Diplomacy,
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
      id: CategoryId.Score,
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
          position: 6
        },
        {
          playerId: 6,
          position: 6
        }
      ]
    }
  ]
}