import React, { useState, useEffect } from "react";
import axios from "axios";

function Scoreboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/scores/")
      .then(response => setScores(response.data))
      .catch(error => console.error("Error fetching scores:", error));
  }, []);

  return (
    <div>
      <h1>Scoreboard</h1>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>{score.name}: {score.total_score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Scoreboard;
