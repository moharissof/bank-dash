"use client"

export function WeeklyActivity() {
  const data = [
    { day: 'Sat', deposit: 250, withdraw: 150 },
    { day: 'Sun', deposit: 350, withdraw: 120 },
    { day: 'Mon', deposit: 300, withdraw: 200 },
    { day: 'Tue', deposit: 480, withdraw: 350 },
    { day: 'Wed', deposit: 200, withdraw: 250 },
    { day: 'Thu', deposit: 350, withdraw: 280 },
    { day: 'Fri', deposit: 400, withdraw: 320 }
  ]

  const maxValue = Math.max(...data.flatMap(d => [d.deposit, d.withdraw]))

  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 lg:p-6 shadow-sm border border-[#e6eff5] h-full flex flex-col">
      <div className="flex justify-between items-start mb-4 md:mb-5 lg:mb-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#343c6a]">Weekly Activity</h3>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#1814f3] rounded-full"></div>
            <span className="text-xs md:text-sm text-[#718ebf]">Deposit</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#4ce1b6] rounded-full"></div>
            <span className="text-xs md:text-sm text-[#718ebf]">Withdraw</span>
          </div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="relative flex-1 min-h-[180px] sm:min-h-[200px] md:min-h-[250px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#718ebf] py-4">
          <span>500</span>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>
        
        {/* Chart container */}
        <div className="ml-8 sm:ml-10 h-full flex flex-col">
          {/* Chart bars */}
          <div className="flex-1 flex items-end justify-between gap-2 sm:gap-3 pb-2">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1 h-full max-w-[40px] sm:max-w-[60px]">
                <div className="flex gap-1 items-end flex-1 w-full min-h-0">
                  {/* Deposit bar */}
                  <div 
                    className="w-full bg-[#1814f3] rounded-t-md min-h-[4px]"
                    style={{ height: `${Math.max((item.deposit / maxValue) * 100, 8)}%` }}
                  ></div>
                  {/* Withdraw bar */}
                  <div 
                    className="w-full bg-[#4ce1b6] rounded-t-md min-h-[4px]"
                    style={{ height: `${Math.max((item.withdraw / maxValue) * 100, 8)}%` }}
                  ></div>
                </div>
                <span className="text-xs text-[#718ebf] font-medium mt-2">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
