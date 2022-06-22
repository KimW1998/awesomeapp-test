type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

const Player = (Props: Props) => {
  return (
    <li className="Player">
      <p>
        {Props.name} (Score: {Props.score} {""})
        <button className="increment-button" onClick={Props.incrementScore}>
          increment
        </button>
      </p>
    </li>
  );
};

export default Player;
