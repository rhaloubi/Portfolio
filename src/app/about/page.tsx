"use client";
import React, { useState, useEffect } from "react";
import { IoTerminal } from "react-icons/io5";
import Terminal from "../../components/about/terminal";

export default function About() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black p-10 flex items-center justify-center">
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
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">
              MacBook Pro
            </div>
            <div className="text-center text-white text-sm">
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
            <div 
              onClick={() => setIsTerminalOpen(true)}
              className="w-16 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80"
            >
              <IoTerminal className="text-4xl outline-4 outline-gray-600 text-white" />
              <span className="text-xs text-white">Terminal</span>
            </div>

            {/* Terminal Window */}
            {isTerminalOpen && (
              <Terminal onClose={() => setIsTerminalOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}