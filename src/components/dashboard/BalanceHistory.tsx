"use client"

export function BalanceHistory() {
  const data = [
    { month: 'Jul', amount: 200 },
    { month: 'Aug', amount: 400 },
    { month: 'Sep', amount: 300 },
    { month: 'Oct', amount: 650 },
    { month: 'Nov', amount: 500 },
    { month: 'Dec', amount: 450 },
    { month: 'Jan', amount: 800 }
  ]

  const maxAmount = Math.max(...data.map(d => d.amount))

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-[#e6eff5] h-full flex flex-col">
      <h3 className="text-lg md:text-xl font-semibold text-[#343c6a] mb-4 md:mb-6">Balance History</h3>
      
      {/* Chart */}
      <div className="relative flex-1 min-h-0">
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#718ebf] py-2 z-10">
          <span>800</span>
          <span>600</span>
          <span>400</span>
          <span>200</span>
          <span>0</span>
        </div>
        
        {/* Line Chart */}
        <div className="ml-8 h-full flex flex-col">
          <div className="flex-1 relative">
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line 
                  key={i}
                  x1="0" 
                  y1={40 * i} 
                  x2="400" 
                  y2={40 * i}
                  stroke="#f0f0f0" 
                  strokeWidth="1"
                />
              ))}
              
              {/* Line path */}
              <path
                d={`M 0 ${200 - (data[0].amount / maxAmount) * 160} ${data.map((item, index) => 
                  `L ${(index * 400) / (data.length - 1)} ${200 - (item.amount / maxAmount) * 160}`
                ).join(' ')}`}
                fill="none"
                stroke="#1814f3"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Data points */}
              {data.map((item, index) => (
                <circle
                  key={index}
                  cx={(index * 400) / (data.length - 1)}
                  cy={200 - (item.amount / maxAmount) * 160}
                  r="4"
                  fill="#1814f3"
                />
              ))}
            </svg>
          </div>
          
          {/* X-axis labels */}
          <div className="flex justify-between mt-3 px-1">
            {data.map((item, index) => (
              <span key={index} className="text-xs text-[#718ebf] font-medium">
                {item.month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
