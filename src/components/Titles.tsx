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
import { Card, CardContent, CardHeader, Grid } from "@mui/material";


const Titles = () => {

  return (
      <Grid container spacing={ 2 } padding={2} direction={"row"}>
        <Grid item xl={ 3 }>
          <Card variant="outlined" >
            <CardHeader title='Siege' />
                <CardContent>
                  <h2>{ getHighestWinnerTitle() }</h2>
                <h3>{ getLastWinnerTitle() }</h3>
                </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Kriege' />
            <CardContent>
              <h2>{ getHighestWarManagerTitle() }</h2>
              <h3>{ getLastWarManagerTitle() }</h3>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Religion' />
            <CardContent>
              <h2>{ getHighestReligiousTitle() }</h2>
              <h3>{ getLastReligiousTitle() }</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={ 3 } >
          <Card variant="outlined">
            <CardHeader title='Weltwunder' />
            <CardContent>
              <h2>{ getHighestWonderTitle() }</h2>
              <h3>{ getLastWonderTitle() }</h3>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Eroberung' />
            <CardContent>
              <h2>{ getHighestEmperorTitle() }</h2>
              <h3>{ getLastEmperorTitle() }</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={ 3 } >
          <Card variant="outlined">
            <CardHeader title='Technologie' />
            <CardContent>
              <h2>{ getHighestTechnological() }</h2>
              <h3>{ getLastTechnological() }</h3>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Kultur' />
            <CardContent>
              <h2>{ getHighestCultural() }</h2>
              <h3>{ getLastCultural() }</h3>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Religion' />
            <CardContent>
              <h2>{ getHighestReligion() }</h2>
              <h3>{ getLastReligion() }</h3>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Herrschaft' />
            <CardContent>
              <h2>{ getHighestMilitary() }</h2>
              <h3>{ getLastMilitary() }</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={ 3 } >
          <Card variant="outlined">
            <CardHeader title='Territorial' />
            <CardContent>
              <h2>{ getHighestTerritory() }</h2>
              <h3>{ getLastTerritory() }</h3>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Diplomatie' />
            <CardContent>
              <h2>{ getHighestDiplomacy() }</h2>
              <h3>{ getLastDiplomacy() }</h3>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader title='Score' />
            <CardContent>
              <h2>{ getHighestScore() }</h2>
              <h3>{ getLastScore() }</h3>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
}

export default Titles;