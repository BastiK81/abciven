import { bestPlayerInGame } from "../helper/tableHelper";
import * as React from "react";
import { useState } from "react";
import { InGamePlayers } from "../types/mainTypes";
import GameListTable from "./GameListTable";
import RadioButtonGameChoice from "./RadioButtonGameChoice";
import { getGamesByTrigger } from "../helper/mainTableHelper";

const Matches = () => {

  const [ openGameId, setOpenGameId ] = useState<number>( 0 );
  const [ valueRadioButton, setValueRadioButton ] = React.useState( 'all' );

  const handleChangeRadioButton = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setValueRadioButton( ( event.target as HTMLInputElement ).value );
  };

  const games = getGamesByTrigger( valueRadioButton );

  function handleChange( id: number ) {
    if ( openGameId === id ) {
      setOpenGameId( 0 );
    }
    else {
      setOpenGameId( id );
    }
  }

  return (
    <>
      <h2>Matches</h2>

      <RadioButtonGameChoice value={ valueRadioButton } handleChange={ handleChangeRadioButton }/>

      { games.sort( ( a, b ) => b.closed - a.closed ).map( ( game ) => {
        const bestPlayer: InGamePlayers = bestPlayerInGame( game );
        return (
          <GameListTable
            key={ game.id }
            game={ game }
            bestPlayer={ bestPlayer }
            openGameId={ openGameId }
            handleChange={ handleChange }
          /> )
      } ) }
    </>
  );
};

export default Matches;