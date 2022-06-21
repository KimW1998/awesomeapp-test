import { count } from "console";
import PickMe from "./PickMe";

type Pokemons = {
  name: string;
  img: string;
  weight: number;
  type: string;
  Terrifying: boolean;
};

const Pokemon = (Pokemons: Pokemons) => {
  return (
    <div className="container-pokemon">
      <h1>{Pokemons.name}</h1>
      <img className="img-pokemon" src={Pokemons.img} alt="" />
      <p>Weight: {Pokemons.weight} KG</p>
      <p>Type: {Pokemons.type}</p>
      <p className="terrifying">
        {Pokemons.Terrifying ? "Very Dangerous" : "Extremely lovable"}
      </p>
      <PickMe />
    </div>
  );
};

export default Pokemon;
