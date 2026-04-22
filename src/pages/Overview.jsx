import StatCard from "../components/common/StatCard";
import { Shield, Activity, Users, Network } from "lucide-react";

export default function Overview() {
  return (
    <div className="space-y-8 fade-in">

      {/* Header */}
      <div>
        <h1>System Overview</h1>
        <p className="text-gray-400 mt-1">
          Real-time intelligence summary and investigation status
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Cases" value="12" icon={Shield} />
        <StatCard title="Tracked IPs" value="147" icon={Network} />
        <StatCard title="Suspects Identified" value="36" icon={Users} />
        <StatCard title="Live Sessions" value="5" icon={Activity} />
      </div>

      {/* Status Panel */}
      <div className="bg-[#060912] border border-gray-800 rounded-xl p-6">
        <h2 className="mb-3">System Status</h2>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>• TOR traffic monitoring: <span className="text-green-400">Active</span></li>
          <li>• Correlation engine: <span className="text-green-400">Running</span></li>
          <li>• Quantum optimizer: <span className="text-yellow-400">Standby</span></li>
          <li>• Report generator: <span className="text-green-400">Operational</span></li>
        </ul>
      </div>

    </div>
  );
}
