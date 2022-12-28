import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { PlayerList } from "../data/PlayerList";
import { GameList } from "../data/GameList";
import { Player, ScoreInCategory, PlayerStats, Position, Categories, Game } from "../types/mainTypes";
import { getPlayerStats } from "../helper/mainTableHelper";

const MainTable = () => {

  return (
    <>
      <h2>Tabelle</h2>
      <Table size={"small"}>
        <TableHead>
          <TableRow>
            <TableCell>Spieler</TableCell>
            <TableCell align="right">Siege</TableCell>
            <TableCell align="right">erste Relegion</TableCell>
            <TableCell align="right">erstes Weltwunder</TableCell>
            <TableCell align="right">erste Kriege</TableCell>
            <TableCell align="right">erste Städteeroberung</TableCell>
            <TableCell align="right">Gesamt</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {getPlayerStats().sort((a, b) => b.totalScore - a.totalScore).map((playerStats) => (
              <TableRow key={playerStats.id}>
                <TableCell>{playerStats.name}</TableCell>
                <TableCell align="right">{playerStats.wins}</TableCell>
                <TableCell align="right">{playerStats.firstReligion}</TableCell>
                <TableCell align="right">{playerStats.firstWonder}</TableCell>
                <TableCell align="right">{playerStats.firstWar}</TableCell>
                <TableCell align="right">{playerStats.firstTakenCitie}</TableCell>
                <TableCell align="right">{playerStats.totalScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </>
  );
}

export default MainTable;