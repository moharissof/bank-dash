"use client"

import { Search, Bell, Settings, Menu, User, Mail, LogOut } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

interface HeaderProps {
  toggleMobileSidebar?: () => void  
}

export default function Header({ toggleMobileSidebar }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showProfileModal && !target.closest('.profile-modal') && !target.closest('.profile-avatar')) {
        setShowProfileModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showProfileModal])

  const ProfileModal = () => (
    <div className="profile-modal absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#e6eff5] z-50">
      {/* User Profile Section */}
      <div className="p-6 border-b border-[#f5f7fa]">
        <h3 className="text-lg font-semibold text-[#343c6a] mb-4">User Profile</h3>
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/images/user.png" />
            <AvatarFallback className="bg-[#1814f3] text-white text-lg">CR</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-lg font-semibold text-[#343c6a]">Charlene Reed</h4>
            <p className="text-sm text-[#718ebf] mb-1">Designer</p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#718ebf]" />
              <span className="text-sm text-[#718ebf]">info@dashbank.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="p-4">
        <button className="w-full flex items-center gap-4 p-4 hover:bg-[#f5f7fa] rounded-xl transition-colors">
          <div className="w-12 h-12 bg-[#e8f2ff] rounded-xl flex items-center justify-center">
            <User className="w-6 h-6 text-[#1814f3]" />
          </div>
          <div className="text-left">
            <p className="font-medium text-[#343c6a]">My Profile</p>
            <p className="text-sm text-[#718ebf]">Account Settings</p>
          </div>
        </button>

        <button className="w-full flex items-center justify-center gap-2 mt-4 p-4 border border-[#ff4b4a] text-[#ff4b4a] rounded-xl hover:bg-[#ff4b4a] hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <div className="bg-white border-b border-[#e6eff5] relative">
        {/* Top Header Bar */}
        <div className="py-4 px-4 flex justify-between items-center">
          {/* Left side: Hamburger menu */}
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMobileSidebar}
          >
            <Menu className="w-6 h-6 text-[#343c6a]" />
          </button>

          {/* Center: Overview title */}
          <h1 className="text-lg font-semibold text-[#343c6a] absolute left-1/2 transform -translate-x-1/2">Overview</h1>

          {/* Right side: Avatar only */}
          <div className="relative">
            <button
              className="profile-avatar"
              onClick={() => setShowProfileModal(!showProfileModal)}
            >
              <Avatar className="w-10 h-10">
                <AvatarImage src="/images/user.png" />
                <AvatarFallback className="bg-[#1814f3] text-white text-sm">CR</AvatarFallback>
              </Avatar>
            </button>
            
            {showProfileModal && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#e6eff5] z-50 profile-modal">
                {/* User Profile Section */}
                <div className="p-4 border-b border-[#f5f7fa]">
                  <h3 className="text-base font-semibold text-[#343c6a] mb-3">User Profile</h3>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/images/user.png" />
                      <AvatarFallback className="bg-[#1814f3] text-white text-sm">CR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold text-[#343c6a]">Charlene Reed</h4>
                      <p className="text-xs text-[#718ebf] mb-1">Designer</p>
                      <div className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#718ebf]" />
                        <span className="text-xs text-[#718ebf]">info@dashbank.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Section */}
                <div className="p-3">
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-[#f5f7fa] rounded-xl transition-colors">
                    <div className="w-10 h-10 bg-[#e8f2ff] rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-[#1814f3]" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-[#343c6a]">My Profile</p>
                      <p className="text-xs text-[#718ebf]">Account Settings</p>
                    </div>
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 mt-3 p-3 border border-[#ff4b4a] text-[#ff4b4a] rounded-xl hover:bg-[#ff4b4a] hover:text-white transition-colors">
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8ba3cb] w-4 h-4" />
            <Input
              placeholder="Search for something"
              className="pl-12 pr-4 py-3 w-full bg-[#f5f7fa] border-none text-[#8ba3cb] placeholder:text-[#8ba3cb] rounded-full h-12 focus:ring-2 focus:ring-[#1814f3] focus:ring-opacity-20"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border-b border-[#e6eff5] py-5 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-semibold text-[#343c6a]">Overview</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8ba3cb] w-4 h-4" />
            <Input
              placeholder="Search for something"
              className="pl-12 pr-4 py-3 w-80 bg-[#f5f7fa] border-none text-[#8ba3cb] placeholder:text-[#8ba3cb] rounded-full h-12 focus:ring-2 focus:ring-[#1814f3] focus:ring-opacity-20"
            />
          </div>

          <Button variant="ghost" size="icon" className="text-[#718ebf] hover:bg-[#f5f7fa] w-12 h-12 rounded-full">
            <Settings className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-[#718ebf] hover:bg-[#f5f7fa] relative w-12 h-12 rounded-full"
          >
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff4b4a] rounded-full"></div>
          </Button>

          <div className="relative">
            <button
              className="profile-avatar"
              onClick={() => setShowProfileModal(!showProfileModal)}
            >
              <Avatar className="w-12 h-12">
                <AvatarImage src="/images/user.png" />
                <AvatarFallback>CR</AvatarFallback>
              </Avatar>
            </button>
            
            {showProfileModal && <ProfileModal />}
          </div>
        </div>
      </div>
    </div>
  )
}
