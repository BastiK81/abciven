import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { getPlayerStats, getScoreById } from "../helper/mainTableHelper";

const MainTable = () => {

  const [value, setValue] = React.useState('all');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <h2>Tabelle</h2>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="closed" control={<Radio />} label="Closed" />
          <FormControlLabel value="open" control={<Radio />} label="Open" />
        </RadioGroup>
      </FormControl>
      <Table size={"small"}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Spieler</TableCell>
            <TableCell align="right">Siege</TableCell>
            <TableCell align="right">erste Relegion</TableCell>
            <TableCell align="right">erstes Weltwunder</TableCell>
            <TableCell align="right">erste Kriege</TableCell>
            <TableCell align="right">erste Städteeroberung</TableCell>
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
            {getPlayerStats(value).sort((a, b) => b.totalScore - a.totalScore).map((playerStats) => (
              <TableRow key={playerStats.id}>
                <TableCell align="left">{playerStats.name}</TableCell>
                <TableCell align="right">{playerStats.wins}</TableCell>
                <TableCell align="right">{playerStats.firstReligion}</TableCell>
                <TableCell align="right">{playerStats.firstWonder}</TableCell>
                <TableCell align="right">{playerStats.firstWar}</TableCell>
                <TableCell align="right">{playerStats.firstTakenCity}</TableCell>
                <TableCell align="right">{ getScoreById( playerStats.scoreInCategories, 1 ) }</TableCell>
                <TableCell align="right">{ getScoreById( playerStats.scoreInCategories, 2 ) }</TableCell>
                <TableCell align="right">{ getScoreById( playerStats.scoreInCategories, 3 ) }</TableCell>
                <TableCell align="right">{ getScoreById( playerStats.scoreInCategories, 4 ) }</TableCell>
                <TableCell align="right">{ getScoreById( playerStats.scoreInCategories, 5 ) }</TableCell>
                <TableCell align="right">{ getScoreById( playerStats.scoreInCategories, 6 ) }</TableCell>
                <TableCell align="right">{ getScoreById( playerStats.scoreInCategories, 7 ) }</TableCell>
                <TableCell align="right">{playerStats.totalScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </>
  );
}

export default MainTable;