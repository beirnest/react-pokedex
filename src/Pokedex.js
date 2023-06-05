import "./Pokedex.css"
import Pokecard from "./Pokecard";

function Pokedex({ pokemon }) {

  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header">Pokedex</h1>
      {pokemon.map(i => <Pokecard
        key={i.id}
        id={i.id}
        name={i.name}
        type={i.type}
        base_experience={i.base_experience}
      />)}
    </div>
  );
}

export default Pokedex;