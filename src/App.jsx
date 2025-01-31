import React from "react";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Dashboard from "./components/Dashboard";  
import Login from "./components/Login";  
import Signup from "./components/Signup";  
import Profile from "./components/Profile";  
import Settings from "./components/Settings";  
import StudentPortal from "./components/StudentPortal"; // Import the StudentPortal component  
import Clubs from "./components/clubs";  // Import the Clubs component
import Chatbot from "./components/Chatbot";  
import NotFound from "./components/NotFound";  
import 'animate.css';  
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Dashboard />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<Signup />} />  
        <Route path="/profile" element={<Profile />} />  
        <Route path="/settings" element={<Settings />} />  
        <Route path="/studentportal" element={<StudentPortal />} />  
        <Route path="/clubs" element={<Clubs />} />  {/* Add this route */}
        <Route path="/Chatbot" element={<Chatbot/>} /> 
        <Route path="*" element={<NotFound />} />  
      </Routes>  
    </Router>  
  );  
}  

export default App;
