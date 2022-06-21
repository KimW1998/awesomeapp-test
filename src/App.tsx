import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import ArticleList from "./components/ArticleList";

function App() {
  const PokemonList = [
    {
      name: "Charizard",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png",
      weight: "60",
      type: "Fire",
      Terrifying: true,
    },
    {
      name: "Eevee",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      weight: "20",
      type: "Normal",
      Terrifying: false,
    },
  ];
  return (
    <div className="App">
      <p>
        <Title content="Pokedex" />
        {PokemonList.map((pokemon) => {
          return (
            <div>
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
      </p>
      <ArticleList />
    </div>
  );
}

export default App;
