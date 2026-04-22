import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../services/api";

const TERMINAL = ["COMPLETED", "FAILED"];

export default function Status() {
  const { job_id } = useParams();
  const navigate = useNavigate();
  const { get } = useApi();

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;

    async function fetchStatus() {
      try {
        const res = await get(`/api/status/${job_id}`);
        setData(res);
        setLoading(false);

        if (!TERMINAL.includes(res.status)) {
          timer = setTimeout(fetchStatus, 4000);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch status");
        setLoading(false);
      }
    }

    fetchStatus();

    return () => clearTimeout(timer);
  }, [job_id]);

  if (loading) {
    return <div>Loading job status…</div>;
  }

  if (error) {
    return (
      <div className="text-red-400">
        {error}
      </div>
    );
  }

  const progress = data.progress ?? 0;

  return (
    <div className="max-w-3xl">
      <h1>Job Status</h1>

      <div className="mt-6 bg-[#060912] border border-gray-800 rounded-xl p-6 space-y-4">
        <div className="text-sm text-gray-400">
          Job ID: <span className="text-gray-200">{job_id}</span>
        </div>

        <div className="text-sm text-gray-400">
          Case ID: <span className="text-gray-200">{data.case_id}</span>
        </div>

        <div className="text-sm">
          Status:{" "}
          <span
  className={`font-semibold ${
    data.status === "COMPLETED"
      ? "text-green-400"
      : data.status === "FAILED"
      ? "text-red-400"
      : "text-blue-400"
  }`}
>
  {data.status}
</span>

        </div>

        {/* Progress Bar */}
        <div>
          <div className="w-full h-2 bg-gray-800 rounded">
            <div
              className="h-2 bg-blue-600 rounded transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-1 text-xs text-gray-400">
            {progress}% complete
          </div>
        </div>

        <div className="text-xs text-gray-500">
          Last updated: {data.updated_at}
        </div>

        {/* Actions */}
        {data.status === "COMPLETED" && (
          <button
            onClick={() => navigate(`/reports/${job_id}`)}
            className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
          >
            View Report
          </button>
        )}

        {data.status === "FAILED" && (
          <div className="text-red-400 text-sm">
            Job failed. Please contact system administrator.
          </div>
        )}
      </div>
    </div>
  );
}
