import { Game } from "../../types/mainTypes";
import { CategoryId } from "../../helper/MainSettingEnums";

export const Game20230216: Game = {
  id: 6,
  date: [ 2023, 2, 16 ],
  players: [
    {
      id: 1,
      leader: 26
    },
    {
      id: 2,
      leader: 30
    },
    {
      id: 3,
      leader: 28
    },
    {
      id: 6,
      leader: 29
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
      id: CategoryId.Technology,
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
      id: CategoryId.Diplomacy,
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
          position: 1
        },
        {
          playerId: 6,
          position: 4
        }
      ]
    }
  ]
}
