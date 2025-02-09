import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import ScoreForm from "./components/ScoreForm";
import ExportButton from "./components/ExportButton";
import Compare from "./components/Compare";
import './App.css';  // Import the CSS file


function App() {
  const [scores, setScores] = useState([]);

  const fetchScores = () => {
    axios.get("http://127.0.0.1:8000/scores/")
      .then(response => setScores(response.data))
      .catch(error => console.error("Error fetching scores:", error));
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">Dynamic Scorecard</h1>
      <div className="space-y-8">
        <ScoreForm onScoreAdded={fetchScores} />
        <ExportButton scores={scores} />
        <Compare scores={scores} />
        <Dashboard scores={scores} />
      </div>
    </div>
  );
}

export default App;
