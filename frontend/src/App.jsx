import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TemplateEditPage from './pages/TemplateEditPage';
import Templates from './pages/TemplatePage';
import DashBoard from './pages/DashBoard';
import PreviewPage from './pages/PreviewPage';
import { AuthProvider } from './components/context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AuthProvider currentPath={location.pathname}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/userHome" element={<UserHomePage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/TemplateEditPage/:templateId" element={<TemplateEditPage />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/PreviewPage" element={<PreviewPage />} />
        </Route>

        <Route path="/Templates" element={<Templates />} />
      </Routes>
    </AuthProvider>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
