import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RiskMap from "./pages/RiskMap";
import Alerts from "./pages/Alerts";
import Complaints from "./pages/Complaints";
import OfficerActions from "./pages/OfficerActions";
import WardAnalytics from "./pages/WardAnalytics";
import SystemSettings from "./pages/SystemSettings";
import About from "./pages/About";

import ProtectedRoute from "./components/ProtectedRoute";

const isLoggedIn = () => localStorage.getItem("loggedIn") === "true";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default entry → Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Pages */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/map" element={<ProtectedRoute><RiskMap /></ProtectedRoute>} />
        <Route path="/alerts" element={<ProtectedRoute><Alerts /></ProtectedRoute>} />
        <Route path="/complaints" element={<ProtectedRoute><Complaints /></ProtectedRoute>} />
        <Route path="/actions" element={<ProtectedRoute><OfficerActions /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute><WardAnalytics /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SystemSettings /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />

        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
