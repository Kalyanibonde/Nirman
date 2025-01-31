import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";
import emailjs from "emailjs-com";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isContactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactInput, setContactInput] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("your_service_id", "your_template_id", e.target, "your_user_id")
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setContactDialogOpen(false);
      })
      .catch((error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="main" onClick={() => setContactDialogOpen(true)}>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #6a11cb 0%, #0d6efd 100%);
          }
          .hero-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
            padding: 3rem 2rem;
            text-align: center;
            animation: fadeIn 2s ease-in-out;
          }
          .hero-title {
            font-size: 4rem;
            font-weight: bold;
            margin-bottom: 1rem;
            animation: slideIn 1s ease-out;
          }
          .hero-description {
            font-size: 1.5rem;
            opacity: 0.9;
            margin-bottom: 2rem;
            animation: fadeIn 2.5s ease-in-out;
          }
          .btn-primary-custom {
            background: white;
            color: #0d6efd;
            border: none;
            padding: 1rem 2rem;
            border-radius: 30px;
            font-weight: 600;
            transition: all 0.3s;
            animation: bounce 2s infinite;
            cursor: pointer;
          }
          .btn-primary-custom:hover {
            background: #0b5ed7;
            color: white;
          }
          .why-us-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 4rem;
            text-align: center;
          }
          .why-us-card {
            background: white;
            padding: 1.5rem;
            margin: 1rem;
            width: 80%;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
          }
          .why-us-card:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="hero-section">
        <h1 className="hero-title">Welcome to TeamWork Dashboard 🚀</h1>
        <p className="hero-description">Manage your projects and team effortlessly.</p>
        <button onClick={() => navigate("/login")} className="btn-primary-custom">
          Get Started
        </button>
      </div>
    ,.
      {/* Why Us Section - Vertical Cards */}
      <section className="why-us-section">
        <h2 className="text-3xl font-bold text-white mb-6">Why Us?</h2>
        <div className="why-us-card">
          <h3 className="text-xl font-semibold text-blue-700">Efficient Collaboration</h3>
          <p>Manage your team and projects effortlessly with our collaboration tools.</p>
        </div>
        <div className="why-us-card">
          <h3 className="text-xl font-semibold text-blue-700">Real-Time Tracking</h3>
          <p>Monitor progress and updates in real-time to stay on track with your goals.</p>
        </div>
        <div className="why-us-card">
          <h3 className="text-xl font-semibold text-blue-700">Powerful Tools</h3>
          <p>Boost productivity with a range of powerful project management tools.</p>
        </div>
      </section>

      {/* Contact Us Dialog */}
      {isContactDialogOpen && (
        <Dialog open={isContactDialogOpen} onClose={() => setContactDialogOpen(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleContactSubmit}>
              <textarea
                name="message"
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                placeholder="Write your message here"
                rows="4"
                className="w-full p-2 border rounded-md"
              />
              <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md">
                Submit
              </button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Dashboard;
