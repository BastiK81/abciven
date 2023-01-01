import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

type RadioButtonGameChoiceTypes = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonGameChoice = (props: RadioButtonGameChoiceTypes) => {

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={ props.value }
        onChange={ props.handleChange }
      >
        <FormControlLabel value="open" control={ <Radio/> } label="Offen"/>
        <FormControlLabel value="closed" control={ <Radio/> } label="Abgeschlossen"/>
        <FormControlLabel value="all" control={ <Radio/> } label="Alle"/>


      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonGameChoice;