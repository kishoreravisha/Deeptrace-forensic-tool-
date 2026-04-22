export default function Timeline() {
    const events = [
      { time: "10:21:04", label: "Session Initiated", detail: "TOR session detected" },
      { time: "10:21:06", label: "Entry Node Identified", detail: "High-risk entry relay" },
      { time: "10:21:09", label: "Relay Hop #1", detail: "Intermediate TOR relay" },
      { time: "10:21:12", label: "Relay Hop #2", detail: "Traffic obfuscation layer" },
      { time: "10:21:16", label: "Exit Node Correlated", detail: "Exit traffic matched" },
      { time: "10:21:18", label: "Origin IP Ranked", detail: "Bayesian fusion completed" },
    ];
  
    return (
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Investigation Timeline</h1>
  
        <div className="bg-[#060912] border border-gray-800 rounded p-6">
          <ol className="relative border-l border-gray-700 ml-3">
            {events.map((e, i) => (
              <li key={i} className="mb-6 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs">
                  {i + 1}
                </span>
                <time className="text-sm text-gray-400">{e.time}</time>
                <h3 className="text-lg font-semibold">{e.label}</h3>
                <p className="text-gray-400 text-sm">{e.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
  