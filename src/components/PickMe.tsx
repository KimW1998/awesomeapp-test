import { useState } from "react";

const PickMe = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <p>You chose me {counter} times</p>
      <button
        onClick={(event) => setCounter(counter + 1)}
        className="pokemon-button"
      >
        Pick Me!!
      </button>
    </div>
  );
};

export default PickMe;
