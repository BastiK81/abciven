import { Game } from "../../types/mainTypes";
import { CategoryId } from "../../helper/MainSettingEnums";

export const Game20221222: Game = {
  id: 3,
  date: [ 2022, 12, 22 ],
  players: [
    {
      id: 1,
      leader: 17
    },
    {
      id: 2,
      leader: 4
    },
    {
      id: 6,
      leader: 11
    },
    {
      id: 3,
      leader: 15
    },
    {
      id: 4,
      leader: 16
    }
  ],
  winnerId: 0,
  firstReligion: 1,
  firstWar: 1,
  firstWonder: 3,
  firstTakenCity: 1,
  closed: 1,
  categories: [
    {
      id: CategoryId.Technology,
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
      id: CategoryId.Culture,
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
      id: CategoryId.Faith,
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
      id: CategoryId.Territory,
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
    },
    {
      id: CategoryId.Diplomacy,
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
      id: CategoryId.Score,
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
    }
  ],
}