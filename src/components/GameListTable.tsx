import { Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { bestInScore, readOutScore, setPlayerName } from "../helper/tableHelper";
import { getPlayerById } from "../helper/playerHelper";
import { Game, InGamePlayers } from "../types/mainTypes";

export type GameListTypes = {
  game: Game;
  bestPlayer: InGamePlayers;
  openGameId: number;
  handleChange: (id: number) => void;
}

const GameListTable = (props: GameListTypes) => {

  const { game, bestPlayer, openGameId, handleChange } = props;

  return (
    <TableContainer>
      <Table size={ "small" }>
        <TableHead>
          <TableRow>
            <TableCell>Spieler</TableCell>
            <TableCell>Oberhaupt</TableCell>
            <TableCell>Civ</TableCell>
            { game.score.sort((a, b) => a.id - b.id).map((score) => (
              <TableCell key={ score.id }>{ score.name }</TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={ game.id }>
            <TableCell key={ game.id + 'bestPlayerName' }>{ setPlayerName(bestPlayer.id) }</TableCell>
            <TableCell key={ game.id + 'bestPlayerLeader' }>{ bestPlayer.leader }</TableCell>
            <TableCell key={ game.id + 'bestPlayerCiv' }>{ bestPlayer.civ }</TableCell>
            { game.score.sort((a, b) => a.id - b.id).map((score) => (
              <TableCell>{ bestInScore(game.score, score.id) }</TableCell>
            )) }
            <TableCell key={ game.id + 'switch' }>
              <Switch size={ 'small' } checked={ openGameId === game.id } onChange={ () => handleChange(game.id) }/>
            </TableCell>
          </TableRow>
          {
            openGameId === game.id ? (
                game.players.sort((a, b) => a.id - b.id).map((player) => (
                  <TableRow key={ game.id + '-' + player.id }>
                    <TableCell
                      key={ game.id + '-' + player.id + 'PlayerName' }>{ getPlayerById(player.id).name }</TableCell>
                    <TableCell key={ game.id + '-' + player.id + 'PlayerLeader' }>{ player.leader }</TableCell>
                    <TableCell key={ game.id + '-' + player.id + 'PlayerCiv' }>{ player.civ }</TableCell>
                    {
                      game.score.sort((a, b) => a.id - b.id).map((score) => (
                        <TableCell
                          key={ game.id + '-' + player.id + 'PlayerScore' + score.id }
                        >
                          { readOutScore(player.id, game.score, score.id) }
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