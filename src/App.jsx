import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Network from "./pages/Network";
import Timeline from "./pages/Timeline";
import Results from "./pages/Results";
import Quantum from "./pages/Quantum";
import Reports from "./pages/Reports";
import Cases from "./pages/Cases";
import Intake from "./pages/Intake";
import { useAuth } from "./context/AuthContext";
import Status from "./pages/Status";
import Report from "./pages/Report";



function ProtectedRoute() {
  const { apiKey } = useAuth();
  if (!apiKey) return <Navigate to="/login" replace />;
  return <Layout />;
}

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
      <Route index element={<Overview />} />
        <Route path="/intake" element={<Intake />} />   {/* ✅ ADD THIS */}
        <Route path="/network" element={<Network />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/results" element={<Results />} />
        <Route path="/quantum" element={<Quantum />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/status/:job_id" element={<Status />} />
        <Route path="/reports/:job_id" element={<Report />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
}
