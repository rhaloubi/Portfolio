"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "../../components/ui/button";
import BottomText from '../about/BottomText';


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom",
        end: "center center",
       // markers: true, // Enable markers to visualize triggers
        scrub: 1,

      }
    });

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-auto w-full max-w-[100vw] pt-10 ">
      <BottomText text="About Me * About Me * About Me * About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column - Fun Stuff */}
        <div className="text-center">
          <h2 
            ref={titleRef}
            className="text-[120px] sm:text-[160px] md:text-[180px] lg:text-[220px] font-[AtomicMarker] font-light text-[#399918] 
            leading-none transform -rotate-6"
            style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}
          >
            CHILL BUILDS
          </h2>
        </div>

        {/* Right Column - Late Night */}
        <div className="space-y-6 px-4 md:px-10">
          <div className="flex items-end gap-2 md:gap-4">
            <h3 className="text-[140px] sm:text-[180px] md:text-[220px] text-center lg:text-[280px] font-[TTTrailers] font-thin text-white leading-none"
              style={{ letterSpacing:"0px", lineHeight: "0.75" }}>
              LATE NIGHT
            </h3>
            <span className="text-[30px] text-[#cf5487] sm:text-[40px] lg:text-[50px] font-[AtomicMarker] transform -ml-[110px] md:-ml-[120px] -rotate-6">
              CODER
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-400 pr-4 md:pr-10 text-sm md:text-base max-w-xl">
              Fueled by late nights and loud beats, I craft smooth, functional digital experiences with a creative edge. From React to .NET, I bring chill energy and sharp focus to every build.
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full md:w-[50vw] mt-8 mb-3'>
        <Button 
          className="relative inline-flex text-[20px] md:text-[24px] font-[TTTrailers] border-t border-l border-[#FF70AB] rounded-full h-12 md:h-13 items-center px-6 md:px-10 py-2 bg-[length:200%_100%] text-white transition-all duration-500 hover:bg-[center_right_10px] hover:shadow-lg hover:shadow-red-500/50"
        >
          About mE
        </Button>
      </div>
    </div>
  );
}