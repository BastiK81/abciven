import { bestPlayerInGame } from "../helper/tableHelper";
import * as React from "react";
import { useState } from "react";
import { InGamePlayers } from "../types/mainTypes";
import GameListTable from "./GameListTable";
import RadioButtonGameChoice from "./RadioButtonGameChoice";
import { getGamesByTrigger } from "../helper/mainTableHelper";
import MainGameTable from "./MainGameTable";

const Matches = () => {

  const [ openGameId, setOpenGameId ] = useState<number>(0);
  const [ openTable, setOpenTable ] = useState(false);
  const [ valueRadioButton, setValueRadioButton ] = React.useState('all');

  const handleChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueRadioButton((event.target as HTMLInputElement).value);
  };

  const handleOpenTable = (gameId: number) => {
    setOpenTable((prev) => !prev);
  }

  const games = getGamesByTrigger(valueRadioButton);

  function handleChange(id: number) {
    if ( openGameId === id ) {
      setOpenGameId(0);
      setOpenTable(false);
    } else {
      setOpenGameId(id);
    }
  }

  return (
    <div key={ 'matches' }>
      <h2>Matches</h2>

      <RadioButtonGameChoice
        value={ valueRadioButton }
        handleChange={ handleChangeRadioButton }
        key={ 'radioButton' }
      />

      { games.sort((a, b) => b.closed - a.closed).map((game) => {
        const bestPlayer: InGamePlayers = bestPlayerInGame(game);
        return (
          <div key={ 'game' + game.id }>
            <GameListTable
              key={ game.id + 'gameListTable' }
              game={ game }
              bestPlayer={ bestPlayer }
              openGameId={ openGameId }
              handleChange={ handleChange }
              handleOpenTable={ handleOpenTable }
              openTable={ openTable }
            />
            {
              openGameId === game.id && openTable ? (
                <MainGameTable
                  games={ [ game ] }
                  key={game.id + 'gameTable'}
                />
              ) : (null)
            }
          </div>
        );
      }) }
    </div>
  );
};

export default Matches;