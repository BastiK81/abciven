import { Game } from "../../types/mainTypes";
import { CategoryId } from "../../helper/MainSettingEnums";

export const Game20230103: Game = {
  id: 4,
  date: [ 2023, 1, 3 ],
  players: [
    {
      id: 1,
      leader: 21
    },
    {
      id: 2,
      leader: 19
    },
    {
      id: 3,
      leader: 20
    },
    {
      id: 6,
      leader: 18
    }
  ],
  winnerId: 1,
  firstReligion: 2,
  firstWar: 3,
  firstWonder: 6,
  firstTakenCity: 3,
  closed: 1,
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
          playerId: 6,
          position: 2
        }
      ]
    },
    {
      id: CategoryId.Culture,
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
          position: 4
        },
        {
          playerId: 6,
          position: 3
        }

      ]
    },
    {
      id: CategoryId.Faith,
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
          position: 4
        },
        {
          playerId: 6,
          position: 3
        }
      ]
    },
    {
      id: CategoryId.Military,
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
      id: CategoryId.Territory,
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
      id: CategoryId.Diplomacy,
      positions: [
        {
          playerId: 1,
          position: 1
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
          position: 1
        },
        {
          playerId: 2,
          position: 2
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
  ]
}
