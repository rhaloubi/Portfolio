
"use client";
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
 

  return (
    
      <div className="absolute bottom-[260px]  left-[-8%] right-[-8%] overflow-x-hidden border-2  border-white items-center justify-center transform  rotate-12 bg-black text-white py-4   z-50">
        {/* Scrolling Text Container */}
        <div  className="whitespace-nowrap flex items-center gap-8 px-8">
          <span className="text-[60px] font-bold inline-flex items-center gap-8">
            FEB. 17, 2023
            <div className="w-6 h-6 bg-black rounded-full" />
            FEB. 17, 2023
            <div className="w-6 h-6 bg-black rounded-full" />
            FEB. 17, 2023
            <div className="w-6 h-6 bg-black rounded-full" />
            FEB. 17, 2023
            <div className="w-6 h-6 bg-black rounded-full" />
          </span>
        </div>
      </div>
     
  );
}