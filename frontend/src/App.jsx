import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
    </Routes>
  </Router>
);

export default App;
