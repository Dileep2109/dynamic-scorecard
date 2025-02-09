import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the change
import './index.css';
import App from './App';
import './styles/tailwind.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  // Use `root.render()` instead of `ReactDOM.render()`
