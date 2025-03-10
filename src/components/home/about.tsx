"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
        end: "center center",
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
    <div className="relative min-h-auto w-full max-w-[100vw] pt-10 px-8">
      <div className="  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Fun Stuff */}
          <div className="text-center">
            <h2 
              ref={titleRef}
              className="text-[220px] font-[AtomicMarker] font-light text-[#399918] 
              leading-none transform -rotate-6"
              style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}
            >
              CHILL SHIT
            </h2>
          </div>

          {/* Right Column - Late Night */}
          <div  className="space-y-6 px-10">
            <h3 className="text-[280px] font-[TTTrailers] font-thin text-white mb-2  leading-none "
            style={{ letterSpacing:"0px" ,  lineHeight: "210px"}}>
              LATE NIGHT
            </h3>
            <div className="flex justify-between  items-center">
              <p className="text-gray-400 pr-10 text-sm max-w-xl">
                De meest crunchy, juicy playlist! Zodat jij je SNACKWITHBENEFITS nog lekkerder
                kan dippen tijdens een late night craving.
              </p>
              <span className="text-[#cf5487] text-[50px] font-[AtomicMarker] transform mt-[-130px] ml[-120px] -rotate-6">CRAVINGS</span>
            </div>
          </div>
          {/* Widgets */}
        </div>
      </div>
    </div>
  );
}