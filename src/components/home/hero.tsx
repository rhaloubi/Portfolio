"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const backgroundTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Background text animation
    const backgroundTl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    backgroundTl.fromTo(backgroundTextRef.current,
      { x: '0%' },
      { 
        x: '-50%', 
        duration: 15,
      }
    );

    // Bottom text animation
    const bottomTl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    bottomTl.fromTo(bottomTextRef.current,
      { x: '0%' },
      { 
        x: '-50%', 
        duration: 15,
      }
    );

    // Vertical position animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'center 14%',
      // markers: true,
      scrub: 1,
      onUpdate: (self) => {
        if ( self.progress > 0) {
          gsap.to(containerRef.current, {
            position: 'fixed',
            top: '50%',
            duration: 0
          });
        } else if (self.progress > 1 && self.progress === 0) {
          gsap.to(containerRef.current, {
            position: 'absolute',
            top: '50%',
            duration: 0
          });
        }
      },
      onLeave: () => {
        gsap.to(containerRef.current, {
          position: 'absolute',
          top: '70%',
          duration: 0
        });
      }
    });

    return () => {
      backgroundTl.kill();
      bottomTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[170vh] w-full overflow-hidden  bg-[#0B0B0B] text-white">
      {/* Background moving text */}
      <div ref={containerRef} className="fixed top-[45%] w-screen whitespace-nowrap z-0 -translate-y-1/2 rotate-[+2deg]">
        <h2 ref={backgroundTextRef} className="font-[TTTrailers] text-[350px] tracking-tighter text-transparent [-webkit-text-stroke:4px_#FF70AB] opacity-30 select-none pointer-events-none">
        Haloubi Reda * Haloubi Reda * Haloubi Reda * Haloubi Reda
        </h2>
      </div>

      {/* Top green text */}
      <div className="absolute top-[100px] left-2/3 -translate-x-1/2 text-center w-[340px] z-20">
        <p className="font-[AtomicMarker] text-[39px] text-[#399918] tracking-wider">
        Full-Stack Developer & Creative Technologist
        </p>
      </div>

      {/* Main centered text */}
      <div className="absolute  top-[620px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
        <h1 className="font-[TTTrailers] text-[264px] leading-[198px] text-white mb-8" style={{ letterSpacing: '-0.02em' }}>
        CREATIVE 
          <br />
          ENGINEER
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg px-4">
        {"I’m "} 
         <span className='text-white text-2xl cursor-crosshair font-[TTTrailers] relative group'>
              Haloubi Reda
          <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
        </span>
        {" — a computer engineering student from Tangier with a vision to turn code into meaningful digital experiences. My work lives at the intersection of logic and creativity, where I build intuitive interfaces, scalable systems, and immersive products that not only function flawlessly, but look and feel exceptional. Whether it's a bold front-end interface or a robust back-end engine, I craft with purpose and precision. "}
        <br/>{"Explore my world of code, design, and innovation — and let’s create something remarkable togethe"}

        </p>
      </div>
    </div>
  );
}