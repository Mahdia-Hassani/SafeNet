import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ScamAnalyzer from "../pages/ScamAnalyzer";
import AnalysisReport from "../pages/AnalysisReport";
import LearningCenter from "../pages/LearningCenter";
import SecurityChallenge from "../pages/SecurityChallenge";
import SimulationSession from "../pages/SimulationSession";
import SimulationReport from "../pages/SimulationReport";
import Profile from "../pages/Profile";
import CourseDetails from "../pages/CourseDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analyzer" element={<ScamAnalyzer />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/analysis/:id" element={<AnalysisReport />} />
      <Route path="/learning" element={<LearningCenter />} />
      <Route path="/learning/:id" element={<CourseDetails />} />
      <Route path="/simulation" element={<SecurityChallenge />} />
      <Route path="/simulation/session" element={<SimulationSession />} />
      <Route path="/simulation/report" element={<SimulationReport />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
