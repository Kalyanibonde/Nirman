import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


import Register from "./components/Register";
import Login from "./components/Login";
import DashboardSection from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HeroSection />
              <WhyUs />
              <AboutUs />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={<DashboardSection />}>
          <Route path="user-list" element={<Userlist />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-xl text-red-500">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;