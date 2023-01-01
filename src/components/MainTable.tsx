import * as React from 'react';
import { getGamesByTrigger } from "../helper/mainTableHelper";
import RadioButtonGameChoice from "./RadioButtonGameChoice";
import MainGameTable from "./MainGameTable";

const MainTable = () => {

  const [ value, setValue ] = React.useState('all');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <h2>Tabelle</h2>

      <RadioButtonGameChoice value={ value } handleChange={ handleChange }/>
      <MainGameTable games={ getGamesByTrigger(value) }/>

    </>
  );
}

export default MainTable;