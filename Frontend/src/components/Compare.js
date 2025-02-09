import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Compare({ scores }) {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (name) => {
    setSelected((prevSelected) =>
      prevSelected.includes(name) ? prevSelected.filter((n) => n !== name) : [...prevSelected, name]
    );
  };

  const filteredScores = scores.filter((score) => selected.includes(score.name));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Compare Scores</h2>
      <div className="mb-6">
        {scores.map((score) => (
          <label key={score.name} className="flex items-center space-x-2 text-gray-700 mb-4">
            <input
              type="checkbox"
              checked={selected.includes(score.name)}
              onChange={() => toggleSelection(score.name)}
              className="h-5 w-5 text-blue-500 rounded"
            />
            <span className="text-lg">{score.name}</span>
          </label>
        ))}
      </div>

      {filteredScores.length > 0 && (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={filteredScores}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="productivity" fill="#4CAF50" />
            <Bar dataKey="quality" fill="#FF9800" />
            <Bar dataKey="timeliness" fill="#2196F3" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Compare;
