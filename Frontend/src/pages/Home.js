import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import Compare from '../components/Compare';
import ExportButton from '../components/ExportButton';

function Home() {
  const [scores, setScores] = useState([]);
  const [weights, setWeights] = useState({
    productivity: 0.3,
    quality: 0.5,
    timeliness: 0.2
  });

  useEffect(() => {
    // Fetch scores from backend
    fetch('/api/scores')
      .then(response => response.json())
      .then(data => setScores(data));
  }, []);

  return (
    <div>
      <h1>Score Dashboard</h1>
      <ExportButton scores={scores} />
      <Dashboard scores={scores} />
      <Compare scores={scores} />
    </div>
  );
}

export default Home;
