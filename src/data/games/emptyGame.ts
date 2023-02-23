import { Game } from "../../types/mainTypes";
import { CategoryId } from "../../helper/MainSettingEnums";

export const GameDate: Game = {
  id: 0,
  date: [ 2023, 2, 3 ],
  players: [
    {
      id: 1,
      leader: 0
    },
    {
      id: 2,
      leader: 0
    },
    {
      id: 3,
      leader: 0
    },
    {
      id: 4,
      leader: 0
    },
    {
      id: 5,
      leader: 0
    },
    {
      id: 6,
      leader: 0
    }
  ],
  winnerId: 0,
  firstReligion: 0,
  firstWar: 0,
  firstWonder: 0,
  firstTakenCity: 0,
  closed: 0,
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
      id: CategoryId.Culture,
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
      id: CategoryId.Faith,
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
      id: CategoryId.Military,
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
      id: CategoryId.Territory,
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
      id: CategoryId.Diplomacy,
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
      id: CategoryId.Score,
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
    }
  ]
}
