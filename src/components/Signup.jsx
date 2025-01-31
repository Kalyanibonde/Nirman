import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const server_api = import.meta.env.VITE_SERVER_API;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    skills: [],
    languages: [],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...prevData[name], value] : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${server_api}/api/register`, formData);
      if (response.data.token) {
        setSuccess("Registration successful! You can now log in.");
        navigate("/dashboard");
        setFormData({ fullName: "", email: "", password: "", skills: [], languages: [] });
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mt-5" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-4 rounded shadow" 
        style={{ width: '700px' }}
      >
        <div className="card-body" >
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <div className="alert alert-danger text-center">{error}</div>}
          {success && <div className="alert alert-success text-center">{success}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label"><FaUser className="me-2" />Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"><FaEnvelope className="me-2" />Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label"><FaLock className="me-2" />Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Skills</label>
              <div className="form-check">
                {["Web Developer", "Frontend Developer", "Backend Developer", "Android Developer", "UI/UX Designer"].map((skill) => (
                  <div key={skill}>
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      onChange={handleChange}
                      checked={formData.skills.includes(skill)}
                      className="form-check-input"
                    />
                    <label className="form-check-label ms-2">{skill}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Programming Languages</label>
              <div className="form-check">
                {["JavaScript", "Python", "Java", "C++", "Ruby"].map((language) => (
                  <div key={language}>
                    <input
                      type="checkbox"
                      name="languages"
                      value={language}
                      onChange={handleChange}
                      checked={formData.languages.includes(language)}
                      className="form-check-input"
                    />
                    <label className="form-check-label ms-2">{language}</label>
                  </div>
                ))}
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} type="submit" className="btn btn-primary w-100">Sign Up</motion.button>
          </form>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login" className="text-primary">Login</a>
          </p>
          <button onClick={() => navigate("/")} className="btn btn-link w-100">
            Back to Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
