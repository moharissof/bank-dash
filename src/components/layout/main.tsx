"use client"

import { type ReactNode, useState } from "react"
import Header  from "./header"
import Sidebar from "./sidebar"

interface LayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: LayoutProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar isMobile={true} onClose={closeMobileSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header toggleMobileSidebar={toggleMobileSidebar} />
        
        {/* Dashboard Content */}
        <main className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
