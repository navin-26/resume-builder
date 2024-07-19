import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import Loginpage from "./pages/Loginpage"; 
import './App.css';

const App = () => (
  <Router>
    <Routes>
      
    <Route path="/" element={<HomePage />} />
    <Route path="/Login" element={<Loginpage />} />
    </Routes>
  </Router>
);

export default App;
