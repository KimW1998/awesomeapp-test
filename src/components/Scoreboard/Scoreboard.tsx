import { useState } from "react";

import Player from "./Player/Player";
import AddPlayerForm from "./AddPlayerForm";

type PlayerObj = {
  id: number;
  name: string;
  score: number;
};

const compareByScore = (playerA: PlayerObj, playerB: PlayerObj) => {
  return playerB.score - playerA.score;
};

const compareByName = (playerA: PlayerObj, playerB: PlayerObj) => {
  return playerA.name.localeCompare(playerB.name);
};

const Scoreboard = () => {
  const [sortBy, setSortBy] = useState("score");

  const [players, setPlayers] = useState<PlayerObj[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const reset = () => {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
          score: 0,
        };
      })
    );
  };

  const incrementScore = (id: number) => {
    const updatedPlayersArray = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    setPlayers(updatedPlayersArray);
  };

  const playersSorted = [...players].sort(
    sortBy === "score" ? compareByScore : compareByName
  );
  [...players].sort(sortBy === "name" ? compareByName : compareByScore);

  const addPlayer = (name: string) => {
    console.log("Let's add a new player with the name:", name);

    const newPlayerId = Math.max(...players.map((p) => p.id)) + 1;
    setPlayers([...players, { id: newPlayerId, name, score: 0 }]);
  };

  return (
    <div className="Scoreboard container-fluid">
      <p>
        Sort order:{" "}
        <select
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button type="button" className="btn btn-dark" onClick={reset}>
        Reset
      </button>
      <div>
        <p className="fs-3">Player's scores:</p>

        {playersSorted.map((player) => {
          return (
            <Player
              key={player.id}
              name={player.name}
              score={player.score}
              incrementScore={() => {
                incrementScore(player.id);
              }}
            />
          );
        })}
      </div>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
};

export default Scoreboard;
