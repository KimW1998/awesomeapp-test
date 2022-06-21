const Pokemons = () => {
  const PokemonList = [
    {
      name: "Charizard",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png",
      Weight: 60,
      type: "Fire",
      Terrifying: true,
    },
    {
      name: "Eevee",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      weight: 20,
      type: "Normal",
      Terrifying: false,
    },
  ];

  return { ...PokemonList };
};

export default Pokemons;
