import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure the path is correct
import "./Sidebar.css"; // Sidebar-specific styles

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" className="img-fluid" />
      </div>
      <nav className="nav-links">
        <Link to="/studentportal">📊 Dashboard</Link>
        <Link to="#">👥 Team Info</Link>
        <Link to="/clubs">🎯 Clubs</Link>
        <Link to="/Chatbot">💬 Chatbot</Link>
        <Link to="#">📝 Request</Link>
        <Link to="/logout">🚪 Logout</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
