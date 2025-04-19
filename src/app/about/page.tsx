"use client";
import React, { useState, useEffect } from "react";
import { SiGnometerminal } from "react-icons/si";
import { IoFolderOpenSharp } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Terminal from "../../components/about/terminal";
import { BatteryIndicator } from "../../components/about/BatteryIndicator";
import { Toaster } from 'react-hot-toast';
import Folder from "../../components/about/folder";


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
    <main className="relative z-30 h-[200vh] w-full overflow-x-hidden flex flex-col bg-[#0B0B0B]  text-white">
      <div className="absolute w-full text-center m-14  ">
      <h1 className="text-xl text-[30px]">let talk</h1> 
      </div>
    <div className="min-h-screen font-[SFCompactRounded]  p-10 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Main Mac Window */}
        <div 
          className="bg-[#464646] rounded-lg shadow-2xl overflow-hidden border border-gray-700"
          style={{
            backgroundImage: 'url("/img/bullseye-gradient.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Window Header */}
          <div className="bg-[#2d2d2d] px-2  flex items-center">
            <div className="flex items-center ">
              <FaApple className="mr-3" />
              <DropdownMenu >
                <DropdownMenuTrigger className="text-[13px] px-2 hover:bg-gray-700 rounded-sm">File</DropdownMenuTrigger>
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
            <div className="flex-1 text-center  text-sm text-gray-400">
              MacBook Pro
            </div>
            <BatteryIndicator messageCount={messageCount} />
            <div className="text-center  font-light text-white text-sm">
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

          {/* Desktop Area */}
          <div className="min-h-[600px] p-6 relative">
            {/* Terminal Icon */}
            <div className="flex gap-6">
            <div 
                onClick={() => setIsTerminalOpen(true)}
                className="w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80"
              >
              <SiGnometerminal className="text-5xl outline-4 outline-gray-600 " />
              <span className="text-xs text-white">Terminal</span>
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
                className="w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80"
              >
                <IoFolderOpenSharp className="text-5xl " />
                <span className="text-xs text-white">CV</span>
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

    {//<Main/>
     }
    

      
  
    </main>
      <div className="relative z-0">
      <Footer/>
    </div>
    </div>
  );
}
