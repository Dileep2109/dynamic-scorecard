import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [scores, setScores] = useState([]);
  const [topPerformers, setTopPerformers] = useState([]);
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/scores/")
      .then((response) => {
        setScores(response.data);
        highlightTopPerformers(response.data);
      })
      .catch((error) => console.error("Error fetching scores:", error));
  }, []);

  const highlightTopPerformers = (scores) => {
    const sortedScores = scores.sort((a, b) => b.total_score - a.total_score);
    const top3 = sortedScores.slice(0, 3);
    setTopPerformers(top3);
  };

  useEffect(() => {
    if (topPerformers.length > 0) {
      const highlightInterval = setInterval(() => {
        setCurrentHighlight((prev) => (prev + 1) % topPerformers.length);
      }, 3000);

      return () => clearInterval(highlightInterval);
    }
  }, [topPerformers]);

  if (topPerformers.length === 0) {
    return <p>Loading top performers...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Performance Scoreboard</h1>
      <h2 className="text-xl font-medium text-gray-700 mb-6">Top Performers</h2>
      <div className="mb-6">
        <h3
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-md shadow-lg text-xl"
        >
          {topPerformers[currentHighlight] && (
            <>
              {topPerformers[currentHighlight].name} -{" "}
              {topPerformers[currentHighlight].total_score}
            </>
          )}
        </h3>
      </div>

      <h3 className="text-lg font-medium text-gray-700">Other Performers:</h3>
      <ul className="space-y-2">
        {scores
          .sort((a, b) => b.total_score - a.total_score)
          .map((score, index) => (
            <li key={score.id} className="text-gray-600">
              {index + 1}. {score.name}: {score.total_score}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Dashboard;
