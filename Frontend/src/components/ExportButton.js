import React from 'react';
import { saveAs } from 'file-saver';

function ExportButton({ scores }) {
  const handleExport = () => {
    if (!scores || scores.length === 0) {
      alert("No data available to export.");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,Name,Productivity,Quality,Timeliness,Total Score\n";
    scores.forEach(score => {
      csvContent += `${score.name},${score.productivity},${score.quality},${score.timeliness},${score.total_score}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'scorecard.csv');
  };

  return (
    <button onClick={handleExport} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
      Export CSV
    </button>
  );
}

export default ExportButton;
