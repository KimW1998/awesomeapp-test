type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

const Player = (Props: Props) => {
  return (
    <li className="Player">
      <p className="font-monospace">
        {Props.name} (Score: {Props.score})
        <button
          type="button"
          className="increment-button btn btn-dark"
          onClick={Props.incrementScore}
        >
          increment
        </button>
      </p>
    </li>
  );
};

export default Player;
