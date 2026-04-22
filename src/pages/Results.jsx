export default function Results() {
    // Mock data (backend will replace this later)
    const results = {
      method: "Bayesian Ensemble + Quantum Weighting",
      confidenceInterval: "+/- 5%",
      candidates: [
        { rank: 1, ip: "192.168.1.88", confidence: 92.1 },
        { rank: 2, ip: "10.0.11.101", confidence: 87.4 },
        { rank: 3, ip: "172.16.5.19", confidence: 81.0 },
      ],
    };
  
    return (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-bold">Correlation Results</h1>
          <p className="text-gray-400 text-sm">
            Method: {results.method} | Confidence Interval: {results.confidenceInterval}
          </p>
        </div>
  
        {/* Results Table */}
        <div className="bg-[#060912] border border-gray-800 rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#0b0f1a] text-gray-400">
              <tr>
                <th className="px-4 py-3 text-left">Rank</th>
                <th className="px-4 py-3 text-left">Origin IP Address</th>
                <th className="px-4 py-3 text-left">Confidence</th>
              </tr>
            </thead>
  
            <tbody>
              {results.candidates.map((c) => (
                <tr
                  key={c.rank}
                  className="border-t border-gray-800 hover:bg-[#0b0f1a]"
                >
                  <td className="px-4 py-3 font-semibold">#{c.rank}</td>
                  <td className="px-4 py-3 font-mono">{c.ip}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-800 h-2 rounded">
                        <div
                          className="bg-green-600 h-2 rounded"
                          style={{ width: `${c.confidence}%` }}
                        />
                      </div>
                      <span className="w-12 text-right">
                        {c.confidence}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Footer note */}
        <div className="text-xs text-gray-400">
          Results are ranked based on combined temporal, network, and quantum-optimized features.
        </div>
      </div>
    );
  }
  