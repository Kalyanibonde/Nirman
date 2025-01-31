import React, { useState } from "react";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import i2ic from "../assets/i2ic.jpeg";
import gdsc from "../assets/gdsc.jpg";
import edc from "../assets/edc.jpg";
import aisa from "../assets/aisa.jpeg";
import acm from "../assets/acm.jpeg";
import nss from "../assets/nss.jpeg";

const Request = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clubs = [
    { id: "i2ic", name: "I2IC Club", desc: "The Innovation and Incubation Club fosters creativity and entrepreneurship among students.", img: i2ic },
    { id: "gdsc", name: "GDSC Club", desc: "The Google Developer Student Club connects students with industry professionals to enhance coding skills.", img: gdsc },
    { id: "edc", name: "EDC Club", desc: "The Entrepreneurship Development Cell nurtures and supports entrepreneurial ideas and initiatives.", img: edc },
    { id: "aisa", name: "AISA Club", desc: "The Innovation and Incubation Club fosters AI concepts among students.", img: aisa },
    { id: "acm", name: "ACM Club", desc: "The ACM Club connects students with industry professionals to enhance coding skills.", img: acm },
    { id: "nss", name: "NSS Club", desc: "The NSS Club nurtures and supports social service initiatives.", img: nss },
  ];

  const filteredClubs = clubs.filter(club => club.id.includes(searchTerm.toLowerCase()));

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <aside className="sidebar p-4" style={{ backgroundColor: '#003366', color: 'white', width: '250px', position: 'fixed', height: '100vh' }}>
        <div className="logo mb-4">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
        <a href="/studentportal" className="text-white mb-2 d-block">📊 Dashboard</a>
        <a href="#" className="text-white mb-2 d-block">👥 Team Info</a>
        <a href="/clubs" className="text-white mb-2 d-block">🎯 Clubs</a>
        <a href="#" className="text-white mb-2 d-block">💬 Chatbot</a>
        <a href="#" className="text-white mb-2 d-block">📝 Request</a>
        <a href="/logout" className="text-white mb-2 d-block">🚪 Logout</a>
      </aside>

      <main className="main-content flex-grow-1 p-4" style={{ marginLeft: '250px' }}>
        <div className="user-info mb-4 text-right">
          <img src={icon} alt="User" className="img-fluid" onClick={() => window.location.href = "/profile"} style={{ cursor: 'pointer' }} />
        </div>

        <div className="welcome-card mb-4">
          <h1>Welcome back, John!</h1>
          <p>Always stay updated in your student portal</p>
        </div>

        <div className="search-bar mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search Clubs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="team-section">
          <h2>Club Suggestions</h2>
          <div className="row">
            {filteredClubs.map(club => (
              <div key={club.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={club.img} alt={club.name} className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{club.name}</h3>
                    <p className="card-text">{club.desc}</p>
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

export default Request;
