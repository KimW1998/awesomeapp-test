type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

const Player = (Props: Props) => {
  return (
    <div className="Player-container">
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
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `${(Props.score / 100) * 100}%` }}
          aria-valuenow={Props.score}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default Player;
