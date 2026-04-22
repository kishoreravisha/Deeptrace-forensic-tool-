import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {
  Home,
  Network,
  Clock,
  Target,
  Cpu,
  FileText,
  Folder
} from "lucide-react";

const menu = [
  { name: "Overview", ta: "மேலோட்டம்", path: "/", icon: Home },

  // ✅ NEW ANALYSIS (INTAKE)
  { name: "New Analysis", ta: "புதிய பகுப்பாய்வு", path: "/intake", icon: Folder },

  { name: "Network Graph", ta: "நெட்வொர்க் வரைபடம்", path: "/network", icon: Network },
  { name: "Timeline", ta: "நேரவரிசை", path: "/timeline", icon: Clock },
  { name: "Correlation Results", ta: "ஒப்பீட்டு முடிவுகள்", path: "/results", icon: Target },
  { name: "Quantum Insights", ta: "குவாண்டம் பகுப்பாய்வு", path: "/quantum", icon: Cpu },
  { name: "Reports", ta: "அறிக்கைகள்", path: "/reports", icon: FileText },
  { name: "Case Management", ta: "வழக்கு மேலாண்மை", path: "/cases", icon: Folder }
];

export default function Sidebar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <aside className="w-64 bg-[#060912] border-r border-gray-800 flex flex-col h-screen">
      
      {/* ===== HEADER ===== */}
      <div className="p-5 border-b border-gray-800">
        <div className="text-xl font-bold tracking-wide text-[#cfa64a]">
          Tamil Nadu Police
        </div>

        <div className="text-xs tracking-wider text-gray-400">
          DeepTrace Intelligence Platform
        </div>

        {/* LIVE STATUS */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-green-400 tracking-wide">
            LIVE ANALYSIS
          </span>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="mt-4 flex-1 flex flex-col gap-1 px-2">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm
                transition-all duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-400 hover:bg-[#0b1220] hover:text-white"
                }
                `
              }
            >
              <Icon
                size={18}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              <span className="tracking-wide">
                {lang === "en" ? item.name : item.ta}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* ===== FOOTER ===== */}
      <div className="p-4 border-t border-gray-800 text-xs text-gray-500 text-center">
        Secure • Authorized Access Only

        {/* Language Toggle */}
        <button
          onClick={toggleLang}
          className="block mt-2 mx-auto text-xs text-blue-400 hover:underline"
        >
          {lang === "en" ? "தமிழ்" : "English"}
        </button>
      </div>
    </aside>
  );
}
