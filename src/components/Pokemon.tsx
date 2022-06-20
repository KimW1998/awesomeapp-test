type Pokemons = {
  name: string;
  img: string;
  weight: number;
  power: string;
};

const Pokemon = (Pokemons: Pokemons) => {
  return (
    <div className="container-pokemon">
      <h1>{Pokemons.name}</h1>
      <img className="img-pokemon" src={Pokemons.img} alt="" />
      <p>Weight: {Pokemons.weight} KG</p>
      <p>Power: {Pokemons.power}</p>
    </div>
  );
};

export default Pokemon;
