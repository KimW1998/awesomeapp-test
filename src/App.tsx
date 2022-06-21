import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import Test from "./components/test";
function App() {
  return (
    <div className="App">
      <p>
        <Title content="Pokedex" />
        <Pokemon
          name="Charizard"
          img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png"
          weight={60}
          type="Fire"
          Terrifying={true}
        />
        <Pokemon
          name="Eevee"
          img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
          weight={20}
          type="Normal"
          Terrifying={false}
        />
      </p>

      <Test />
    </div>
  );
}

export default App;
