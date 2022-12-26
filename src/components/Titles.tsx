import { TitleList } from "../data/TitleList";
import { getPlayerById } from "../helper/playerHelper";
import { Title } from "./mainTypes";


const Titles = () => {

  function createTitle(title: Title) {
    if ( title.playerId === 0 ) {
      return '';
    }
    if ( title.titleIsPrefix ) {
      return `${ title.name } ${ getPlayerById(title.playerId).name }`;
    }
    return `${ getPlayerById(title.playerId).name } ${ title.name }`;
  }

  return (
    <>
      <h1>ABCIVEN</h1>
      { TitleList.map((title) => (
        <div key={ title.name }>
          <h2>{ createTitle(title) }</h2>
        </div>
      )) }
    </>
  );
}

export default Titles;