import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)

    // Simulating a successful login
    if (email && password) {
      navigate("/studentportal");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="card p-5 rounded shadow" style={{ width: '700px' }}>
        <div className="card-body d-flex flex-column align-items-center"> {/* Flexbox for centering */}
          <div className="text-center mb-4">
            <i className="bi bi-camera" style={{ fontSize: '50px', color: '#007bff' }}></i>
          </div>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin} className="w-100"> {/* Form takes full card width */}
            <div className="mb-3">
              <label className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label">Remember me</label>
              <a href="#" className="float-end">Forgot Password?</a>
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/signup" className="text-primary">Sign up</a>
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn btn-link mt-2"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;