import { GameList } from "../data/GameList";
import { bestPlayerInGame } from "../helper/tableHelper";
import { useState } from "react";
import { InGamePlayers } from "../types/mainTypes";
import GameListTable from "./GameListTable";

type OpenOrClosedMatchesTypes = {
  closed: boolean;
}

const OpenOrClosedMatches = (props: OpenOrClosedMatchesTypes) => {

  const [ openGameId, setOpenGameId ] = useState<number>(0);

  const openMatches = GameList.filter((game) => game.closed === props.closed);

  function handleChange(id: number) {
    if ( openGameId === id ) {
      setOpenGameId(0);
    } else {
      setOpenGameId(id);
    }
  }

  return (
    <>
      <h2>Matches</h2>

      { openMatches.map((game) => {
        const bestPlayer: InGamePlayers = bestPlayerInGame(game);
        console.log('bestPlayer', bestPlayer);
        return (
          <GameListTable
            key={ game.id }
            game={ game }
            bestPlayer={ bestPlayer }
            openGameId={ openGameId }
            handleChange={ handleChange }
          />)
      }) }
    </>
  );
};

export default OpenOrClosedMatches;