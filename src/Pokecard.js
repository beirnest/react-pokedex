import "./Pokecard.css"

const Pokecard = ({id, name, type, base_experience}) => (
  <div className="Pokecard">
    <h4 className="Pokecard-name">{name}</h4>
    <img className="Pokecard-img"  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}  />
      <div>Type: {type}</div>
      <div>EXP: {base_experience}</div>
  </div>
)

export default Pokecard;