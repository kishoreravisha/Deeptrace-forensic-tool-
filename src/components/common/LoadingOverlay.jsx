export default function LoadingOverlay({ text = "Analyzing TOR traffic…" }) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
        <div className="bg-[#060912] border border-gray-800 rounded-xl p-8 text-center space-y-4">
          
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
  
          <div className="text-sm tracking-wide text-gray-300">
            {text}
          </div>
        </div>
      </div>
    );
  }
  