import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserHome from './pages/UserHome';
import Template from './pages/template';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/UserHome" element={<UserHome />} />
      <Route path='/Template' element={<Template />} />
    </Routes>
  </Router>
);

export default App;
