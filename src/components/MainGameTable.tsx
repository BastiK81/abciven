import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { calculatePlayerStats, getAverageScoreById } from "../helper/mainTableHelper";
import * as React from "react";
import { Game } from "../types/mainTypes";

type MainGameTableTypes = {
  games: Game[];
}

const MainGameTable = (props: MainGameTableTypes) => {

  return (
    <Table size={ "small" }>
      <TableHead>
        <TableRow>
          <TableCell align="left">Spieler</TableCell>
          <TableCell align="right">Siege</TableCell>
          <TableCell align="right">erste Relegion</TableCell>
          <TableCell align="right">erstes Weltwunder</TableCell>
          <TableCell align="right">erster Krieg</TableCell>
          <TableCell align="right">erste Eroberung</TableCell>
          <TableCell align="right">Kultur</TableCell>
          <TableCell align="right">Religion</TableCell>
          <TableCell align="right">Herrschaft</TableCell>
          <TableCell align="right">Technologie</TableCell>
          <TableCell align="right">Punkte</TableCell>
          <TableCell align="right">Territorium</TableCell>
          <TableCell align="right">Diplomatie</TableCell>
          <TableCell align="right">Gesamt</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { calculatePlayerStats(props.games).sort((a, b) => b.totalScore - a.totalScore).map((playerStats) => (
          <TableRow key={ playerStats.id }>
            <TableCell align="left">{ playerStats.name }</TableCell>
            <TableCell align="right">{ (playerStats.wins / playerStats.gamesCount).toFixed(2) }</TableCell>
            <TableCell align="right">{ (playerStats.firstReligion / playerStats.gamesCount).toFixed(2) }</TableCell>
            <TableCell align="right">{ (playerStats.firstWonder / playerStats.gamesCount).toFixed(2) }</TableCell>
            <TableCell align="right">{ (playerStats.firstWar / playerStats.gamesCount).toFixed(2) }</TableCell>
            <TableCell align="right">{ (playerStats.firstConquest / playerStats.gamesCount).toFixed(2) }</TableCell>
            <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, 1) }</TableCell>
            <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, 2) }</TableCell>
            <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, 3) }</TableCell>
            <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, 4) }</TableCell>
            <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, 5) }</TableCell>
            <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, 6) }</TableCell>
            <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, 7) }</TableCell>
            <TableCell align="right">{ playerStats.totalScore.toFixed(2) }</TableCell>
          </TableRow>
        )) }
      </TableBody>
    </Table>
  );
}

export default MainGameTable;