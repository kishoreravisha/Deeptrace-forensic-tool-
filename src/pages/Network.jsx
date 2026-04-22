export default function Network() {
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-bold">TOR Network Graph</h1>
  
        <div className="bg-[#060912] border border-gray-800 rounded p-6 h-[400px] flex items-center justify-center">
          <div className="text-center text-gray-400">
            <p className="text-lg">3D TOR Network Visualization</p>
            <p className="text-sm mt-2">
              Entry / Relay / Exit nodes with risk coloring
            </p>
            <p className="text-xs mt-1">
              (D3 / Three.js integration ready)
            </p>
          </div>
        </div>
  
        <div className="flex gap-4 text-sm">
          <Legend color="bg-green-600" label="Normal" />
          <Legend color="bg-yellow-500" label="Suspicious" />
          <Legend color="bg-red-600" label="Malicious" />
        </div>
      </div>
    );
  }
  
  function Legend({ color, label }) {
    return (
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${color}`} />
        <span className="text-gray-300">{label}</span>
      </div>
    );
  }
  