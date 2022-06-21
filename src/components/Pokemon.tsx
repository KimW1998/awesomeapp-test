import PickMe from "./PickMe";

type PokemonsProps = {
  name: string;
  img: string;
  weight: number;
  type: string;
  Terrifying: boolean;
};

const Pokemon = (PokemonsProps: PokemonsProps) => {
  return (
    <div className="container-pokemon">
      <h1>{PokemonsProps.name}</h1>
      <img className="img-pokemon" src={PokemonsProps.img} alt="" />
      <p>Weight: {PokemonsProps.weight} KG</p>
      <p>Type: {PokemonsProps.type}</p>
      <p className="terrifying">
        {PokemonsProps.Terrifying ? "Very Dangerous" : "Extremely lovable"}
      </p>
      <PickMe />
    </div>
  );
};

export default Pokemon;
