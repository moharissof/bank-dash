"use client"

import { 
  HomeIcon, 
  ArrowsRightLeftIcon, 
  UserIcon, 
  ChartBarIcon, 
  CreditCardIcon, 
  BanknotesIcon, 
  UsersIcon, 
  GiftIcon, 
  Cog6ToothIcon,
  XMarkIcon
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isMobile?: boolean
  onClose?: () => void
}

export default function Sidebar({ isMobile = false, onClose }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose()
    }
  }

  const navItems = [
    {
      title: "Dashboard",
      icon: HomeIcon,
      href: "/",
    },
    {
      title: "Transactions",
      icon: ArrowsRightLeftIcon,
      href: "/transactions",
    },
    {
      title: "Accounts",
      icon: UserIcon,
      href: "/accounts",
    },
    {
      title: "Investments",
      icon: ChartBarIcon,
      href: "/investments",
    },
    {
      title: "Credit Cards",
      icon: CreditCardIcon,
      href: "/credit-cards",
    },
    {
      title: "Loans",
      icon: BanknotesIcon,
      href: "/loans",
    },
    {
      title: "Services",
      icon: UsersIcon,
      href: "/services",
    },
    {
      title: "My Privileges",
      icon: GiftIcon,
      href: "/privileges",
    },
    {
      title: "Setting",
      icon: Cog6ToothIcon,
      href: "/settings",
    },
  ]

  if (isMobile) {
    return (
      <div className="flex flex-col w-full bg-white min-h-screen">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6eff5]">
          <div className="flex items-center">
            <Image 
              src="/images/Logo.png" 
              alt="BankDash Logo" 
              width={120} 
              height={35} 
              className="h-8 w-auto"
            />
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-[#718ebf]" />
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex-1 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={handleLinkClick}
              className={`relative flex items-center gap-4 px-4 py-4 rounded-xl mb-2 ${
                isActive(item.href) ? "text-[#1814f3] bg-[#f5f7fa]" : "text-[#718ebf] hover:text-[#343c6a] hover:bg-gray-50"
              } transition-all`}
            >
              {isActive(item.href) && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1814f3] rounded-r-md" />
              )}
              <item.icon className="w-6 h-6 flex-shrink-0" />
              <span className={`text-base ${isActive(item.href) ? "font-semibold" : "font-medium"}`}>
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="hidden md:flex flex-col w-[200px] lg:w-[250px] bg-white shadow-sm min-h-screen border-r border-[#e6eff5] relative">
      <div className="flex items-center px-4 lg:px-6 py-6">
        <Image 
          src="/images/Logo.png" 
          alt="BankDash Logo" 
          width={120} 
          height={35} 
          className="h-6 lg:h-8 w-auto"
        />
      </div>

      <div className="mt-6 px-4 lg:px-6 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={`relative flex items-center gap-2 lg:gap-4 px-2 lg:px-4 py-3 rounded-xl mb-2 ${
              isActive(item.href) ? "text-[#0A06F4] bg-[#f5f7fa]" : "text-[#718ebf] hover:text-[#343c6a] hover:bg-gray-50"
            } transition-all`}
          >
            {isActive(item.href) && <div className="absolute left-[-16px] lg:left-[-24px] top-0 bottom-0 w-1 bg-[#1814f3] rounded-r-md" />}
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className={`text-xs lg:text-sm ${isActive(item.href) ? "font-semibold" : "font-medium"}`}>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
