import React, { useState } from "react";
import { Link } from "react-router-dom";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import "./StudentPortal.css";

const StudentPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clubs = [
    { id: "man1", name: "Raj Sharma", skills: "Creative thinker and innovative entrepreneur with expertise in incubation.", img: man1 },
    { id: "man2", name: "Sujit Verma", skills: "Proficient in developing apps and connecting students with professionals.", img: man2 },
    { id: "man3", name: "Nitin Thakur", skills: "Experienced in entrepreneurship and supporting entrepreneurial ideas.", img: man3 },
    { id: "man4", name: "Umang Mishra", skills: "Passionate about AI and fostering AI-related concepts among students.", img: man1 },
    { id: "man5", name: "Ayan Mehal", skills: "Expert in coding and enhancing students' coding skills through practical experience.", img: man2 },
    { id: "man6", name: "Riyaz Shaikh", skills: "Devoted to social service and community-driven initiatives through NSS.", img: man3 },
  ];

  // Filter clubs based on search input
  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo mb-4">
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

      {/* Main Content */}
      <main className="main-content p-4">
        {/* User Info */}
        <div className="text-center">
          <img
            src={icon}
            alt="User"
            className="img-fluid rounded-circle user-icon"
            onClick={() => (window.location.href = "/profile")}
          />
          <div className="welcome-card">
            <h1>Welcome back, John!</h1>
            <p className="text-muted">Always stay updated in your student portal</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search Clubs or Students"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Club Suggestions */}
        <div className="team-section">
          <h2>Club Suggestions</h2>
          <div className="row">
            {filteredClubs.length > 0 ? (
              filteredClubs.map((club) => (
                <div key={club.id} className="col-md-4 mb-4">
                  <div className="card shadow-lg">
                    <img src={club.img} alt={club.name} className="card-img-top" />
                    <div className="card-body text-center">
                      <h3 className="card-title">{club.name}</h3>
                      <p className="card-text">{club.skills}</p>
                      <button className="btn btn-info m-2">View Info</button>
                      <button className="btn btn-warning m-2">Message</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No results found.</p>
            )}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="team-card shadow-lg text-center">
                  <img src={man1} alt="Team Member" className="team-img" />
                  <div className="team-details">
                    <div className="team-name">Team Member {index + 1}</div>
                    <div className="team-job">Web Developer</div>
                  </div>
                  <div className="team-social">
                    <a href="#" className="team-social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="team-social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="team-social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="team-social-icon"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentPortal;
