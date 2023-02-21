import { bestPlayerInGame } from "../helper/tableHelper";
import * as React from "react";
import { useState } from "react";
import { Game, InGamePlayers } from "../types/mainTypes";
import GameListTableBody from "./GameListTable";
import RadioButtonGameChoice from "./RadioButtonGameChoice";
import { getGamesByTrigger } from "../helper/mainTableHelper";
import MainGameTable from "./MainGameTable";
import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { categoryOrder } from "../helper/MainSettingEnums";

const Matches = () => {

  const [ openGame, setOpenGame ] = useState<Game>( {} as Game );
  const [ openTable, setOpenTable ] = useState( false );
  const [ valueRadioButton, setValueRadioButton ] = React.useState( 'all' );

  const handleChangeRadioButton = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setValueRadioButton( ( event.target as HTMLInputElement ).value );
  };

  const handleOpenTable = () => {
    setOpenTable( ( prev ) => !prev );
  }

  const games = getGamesByTrigger( valueRadioButton );

  function handleChange( game: Game ) {
    if ( openGame.id === game.id ) {
      setOpenGame( {} as Game );
      setOpenTable( false );
    }
    else {
      setOpenGame( game );
      setOpenTable( true );
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
      <div key={ 'game' }>
        <TableContainer>
          <Table size={ "small" }>
            <TableHead key={ `tableHeader` }>
              <TableRow key={ 'headerRow' }>
                <TableCell key={ 'headerCell' }></TableCell>
                <TableCell key={ 'headerPlayer' }>Spieler</TableCell>
                <TableCell key={ 'headerLeader' }>Oberhaupt</TableCell>
                <TableCell key={ 'headerCiv' }>Civ</TableCell>
                { categoryOrder.map( ( category ) => (
                  <TableCell key={ 'header' + category }>{ category }</TableCell>
                ) ) }
              </TableRow>
            </TableHead>
            { games.sort( ( a, b ) => b.closed - a.closed ).map( ( game ) => {
              const bestPlayer: InGamePlayers = bestPlayerInGame( game );
              return (
                <GameListTableBody
                  key={ game.id + 'gameListTable' }
                  game={ game }
                  bestPlayer={ bestPlayer }
                  openGame={ openGame }
                  handleChange={ handleChange }
                  handleOpenTable={ handleOpenTable }
                  openTable={ openTable }
                />
              )
            } ) }
          </Table>
        </TableContainer>
        {
          openTable ? (
            <MainGameTable
              games={ [ openGame ] }
              key={ openGame.id + 'gameTable' }
            />
          ) : null
        }
      </div>
    </div>
  );
};

export default Matches;