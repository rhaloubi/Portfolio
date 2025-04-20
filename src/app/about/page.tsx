"use client";
import React, { useState, useEffect } from "react";
import { SiGnometerminal } from "react-icons/si";
import { IoFolderOpenSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Terminal from "../../components/about/terminal";
import { BatteryIndicator } from "../../components/about/BatteryIndicator";
import { Toaster } from 'react-hot-toast';
import Folder from "../../components/about/folder";
import Hero from "../../components/about/hero";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import Footer from "../../layout/footer";



export default function About() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <Toaster position="top-center" />
    <main className="relative z-30 h-[150vh] sm:h-[170vh] w-full overflow-x-hidden flex flex-col bg-[#0B0B0B] text-white">
      <Hero/>
      <div className="min-h-screen font-[SFCompactRounded] p-4 sm:p-6 md:p-10 flex items-center justify-center">
        <div className="w-full max-w-5xl">
          {/* Main Mac Window */}
          <div 
            className="bg-[#464646] rounded-lg overflow-hidden border border-gray-700 w-full"
            style={{
              backgroundImage: 'url("/img/bullseye-gradient.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: 
                '-10px 0 15px -8px rgba(75,75,75,0.5), ' +
                '10px 0 15px -8px rgba(75,75,75,0.5), ' +
                '0 20px 35px -10px rgba(75,75,75,0.8), ' +
                '0 4px 25px rgba(75,75,75,0.3)'
            }}
          >
            {/* Window Header */}
            <div className="bg-[#2d2d2d] px-2 py-1 sm:py-2 flex items-center text-xs sm:text-sm overflow-x-auto">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <FaApple className="mr-2 hidden sm:block" />
                {/* Dropdown menus - hide on mobile */}
                <div className="hidden sm:flex items-center space-x-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-[11px] sm:text-[13px] px-1 sm:px-2 hover:bg-gray-700 rounded-sm">File</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-white  p-2 border-0 font-[SFCompactRounded]  bg-[#0B0B0B]">
                      <DropdownMenuItem className="text-[12px] py-[-8px]  hover:bg-[#cf5487]">Profile</DropdownMenuItem>
                      <DropdownMenuSeparator className="border-b border-gray-600 mx-2" />
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Billing</DropdownMenuItem>
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Team</DropdownMenuItem>
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu >
                    <DropdownMenuTrigger className="text-[13px] px-2 hover:bg-gray-700 rounded-sm">View</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-white  p-2 border-0 font-[SFCompactRounded]  bg-[#0B0B0B]">
                      <DropdownMenuItem className="text-[12px] py-[-8px]  hover:bg-[#cf5487]">Profile</DropdownMenuItem>
                      <DropdownMenuSeparator className="border-b border-gray-600 mx-2" />
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Billing</DropdownMenuItem>
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Team</DropdownMenuItem>
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu >
                    <DropdownMenuTrigger className="text-[13px] px-2 hover:bg-gray-700 rounded-sm">Help</DropdownMenuTrigger>
                    <DropdownMenuContent className="text-white  p-2 border-0 font-[SFCompactRounded]  bg-[#0B0B0B]">
                      <DropdownMenuItem className="text-[12px] py-[-8px]  hover:bg-[#cf5487]">Profile</DropdownMenuItem>
                      <DropdownMenuSeparator className="border-b border-gray-600 mx-2" />
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Billing</DropdownMenuItem>
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Team</DropdownMenuItem>
                      <DropdownMenuItem className="text-[12px] py-[-8px] hover:bg-[#cf5487]">Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex-1 text-center text-[11px] sm:text-sm text-gray-400">
                MacBook Pro
              </div>
              <div className="flex items-center space-x-2">
                <BatteryIndicator messageCount={messageCount} />
                <div className="text-center font-light text-white text-[10px] sm:text-sm whitespace-nowrap">
                  {currentTime.toLocaleString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: false
                  })}
                </div>
              </div>
            </div>

            {/* Desktop Area */}
            <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] p-4 sm:p-6 relative">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {/* Terminal Icon */}
                <div 
                  onClick={() => setIsTerminalOpen(true)}
                  className="w-12 sm:w-16 flex flex-col items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80"
                >
                  <SiGnometerminal className="text-3xl sm:text-5xl outline-4 outline-gray-600" />
                  <span className="text-[10px] sm:text-xs text-white">Terminal</span>
                </div>

                {/* Terminal Window */}
                {isTerminalOpen && (
                  <Terminal 
                    onClose={() => setIsTerminalOpen(false)} 
                    onMessageCountChange={setMessageCount}
                  />
                )}

                {/* Folder Icon */}
                <div 
                  onClick={() => setIsFolderOpen(true)}
                  className="w-12 sm:w-16 flex flex-col items-center gap-1 sm:gap-2 cursor-pointer hover:opacity-80"
                >
                  <IoFolderOpenSharp className="text-3xl sm:text-5xl" />
                  <span className="text-[10px] sm:text-xs text-white">CV</span>
                </div>

                {/* Folder Window */}
                {isFolderOpen && (
                  <Folder onClose={() => setIsFolderOpen(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="relative z-0">
      <Footer/>
    </div>
  </div>
);
}
