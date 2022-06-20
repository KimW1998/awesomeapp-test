type Pokemons = {
  name: string;
  img: string;
  weight: number;
  type: string;
};

const Pokemon = (Pokemons: Pokemons) => {
  return (
    <div className="container-pokemon">
      <h1>{Pokemons.name}</h1>
      <img className="img-pokemon" src={Pokemons.img} alt="" />
      <p>Weight: {Pokemons.weight} KG</p>
      <p>Type: {Pokemons.type}</p>
      <button className="pokemon-button">Pick Me!</button>
    </div>
  );
};

export default Pokemon;
