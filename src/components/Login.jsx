import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <input type="email" placeholder="Email" className="w-full p-2 border mb-4"/>
          <input type="password" placeholder="Password" className="w-full p-2 border mb-4"/>
          <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
        <p className="mt-4">
          Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
        </p>
        <button 
          onClick={() => navigate("/")} 
          className="mt-4 text-gray-500 underline"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Login;
