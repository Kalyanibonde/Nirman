import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard Menu</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard">🏠 Home</Link></li>
        <li className="mb-2"><Link to="/profile">👤 Profile</Link></li>
        <li className="mb-2"><Link to="/settings">⚙️ Settings</Link></li>
        <li className="mt-4 text-red-400"><Link to="/">🚪 Logout</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
