import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to TeamWork Dashboard</h1>
      <p className="text-lg text-gray-600 mb-6">Manage your projects and team effortlessly.</p>
      <button 
        onClick={() => navigate("/login")} 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
      >
        Get Started
      </button>
    </div>
  );
};

export default Dashboard;
