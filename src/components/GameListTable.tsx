import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { bestInScore, generateCategoryValue, setPlayerName } from "../helper/tableHelper";
import { getCivOfLeader, getLeaderName, getPlayerById } from "../helper/playerHelper";
import { Game, InGamePlayers } from "../types/mainTypes";
import React from "react";
import { categoryOrder } from "../helper/MainSettingEnums";

export type GameListTypes = {
  game: Game;
  bestPlayer: InGamePlayers;
  openGame: Game;
  handleChange: (id: Game) => void;
  handleOpenTable: () => void;
  openTable: boolean;
}

const GameListTable = (props: GameListTypes) => {

  const { game, bestPlayer, openGame, handleChange } = props;

  const bestOrWinningPlayer = (): InGamePlayers => {
    if ( game.winnerId !== 0 ) {
      return game.players.filter((player) => player.id === game.winnerId)[ 0 ];
    } else {
      return bestPlayer;
    }
  }

  return (
        <TableBody>
          <TableRow key={ `${game.id} tableRow` }>
            <TableCell key={ 'cell' + game.id }>Führender</TableCell>
            <TableCell key={ game.id + 'bestPlayerName' }>{ setPlayerName(bestOrWinningPlayer().id) }</TableCell>
            <TableCell key={ game.id + 'bestPlayerLeader' }>{ getLeaderName(bestOrWinningPlayer().leader) }</TableCell>
            <TableCell key={ game.id + 'bestPlayerCiv' }>{ getCivOfLeader(bestOrWinningPlayer().leader) }</TableCell>
            { game.categories.sort((a, b) => categoryOrder.indexOf(a.id) - categoryOrder.indexOf(b.id)).map((category) => (
              <TableCell
                key={ `bestInCategory${game.id}${category.id}` }>{ bestInScore(game.categories, category.id) }</TableCell>
            )) }
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={ () => handleChange(game) }
            >
              {openGame.id !== game.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableRow>
          {
            openGame.id === game.id ? (
                game.players.sort((a, b) => a.id - b.id).map((player) => (
                  <TableRow key={ `${ game.id }-${ player.id }scoreBoard` }>
                    <TableCell key={ 'emptyFirstCell' + game.id + '-' + player.id }></TableCell>
                    <TableCell
                      key={ game.id + '-' + player.id + 'PlayerNameScoreBoard' }>{ getPlayerById(player.id).name }</TableCell>
                    <TableCell key={ game.id + '-' + player.id + 'PlayerLeader' }>{ getLeaderName(player.leader) }</TableCell>
                    <TableCell key={ game.id + '-' + player.id + 'PlayerCiv' }>{ getCivOfLeader(player.leader) }</TableCell>
                    {
                      game.categories.sort((a, b) => categoryOrder.indexOf(a.id) - categoryOrder.indexOf(b.id)).map((category) => (
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
  );
}

export default GameListTable;