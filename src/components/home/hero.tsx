"use client"
import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Top text */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center w-full">
        <p className="font-[AtomicMarker] text-[39px] text-[#c4d600] tracking-wider">
          CREATIVE DEVELOPER & DESIGNER
        </p>
      </div>

      {/* Main centered text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="font-[TTTrailers] text-[264px] leading-[198px] text-white tracking-tighter mb-8">
          CREATIVE
          <br />
          VISION
        </h1>
        
        {/* Description text */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg px-4">
          Building digital experiences that combine innovative design with cutting-edge technology. 
          Creating seamless interactions and memorable user experiences.
        </p>
      </div>

      {/* Background text effect */}
      <div className="absolute -top-20 left-0 w-full h-screen opacity-5 select-none pointer-events-none">
        <div className="font-[TTTrailers] text-[20vw] tracking-tighter">
          PORTFOLIO
        </div>
      </div>
    </div>
  );
}