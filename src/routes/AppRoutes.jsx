import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ScamAnalyzer from "../pages/ScamAnalyzer";
import AnalysisReport from "../pages/AnalysisReport";
import LearningCenter from "../pages/LearningCenter";
import ThreatSimulation from "../pages/ThreatSimulation";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analyzer" element={<ScamAnalyzer />} />
      <Route path="/analysis/:id" element={<AnalysisReport />} />
      <Route path="/learning" element={<LearningCenter />} />
      <Route path="/simulation" element={<ThreatSimulation />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
