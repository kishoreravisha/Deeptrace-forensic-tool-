export default function ProgressBar({ value }) {
    return (
      <div>
        <div className="w-full bg-gray-800 h-3 rounded">
          <div
            className="bg-blue-600 h-3 rounded"
            style={{ width: `${value}%` }}
          />
        </div>
        <div className="text-sm text-gray-400 mt-1">
          {value}% complete
        </div>
      </div>
    );
  }
  