import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative flex h-screen text-white overflow-hidden bg-[#0b0f1a]">
      
      {/* Watermark */}
      <div className="app-watermark" />

      {/* Sidebar */}
      <div className="relative z-20">
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
