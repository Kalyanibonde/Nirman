// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for the root path */}
        <Route path="/" element={<Dashboard />} /> {/* Root path should load Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
