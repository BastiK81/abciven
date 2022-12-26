
import { PlayerList } from "../data/PlayerList";
import { Player } from "../components/mainTypes";

export const getPlayerById = (id: number): Player => {
  return PlayerList.find((player) => player.id === id) as Player;
}