"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

interface Contact {
  id: string
  name: string
  role: string
  avatar: string
}

export function QuickTransfer() {
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Livia Bator",
      role: "CEO",
      avatar: "/images/avatar1.png",
    },
    {
      id: "2",
      name: "Randy Press",
      role: "Director",
      avatar: "/images/avatar2.png",
    },
    {
      id: "3",
      name: "Workman",
      role: "Designer",
      avatar: "/images/avatar3.png",
    },
  ]

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-[#e6eff5] h-full flex flex-col min-h-[280px] max-w-full overflow-hidden">
      <h3 className="text-base md:text-lg font-semibold text-[#343c6a] mb-4 flex-shrink-0">Quick Transfer</h3>

      {/* Contact List */}
      <div className="flex items-center justify-start gap-4 md:gap-6 mb-6 flex-shrink-0 overflow-x-auto pb-2">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex flex-col items-center flex-shrink-0 min-w-[70px]">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full mb-2 overflow-hidden bg-[#1814f3] flex items-center justify-center flex-shrink-0">
              <Image
                src={contact.avatar || "/placeholder.svg"}
                alt={contact.name}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = `<span class="text-white font-semibold text-sm">${contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}</span>`
                  }
                }}
              />
            </div>
            <p className="text-sm font-medium text-[#343c6a] text-center mb-1 leading-tight max-w-full break-words">
              {contact.name}
            </p>
            <p className="text-xs text-[#718ebf] text-center leading-tight max-w-full break-words">{contact.role}</p>
          </div>
        ))}
      </div>

      {/* Transfer Amount */}
      <div className="mt-auto pt-2 flex-shrink-0">
        <p className="text-sm text-[#718ebf] mb-3">Write Amount</p>
        <div className="flex items-stretch gap-3">
          <input
            type="text"
            placeholder="525.50"
            className="flex-1 min-w-0 px-3 py-3 bg-[#f5f7fa] rounded-lg border border-[#e6eff5] text-[#343c6a] focus:outline-none focus:border-[#1814f3] focus:ring-1 focus:ring-[#1814f3] text-sm"
          />
          <button className="px-4 py-3 bg-[#1814f3] text-white rounded-lg hover:bg-[#1510d8] transition-colors flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            <span className="text-sm font-medium">Send</span>
            <PaperAirplaneIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
