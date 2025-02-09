import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExportScores({ scores }) {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(scores);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Scores");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "scores.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
    >
      Export to Excel
    </button>
  );
}

export default ExportScores;
