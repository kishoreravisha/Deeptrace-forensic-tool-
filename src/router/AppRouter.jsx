import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Overview from "../pages/Overview.jsx";
import Results from "../pages/Results.jsx";
import Quantum from "../pages/Quantum.jsx";
import Timeline from "../pages/Timeline.jsx";
import Reports from "../pages/Reports.jsx";
import Network from "../pages/Network.jsx";
import Cases from "../pages/Cases.jsx";





function Placeholder({ title }) {
  return (
    <div className="text-gray-300 text-lg">
      {title} page coming soon
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/network" element={<Network />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/results" element={<Results />} />
          <Route path="/quantum" element={<Quantum />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/cases" element={<Cases />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

