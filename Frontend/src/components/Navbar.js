import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Scorecard</h2>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link></li>
          <li><Link to="/scores" className="hover:text-gray-400 transition duration-300">Scoreboard</Link></li>
          <li><Link to="/login" className="hover:text-gray-400 transition duration-300">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
