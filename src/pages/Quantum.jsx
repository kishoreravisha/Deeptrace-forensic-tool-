export default function Quantum() {
    const data = {
      originalFeatures: 82,
      selectedFeatures: 40,
      informationRetention: 98.2,
      latencyReduction: 35,
      topFeatures: [
        "Packet Entropy",
        "Inter-arrival Variance",
        "Flow Duration",
        "TLS Fingerprint",
        "RTT Variance",
      ],
    };
  
    return (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-bold">Quantum Insights</h1>
          <p className="text-gray-400 text-sm">
            Quantum-inspired feature selection for faster forensic correlation
          </p>
        </div>
  
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Metric label="Original Features" value={data.originalFeatures} />
          <Metric label="Selected Features" value={data.selectedFeatures} />
          <Metric label="Info Retention" value={`${data.informationRetention}%`} />
          <Metric label="Latency Reduction" value={`${data.latencyReduction}%`} />
        </div>
  
        {/* Feature List */}
        <div className="bg-[#060912] border border-gray-800 rounded p-6">
          <h2 className="text-lg font-semibold mb-4">
            Top Quantum-Selected Features
          </h2>
  
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {data.topFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
  
        {/* Explanation */}
        <div className="text-sm text-gray-400">
          Quantum-inspired optimization reduces feature space while preserving
          forensic signal strength, enabling faster and more scalable correlation
          across large TOR networks.
        </div>
      </div>
    );
  }
  
  function Metric({ label, value }) {
    return (
      <div className="bg-[#060912] border border-gray-800 rounded p-5">
        <div className="text-gray-400 text-sm">{label}</div>
        <div className="text-2xl font-bold mt-1">{value}</div>
      </div>
    );
  }
  