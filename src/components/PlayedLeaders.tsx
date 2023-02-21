import React from "react";
import { Grid, InputLabel, Select, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { getPlayedLeadersOfPlayer, playedLeaderList } from "../helper/playedLeaderHelper";
import { getCivOfLeader } from "../helper/playerHelper";
import FormControl from "@mui/material/FormControl";
import { PlayerType } from "../types/mainTypes";
import { PlayerList } from "../data/PlayerList";
import MenuItem from "@mui/material/MenuItem";

type PlayedNationsProps = {}


const PlayedLeaders = ( props: PlayedNationsProps) => {

  const [selectedPlayer, setSelectedPlayer] = React.useState<PlayerType>(PlayerList[0]);

  return (
    <Grid container spacing={ 2 } direction={"row"}>
      <Grid item xl={ 4 }>
        <h4>Gespielte Leader</h4>
        <Table size={"small"}>
          <TableHead>
            <TableRow>
              <TableCell>Leader</TableCell>
              <TableCell>Civ</TableCell>
              <TableCell>Anzahl</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { playedLeaderList
              .sort((a, b) => a.count > b.count ? -1 : 1)
              .map((leader) => {
                if (leader.count > 0) {
                  return (
                    <TableRow key={ `${ leader.id }bodyRow` }>
                      <TableCell>{ leader.name }</TableCell>
                      <TableCell>{ getCivOfLeader(leader.id) }</TableCell>
                      <TableCell align={"right"}>{ leader.count }</TableCell>
                    </TableRow>
                  );
                }
                return null;
              }) }
          </TableBody>

        </Table>
      </Grid>
      <Grid item xl={ 4 }>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Age</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={selectedPlayer.name}
            label="Age"
            onChange={(event) => {
              const player = PlayerList.find((player) => player.name === event.target.value);
              if (player) {
                setSelectedPlayer(player);
              }
            }}
          >
            {
              PlayerList.map((player) => {
                return <MenuItem key={player.name} value={player.name}>{player.name}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <Table size={"small"}>
          <TableHead>
            <TableRow>
              <TableCell>Leader</TableCell>
              <TableCell>Civ</TableCell>
              <TableCell>Anzahl</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            { getPlayedLeadersOfPlayer(selectedPlayer.id)
              .sort((a, b) => a.count > b.count ? -1 : 1 )
              .map((leader) => {
              if (leader.count > 0) {
                return (
                  <TableRow key={ `${ leader.id }bodyRow` }>
                    <TableCell>{ leader.name }</TableCell>
                    <TableCell>{ getCivOfLeader(leader.id) }</TableCell>
                    <TableCell align={"right"}>{ leader.count }</TableCell>
                  </TableRow>
                );
              }
            })
            }
          </TableBody>

        </Table>
      </Grid>
    </Grid>
  );
};

export default PlayedLeaders;