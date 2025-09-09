"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function CreditCards() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#343c6a]">My Cards</h2>
        <button className="text-[#343c6a] font-medium text-xs md:text-sm hover:text-[#1814f3] transition-colors">See All</button>
      </div>

      {/* Mobile: Horizontal scroll layout */}
      {isMobile ? (
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {/* Card 1 - Blue */}
            <div
              className="text-white rounded-xl shadow-lg p-4 h-[200px] w-[280px] flex flex-col justify-between flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #1814f3 0%, #396aff 100%)",
                backgroundColor: "#1814f3",
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white opacity-70 text-xs mb-1">Balance</p>
                  <p className="text-lg font-semibold text-white">$5,756</p>
                </div>
                <div className="w-8 h-6 flex items-center justify-center">
                  <Image 
                    src="/icons/chip-white.png" 
                    alt="Chip" 
                    width={32} 
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-white opacity-60 text-xs mb-1">CARD HOLDER</p>
                  <p className="text-xs font-medium text-white">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-white opacity-60 text-xs mb-1">VALID THRU</p>
                  <p className="text-xs font-medium text-white">12/22</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-mono tracking-wider text-white">3778 **** **** 1234</p>
                <div className="flex">
                  <div className="w-4 h-4 bg-white opacity-30 rounded-full"></div>
                  <div className="w-4 h-4 bg-white opacity-50 rounded-full -ml-1"></div>
                </div>
              </div>
            </div>

            {/* Card 2 - White */}
            <div className="bg-white border border-[#dfe5ee] rounded-xl shadow-sm p-4 h-[200px] w-[280px] flex flex-col justify-between flex-shrink-0">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#718ebf] text-xs mb-1">Balance</p>
                  <p className="text-lg font-semibold text-[#343c6a]">$5,756</p>
                </div>
                <div className="w-8 h-6 flex items-center justify-center">
                  <Image 
                    src="/icons/chip-black.png" 
                    alt="Chip" 
                    width={32} 
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-[#718ebf] text-xs mb-1">CARD HOLDER</p>
                  <p className="text-xs font-medium text-[#343c6a]">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-[#718ebf] text-xs mb-1">VALID THRU</p>
                  <p className="text-xs font-medium text-[#343c6a]">12/22</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-mono tracking-wider text-[#343c6a]">3778 **** **** 1234</p>
                <div className="flex">
                  <div className="w-4 h-4 bg-[#dfe5ee] rounded-full"></div>
                  <div className="w-4 h-4 bg-[#c5c5cf] rounded-full -ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop: Grid layout */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Card 1 - Blue */}
          <div
            className="text-white rounded-xl shadow-lg p-3 md:p-4 h-[220px] md:h-[240px] flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #1814f3 0%, #396aff 100%)",
              backgroundColor: "#1814f3",
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white opacity-70 text-xs mb-1">Balance</p>
                <p className="text-lg font-semibold text-white">$5,756</p>
              </div>
              <div className="w-8 h-6 flex items-center justify-center">
                <Image 
                  src="/icons/chip-white.png" 
                  alt="Chip" 
                  width={32} 
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-white opacity-60 text-xs mb-1">CARD HOLDER</p>
                <p className="text-xs font-medium text-white">Eddy Cusuma</p>
              </div>
              <div>
                <p className="text-white opacity-60 text-xs mb-1">VALID THRU</p>
                <p className="text-xs font-medium text-white">12/22</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-mono tracking-wider text-white">3778 **** **** 1234</p>
              <div className="flex">
                <div className="w-4 h-4 bg-white opacity-30 rounded-full"></div>
                <div className="w-4 h-4 bg-white opacity-50 rounded-full -ml-1"></div>
              </div>
            </div>
          </div>

          {/* Card 2 - White */}
          <div className="bg-white border border-[#dfe5ee] rounded-xl shadow-sm p-3 md:p-4 h-[220px] md:h-[240px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#718ebf] text-xs mb-1">Balance</p>
                <p className="text-lg font-semibold text-[#343c6a]">$5,756</p>
              </div>
              <div className="w-8 h-6 flex items-center justify-center">
                <Image 
                  src="/icons/chip-black.png" 
                  alt="Chip" 
                  width={32} 
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[#718ebf] text-xs mb-1">CARD HOLDER</p>
                <p className="text-xs font-medium text-[#343c6a]">Eddy Cusuma</p>
              </div>
              <div>
                <p className="text-[#718ebf] text-xs mb-1">VALID THRU</p>
                <p className="text-xs font-medium text-[#343c6a]">12/22</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-mono tracking-wider text-[#343c6a]">3778 **** **** 1234</p>
              <div className="flex">
                <div className="w-4 h-4 bg-[#dfe5ee] rounded-full"></div>
                <div className="w-4 h-4 bg-[#c5c5cf] rounded-full -ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
