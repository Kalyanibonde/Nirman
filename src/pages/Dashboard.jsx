// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="sidebar-links">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation Bar */}
        <div className="top-nav">
          <h1>Welcome to the Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <div className="content-area">
          <h2>Overview</h2>
          <p>Here’s a brief overview of your account.</p>
          
          {/* Additional Sections */}
          <div className="additional-links">
            <p>If you don’t have an account, you can <Link to="/signup">Sign Up</Link></p>
            <p>If you already have an account, you can <Link to="/login">Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
