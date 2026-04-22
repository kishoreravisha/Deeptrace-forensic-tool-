export default function StatCard({ title, value, icon: Icon }) {
    return (
      <div className="relative bg-[#060912] border border-gray-800 rounded-xl p-6
                      hover:shadow-lg transition-all duration-300">
        
        {/* Accent bar */}
        <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-xl" />
  
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-400">
              {title}
            </div>
            <div className="text-3xl font-bold mt-2 text-white">
              {value}
            </div>
          </div>
  
          {Icon && (
            <Icon size={28} className="text-blue-500 opacity-80" />
          )}
        </div>
      </div>
    );
  }
  