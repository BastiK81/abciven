import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { calculatePlayerStats, getAverageScoreById } from "../helper/mainTableHelper";
import * as React from "react";
import { Game } from "../types/mainTypes";
import { CategoryId } from "../helper/MainSettingEnums";

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
          <TableCell align="right">{CategoryId.Technology.toString()}</TableCell>
          <TableCell align="right">{CategoryId.Culture.toString()}</TableCell>
          <TableCell align="right">{CategoryId.Faith.toString()}</TableCell>
          <TableCell align="right">{CategoryId.Military.toString()}</TableCell>
          <TableCell align="right">{CategoryId.Territory.toString()}</TableCell>
          <TableCell align="right">{CategoryId.Diplomacy.toString()}</TableCell>
          <TableCell align="right">{CategoryId.Score.toString()}</TableCell>
          <TableCell align="right">Gesamt</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { calculatePlayerStats(props.games).sort((a, b) => b.totalScore - a.totalScore).map((playerStats) => {
          if (!(playerStats.gamesCount === 0)) {
            return (
              <TableRow key={ playerStats.id }>
                <TableCell align="left">{ playerStats.name }</TableCell>
                <TableCell align="right">{ (playerStats.wins / playerStats.gamesCount).toFixed(2) }</TableCell>
                <TableCell align="right">{ (playerStats.firstReligion / playerStats.gamesCount).toFixed(2) }</TableCell>
                <TableCell align="right">{ (playerStats.firstWonder / playerStats.gamesCount).toFixed(2) }</TableCell>
                <TableCell align="right">{ (playerStats.firstWar / playerStats.gamesCount).toFixed(2) }</TableCell>
                <TableCell align="right">{ (playerStats.firstConquest / playerStats.gamesCount).toFixed(2) }</TableCell>
                <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, CategoryId.Technology) }</TableCell>
                <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, CategoryId.Culture) }</TableCell>
                <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, CategoryId.Faith) }</TableCell>
                <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, CategoryId.Military) }</TableCell>
                <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, CategoryId.Territory) }</TableCell>
                <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, CategoryId.Diplomacy) }</TableCell>
                <TableCell align="right">{ getAverageScoreById(playerStats.scoreInCategories, CategoryId.Score) }</TableCell>
                <TableCell align="right">{ playerStats.totalScore.toFixed(2) }</TableCell>
              </TableRow>
            )
          }
          return null;
        }) }
      </TableBody>
    </Table>
  );
}

export default MainGameTable;