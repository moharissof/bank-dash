"use client"

import Image from "next/image"

interface Transaction {
  id: string
  description: string
  date: string
  amount: string
  type: "income" | "expense"
  icon: string
  iconBg: string
}

export function RecentTransaction() {
  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      type: "expense",
      icon: "/icons/finance.png",
      iconBg: "bg-[#fff5d9]",
    },
    {
      id: "2",
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      type: "income",
      icon: "/icons/paypal.png",
      iconBg: "bg-[#e7edff]",
    },
    {
      id: "3",
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      type: "income",
      icon: "/icons/dolar.png",
      iconBg: "bg-[#dcfce7]",
    },
  ]

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-[#343c6a]">Recent Transaction</h2>
      </div>

      <div className="bg-white border border-[#dfe5ee] rounded-xl shadow-sm p-3 md:p-4 h-[220px] md:h-[240px] flex flex-col">
        <div className="flex-1 space-y-3 md:space-y-4 overflow-y-auto">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between hover:bg-[#f5f7fa] rounded-lg transition-colors p-1 md:p-2"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className={`w-7 md:w-8 h-7 md:h-8 rounded-full ${transaction.iconBg} flex items-center justify-center text-sm`}>
                  <Image 
                    src={transaction.icon} 
                    alt="Transaction icon" 
                    width={16} 
                    height={16}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-medium text-[#343c6a] text-xs">{transaction.description}</p>
                  <p className="text-[#718ebf] text-xs">{transaction.date}</p>
                </div>
              </div>
              <div
                className={`font-semibold text-xs ${
                  transaction.type === "income" ? "text-[#16c78a]" : "text-[#fe5c73]"
                }`}
              >
                {transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
