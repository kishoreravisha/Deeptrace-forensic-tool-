export default function Reports() {
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Forensic Reports</h1>
  
        <div className="bg-[#060912] border border-gray-800 rounded p-6 space-y-4">
          <p className="text-gray-400">
            Generate a court-admissible forensic report including:
          </p>
  
          <ul className="list-disc list-inside text-gray-300">
            <li>Investigation Timeline</li>
            <li>TOR Network Snapshot</li>
            <li>Correlation Results</li>
            <li>Confidence Scores</li>
            <li>Chain of Custody</li>
            <li>Digital Signature</li>
          </ul>
  
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white">
            Generate Forensic Report (PDF)
          </button>
        </div>
  
        <p className="text-xs text-gray-400">
          Reports are digitally signed and compliant with forensic evidence standards.
        </p>
      </div>
    );
  }
  