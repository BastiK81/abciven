import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { bestInScore, generateCategoryValue, setPlayerName } from "../helper/tableHelper";
import { getPlayerById } from "../helper/playerHelper";
import { Game, InGamePlayers } from "../types/mainTypes";
import React from "react";
import TableChartIcon from "@mui/icons-material/TableChart";

export type GameListTypes = {
  game: Game;
  bestPlayer: InGamePlayers;
  openGameId: number;
  handleChange: (id: number) => void;
  handleOpenTable: (gameId: number) => void;
  openTable: boolean;
}

const GameListTable = (props: GameListTypes) => {

  const { game, bestPlayer, openGameId, handleChange } = props;

  const bestOrWinningPlayer = (): InGamePlayers => {
    if ( game.winnerId !== 0 ) {
      return game.players.filter((player) => player.id === game.winnerId)[ 0 ];
    } else {
      return bestPlayer;
    }
  }

  function handleOpenTable(openGameId: number): void {
    props.handleOpenTable(openGameId);
  }

  return (
    <TableContainer>
      <Table size={ "small" }>
        <TableHead key={ game.id }>
          <TableRow key={ 'headerRow' + game.id }>
            <TableCell key={ 'headerCell' + game.id }></TableCell>
            <TableCell key={ 'headerPlayer' + game.id }>Spieler</TableCell>
            <TableCell key={ 'headerLeader' + game.id }>Oberhaupt</TableCell>
            <TableCell key={ 'headerCiv' + game.id }>Civ</TableCell>
            { game.categories.sort((a, b) => a.id - b.id).map((score) => (
              <TableCell key={ 'header' + game.id + score.id }>{ score.name }</TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={ game.id }>
            <TableCell key={ 'cell' + game.id }>Führender</TableCell>
            <TableCell key={ game.id + 'bestPlayerName' }>{ setPlayerName(bestOrWinningPlayer().id) }</TableCell>
            <TableCell key={ game.id + 'bestPlayerLeader' }>{ bestOrWinningPlayer().leader }</TableCell>
            <TableCell key={ game.id + 'bestPlayerCiv' }>{ bestOrWinningPlayer().civ }</TableCell>
            { game.categories.sort((a, b) => a.id - b.id).map((category) => (
              <TableCell
                key={ 'bestInCategory' + game.id + category.id }>{ bestInScore(game.categories, category.id) }</TableCell>
            )) }
            { openGameId === game.id ? (
                <TableCell key={ 'openTable' + game.id }>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={ () => handleOpenTable(game.id) }
                  >
                    <TableChartIcon />
                  </IconButton>
                </TableCell>
              ) :
              ( null )
            }
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={ () => handleChange(game.id) }
            >
              {openGameId !== game.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableRow>
          {
            openGameId === game.id ? (
                game.players.sort((a, b) => a.id - b.id).map((player) => (
                  <TableRow key={ game.id + '-' + player.id }>
                    <TableCell key={ 'emptyFirstCell' + game.id + '-' + player.id }></TableCell>
                    <TableCell
                      key={ game.id + '-' + player.id + 'PlayerName' }>{ getPlayerById(player.id).name }</TableCell>
                    <TableCell key={ game.id + '-' + player.id + 'PlayerLeader' }>{ player.leader }</TableCell>
                    <TableCell key={ game.id + '-' + player.id + 'PlayerCiv' }>{ player.civ }</TableCell>
                    {
                      game.categories.sort((a, b) => a.id - b.id).map((category) => (
                        <TableCell
                          key={ game.id + '-' + player.id + 'PlayerScore' + category.id }
                        >
                          { generateCategoryValue(player.id, game.categories, category.id) }
                        </TableCell>
                      )) }
                  </TableRow>
                ))) :
              null
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameListTable;