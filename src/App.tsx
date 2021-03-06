import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import ArticleList from "./components/ArticleList";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  const PokemonList = [
    {
      name: "Charizard",
      weight: "90",
      type: "Fire",
      Terrifying: true,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png",
    },
    {
      name: "Bulbasaur",
      weight: "6.9",
      type: "Fire",
      Terrifying: false,
      img: "https://www.pokemonunited.nl/img/dex/home/bulbasaur.png",
    },
    {
      name: "Mewtwo",
      weight: "122",
      type: "Gost",
      Terrifying: false,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      name: "Mega beedrill",
      weight: "65",
      type: "Earth",
      Terrifying: true,
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015_f2.png",
    },
  ];

  return (
    <div className="App">
      <p>
        <Title content="Pokedex" />
        <div className="container-all-pokemons">
          {PokemonList.map((pokemon) => {
            return (
              <div className="container-cards-pokemons">
                <Pokemon
                  name={pokemon.name}
                  img={pokemon.img}
                  weight={pokemon.weight}
                  type={pokemon.type}
                  Terrifying={pokemon.Terrifying}
                />
              </div>
            );
          })}
        </div>
      </p>
      <hr />
      <div>
        <Scoreboard />
      </div>
      <hr />
      <ArticleList />
    </div>
  );
}

export default App;
