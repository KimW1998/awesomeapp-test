import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <p>
        <Title content="test!" />
        <Pokemon
          name="Charizard"
          img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png"
          weight={60}
          power="Fire"
        />
      </p>
    </div>
  );
}

export default App;
