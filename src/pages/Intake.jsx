import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../services/api";

export default function Intake() {
  const navigate = useNavigate();
  const { postForm } = useApi();

  const [pcap, setPcap] = useState(null);
  const [caseId, setCaseId] = useState("");
  const [officerId, setOfficerId] = useState("");
  const [useLLM, setUseLLM] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const valid =
    pcap &&
    caseId.trim().length > 0 &&
    officerId.trim().length > 0 &&
    (pcap.name.endsWith(".pcap") || pcap.name.endsWith(".pcapng"));

  async function handleSubmit(e) {
    e.preventDefault();
    if (!valid) return;

    setLoading(true);
    setError("");

    try {
      const form = new FormData();
      form.append("pcap", pcap);
      form.append("case_id", caseId.trim());
      form.append("officer_id", officerId.trim());
      form.append("use_llm", useLLM);

      const res = await postForm("/api/analyze", form);

      // Expecting: { job_id: "..." }
      navigate(`/status/${res.job_id}`);
    } catch (err) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h1>Evidence Intake</h1>
      <p className="text-gray-400 mt-1">
        Submit PCAP evidence for forensic analysis
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-[#060912] border border-gray-800 rounded-xl p-6 space-y-5"
      >
        {/* PCAP Upload */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            PCAP File (.pcap / .pcapng)
          </label>
          <input
            type="file"
            accept=".pcap,.pcapng"
            onChange={(e) => setPcap(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-300"
          />
        </div>

        {/* Case ID */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Case ID
          </label>
          <input
            type="text"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="e.g., TN-2025-0417"
          />
        </div>

        {/* Officer ID */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Officer ID
          </label>
          <input
            type="text"
            value={officerId}
            onChange={(e) => setOfficerId(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="e.g., TNPOL-1234"
          />
        </div>

        {/* Explainability Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={useLLM}
            onChange={(e) => setUseLLM(e.target.checked)}
          />
          <span className="text-sm text-gray-300">
            Enable Explainability (optional)
          </span>
        </div>

        {/* Error */}
        {error && (
          <div className="text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!valid || loading}
          className={`w-full py-2 rounded-md transition
            ${
              valid && !loading
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {loading ? "Submitting…" : "Start Forensic Analysis"}
        </button>
      </form>
    </div>
  );
} 