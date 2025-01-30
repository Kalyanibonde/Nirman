import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Importing the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in with:", { email, password });
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <div className="login-container">
      <h1 className="title">Login</h1>
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
