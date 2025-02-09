import React, { useState } from "react";
import axios from "axios";

const ScoreForm = ({ onScoreAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    productivity: "",
    quality: "",
    timeliness: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scoreData = {
      name: formData.name.trim(),
      productivity: parseFloat(formData.productivity),
      quality: parseFloat(formData.quality),
      timeliness: parseFloat(formData.timeliness),
    };

    if (!scoreData.name || isNaN(scoreData.productivity) || isNaN(scoreData.quality) || isNaN(scoreData.timeliness)) {
      alert("All fields are required and must be valid numbers!");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/scores/", scoreData);
      alert("Score added successfully!");
      setFormData({ name: "", productivity: "", quality: "", timeliness: "" });
      onScoreAdded();
    } catch (error) {
      console.error("Error:", error.response?.data?.detail || error.message);
      alert(`Failed to add score: ${error.response?.data?.detail || "Unknown error"}`);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add Performance Score</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="productivity"
            placeholder="Productivity Score"
            value={formData.productivity}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="quality"
            placeholder="Quality Score"
            value={formData.quality}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="timeliness"
            placeholder="Timeliness Score"
            value={formData.timeliness}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Score
        </button>
      </form>
    </div>
  );
};

export default ScoreForm;
