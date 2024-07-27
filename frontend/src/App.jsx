import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserHome from './pages/UserHome';
import TemplateEditPage from './pages/TemplateEditPage';
import Templates from './pages/TemplatePage';
import DashBoard from './pages/DashBoard';
import PreviewPage from './pages/PreviewPage';
import { AuthProvider } from './components/context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/UserHome" element={<UserHome />} />
          <Route path="/TemplateEditPage/:templateId" element={<TemplateEditPage />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/PreviewPage" element={<PreviewPage />} />
        </Route>

        <Route path="/Templates" element={<Templates />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
