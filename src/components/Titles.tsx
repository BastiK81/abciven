import {
  getHighestEmperorTitle,
  getHighestReligiousTitle,
  getHighestWarManagerTitle,
  getHighestWinnerTitle,
  getHighestWonderTitle,
  getLastEmperorTitle,
  getLastReligiousTitle,
  getLastWarManagerTitle,
  getLastWinnerTitle,
  getLastWonderTitle
} from "../helper/titleHelper";
import {
  getHighestCultural,
  getHighestDiplomacy,
  getHighestMilitary,
  getHighestReligion,
  getHighestScore,
  getHighestTechnological,
  getHighestTerritory,
  getLastCultural,
  getLastDiplomacy,
  getLastMilitary,
  getLastReligion,
  getLastScore,
  getLastTechnological,
  getLastTerritory
} from "../helper/categoryTiltelHelper";
import { Grid } from "@mui/material";


const Titles = () => {

  return (
    <>
      <h1>Aktuelle Titel</h1>
      <Grid container spacing={ 2 } direction={"row"}>
        <Grid item xl={ 5 }>
          <div key='WinnerTitle'>
            <h2>{ getHighestWinnerTitle() }</h2>
            <h3>{ getLastWinnerTitle() }</h3>
          </div>
          <div key='WarMongerTitle'>
            <h2>{ getHighestWarManagerTitle() }</h2>
            <h3>{ getLastWarManagerTitle() }</h3>
          </div>
          <div key='Religious Title'>
            <h2> { getHighestReligiousTitle() }</h2>
            <h3> { getLastReligiousTitle() }</h3>
          </div>
          <div key='Wonder Title'>
            <h2> { getHighestWonderTitle() }</h2>
            <h3> { getLastWonderTitle() }</h3>
          </div>
          <div key='Emperor Title'>
            <h2> { getHighestEmperorTitle() }</h2>
            <h3> { getLastEmperorTitle() }</h3>
          </div>
        </Grid>
        <Grid item xl={ 5 }>
          <div key='Technological Title'>
            <h2> { getHighestTechnological() }</h2>
            <h3> { getLastTechnological() }</h3>
          </div>
          <div key='Cultural Title'>
            <h2> { getHighestCultural() }</h2>
            <h3> { getLastCultural() }</h3>
          </div>
          <div key='Military Title'>
            <h2> { getHighestMilitary() }</h2>
            <h3> { getLastMilitary() }</h3>
          </div>
          <div key='Religion Title'>
            <h2> { getHighestReligion() }</h2>
            <h3> { getLastReligion() }</h3>
          </div>
          <div key='Territory Title'>
            <h2> { getHighestTerritory() }</h2>
            <h3> { getLastTerritory() }</h3>
          </div>
          <div key='Score Title'>
            <h2> { getHighestScore() }</h2>
            <h3> { getLastScore() }</h3>
          </div>
          <div key='Diplomacy Title'>
            <h2> { getHighestDiplomacy() }</h2>
            <h3> { getLastDiplomacy() }</h3>
          </div>
        </Grid>
      </Grid>

    </>
  );
}

export default Titles;