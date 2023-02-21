import { Game } from "../../types/mainTypes";
import { CategoryId } from "../../helper/MainSettingEnums";

export const Game20221208: Game = {
  id: 2,
  date: [ 2022, 12, 8 ],
  winnerId: 0,
  firstWonder: 0,
  firstReligion: 3,
  firstWar: 0,
  firstTakenCity: 0,
  closed: 0,
  players: [
    {
      id: 1,
      leader: 10
    },
    {
      id: 2,
      leader: 11
    },
    {
      id: 6,
      leader: 12
    },
    {
      id: 3,
      leader: 13
    },
    {
      id: 5,
      leader: 14
    }
  ],
  categories: [
    {
      id: CategoryId.Technology,
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
          playerId: 5,
          position: 5
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
      id: CategoryId.Faith,
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
      id: CategoryId.Territory,
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
    }
  ],
}