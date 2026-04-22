import { useParams } from "react-router-dom";
import { useApi } from "../services/api";
import { useState } from "react";

export default function Report() {
  const { job_id } = useParams();
  const { get } = useApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function downloadPDF() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/report/${job_id}/pdf`, {
        headers: { "X-API-Key": "" } // API key added by browser session
      });

      if (!res.ok) throw new Error("Failed to download report");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `DeepTrace_Report_${job_id}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message || "Download failed");
    } finally {
      setLoading(false);
    }
  }

  async function viewJSON() {
    try {
      const res = await get(`/api/report/${job_id}/json`);
      alert(JSON.stringify(res, null, 2));
    } catch {
      alert("Failed to load JSON report");
    }
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold">
  Forensic Report
</h1>
<p className="text-gray-400 mt-1">
  Read-only access to generated forensic findings
</p>


      <div className="mt-6 bg-[#060912] border border-gray-800 rounded-xl p-6 space-y-4">
        <div className="text-sm text-gray-400">
          Job ID: <span className="text-gray-200">{job_id}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={downloadPDF}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            {loading ? "Downloading…" : "Download PDF Report"}
          </button>

          <button
            onClick={viewJSON}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
          >
            View JSON (Read-Only)
          </button>
        </div>

        {error && (
          <div className="text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Legal Disclaimer */}
        <div className="mt-6 border border-yellow-600/30 bg-yellow-900/10 p-4 rounded text-xs text-yellow-300">
  <strong>Legal Disclaimer:</strong><br />
  This system provides forensic intelligence for investigative support only.
  It does not determine intent, attribution, or guilt.
  All findings require human review and lawful interpretation.
</div>
      </div>
    </div>
  );
}
