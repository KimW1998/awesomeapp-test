// src/components/AddPlayerForm.tsx
import { useState } from "react";

type Props = {
  addPlayer: (name: string) => void;
};

const AddPlayerForm = (Props: Props) => {
  const [name, setName] = useState("");
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            Props.addPlayer(name);
            setName("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
};

export default AddPlayerForm;
