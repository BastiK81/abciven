import { Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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

  const bestOrWinningPlayer  = (): InGamePlayers => {
    if ( game.winnerId !== 0 ) {
      return game.players.filter((player) => player.id === game.winnerId)[0];
    } else {
      return bestPlayer;
    }
  }

  return (
    <TableContainer>
      <Table size={ "small" }>
        <TableHead key={game.id}>
          <TableRow key={'headerRow' + game.id}>
            <TableCell key={'headerPlayer' + game.id}>Spieler</TableCell>
            <TableCell key={'headerLeader' + game.id}>Oberhaupt</TableCell>
            <TableCell key={'headerCiv' + game.id}>Civ</TableCell>
            { game.scoreCategory.sort((a, b) => a.id - b.id).map((score) => (
              <TableCell key={ 'header' + game.id + score.id }>{ score.name }</TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={ game.id }>
            <TableCell key={ game.id + 'bestPlayerName' }>{ setPlayerName(bestOrWinningPlayer().id) }</TableCell>
            <TableCell key={ game.id + 'bestPlayerLeader' }>{ bestOrWinningPlayer().leader }</TableCell>
            <TableCell key={ game.id + 'bestPlayerCiv' }>{ bestOrWinningPlayer().civ }</TableCell>
            { game.scoreCategory.sort((a, b) => a.id - b.id).map((score) => (
              <TableCell key={'bestInCategory'+ game.id + score.id}>{ bestInScore(game.scoreCategory, score.id) }</TableCell>
            )) }
            <TableCell key={ game.id + 'switch' }>
              {/*<Switch size={ 'small' } checked={ openGameId === game.id } onChange={ () => handleChange(game.id) }/>*/}
              { openGameId !== game.id ? (
              <Fab key={'add' + game.id} color="primary" aria-label="add" size={"small"} onClick={() => handleChange(game.id)}>
                <AddIcon />
              </Fab>
              ) : (
                <Fab key={'remove' + game.id} color="primary" aria-label="Remove" size={"small"} onClick={() => handleChange(game.id)}>
                  <RemoveIcon />
                </Fab>
                ) }
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
                      game.scoreCategory.sort((a, b) => a.id - b.id).map((score) => (
                        <TableCell
                          key={ game.id + '-' + player.id + 'PlayerScore' + score.id }
                        >
                          { readOutScore(player.id, game.scoreCategory, score.id) }
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