export default function Cases() {
    const cases = [
      {
        caseId: "TN-CC-2025-014",
        type: "Fraud",
        status: "LIVE",
        officer: "Inspector Kumar",
      },
      {
        caseId: "TN-CC-2025-015",
        type: "Drugs",
        status: "ANALYZING",
        officer: "SI Prakash",
      },
      {
        caseId: "TN-CC-2025-016",
        type: "Cyber Terror",
        status: "CLOSED",
        officer: "Inspector Devi",
      },
    ];
  
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Case Management</h1>
  
        <div className="bg-[#060912] border border-gray-800 rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#0b0f1a] text-gray-400">
              <tr>
                <th className="px-4 py-3 text-left">Case ID</th>
                <th className="px-4 py-3 text-left">Crime Type</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Assigned Officer</th>
              </tr>
            </thead>
  
            <tbody>
              {cases.map((c) => (
                <tr
                  key={c.caseId}
                  className="border-t border-gray-800 hover:bg-[#0b0f1a]"
                >
                  <td className="px-4 py-3 font-mono">{c.caseId}</td>
                  <td className="px-4 py-3">{c.type}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="px-4 py-3">{c.officer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <p className="text-xs text-gray-400">
          Supports concurrent investigations with role-based access and audit logging.
        </p>
      </div>
    );
  }
  
  function StatusBadge({ status }) {
    const styles = {
      LIVE: "bg-red-600",
      ANALYZING: "bg-yellow-500 text-black",
      CLOSED: "bg-green-600",
    };
  
    return (
      <span
        className={`px-3 py-1 text-xs rounded font-semibold ${styles[status]}`}
      >
        {status}
      </span>
    );
  }
  