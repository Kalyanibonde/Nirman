import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    const { name, value, checked } = e.target;

    // Handle checkbox inputs (skills and languages)
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name].filter((item) => item !== value),
      }));
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
        {success && <div className="text-green-500 text-sm mb-4 text-center">{success}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border mb-4"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-4"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border mb-4"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Skills</label>
            <div className="flex flex-col">
              {["Web Developer", "Frontend Developer", "Backend Developer", "Android Developer", "UI/UX Designer"].map((skill) => (
                <label key={skill}>
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    onChange={handleChange}
                    checked={formData.skills.includes(skill)}
                    className="mr-2"
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Programming Languages</label>
            <div className="flex flex-col">
              {["JavaScript", "Python", "Java", "C++", "Ruby"].map((language) => (
                <label key={language}>
                  <input
                    type="checkbox"
                    name="languages"
                    value={language}
                    onChange={handleChange}
                    checked={formData.languages.includes(language)}
                    className="mr-2"
                  />
                  {language}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4">
          Already have an account? <a href="/login" className="text-blue-600">Login</a>
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

export default Signup;
