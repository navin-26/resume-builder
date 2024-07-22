import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import './App.css';
import { AuthProvider } from "./content/auth";
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";

const App = () => (
  <AuthProvider>
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
);

export default App;
