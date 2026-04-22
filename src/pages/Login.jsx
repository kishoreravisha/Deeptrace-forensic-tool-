import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!apiKey.trim()) {
      setError("API Key is required");
      return;
    }

    login(apiKey.trim());
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#060912] border border-gray-800 rounded-xl p-8 w-full max-w-sm space-y-6"
      >
        <div className="text-center">
          <h1 className="text-xl font-bold text-[#cfa64a]">
            TN Police – DeepTrace
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Authorized Access Only
          </p>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-1">
            API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="Enter API key"
          />
        </div>

        {error && (
          <div className="text-red-400 text-xs text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
