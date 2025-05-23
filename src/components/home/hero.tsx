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
        if (self.progress > 0 && self.progress < 1) {
          gsap.set(containerRef.current, {
            position: 'fixed',
            top: '50%',
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
    <div ref={sectionRef} className="relative min-h-[120vh] sm:min-h-[170vh] w-full overflow-hidden bg-[#0B0B0B] text-white px-4">
      {/* Background moving text */}
      <div ref={containerRef} className="fixed top-[45%] w-screen whitespace-nowrap z-0 -translate-y-1/2 rotate-[+2deg] overflow-hidden">
        <h2 ref={backgroundTextRef} className="font-[TTTrailers] text-[200px] md:text-[280px] lg:text-[350px] tracking-tighter text-transparent  [-webkit-text-stroke:2px_#FF70AB] lg:[-webkit-text-stroke:3px_#FF70AB] opacity-30 select-none pointer-events-none">
        Haloubi Reda * Haloubi Reda * Haloubi Reda * Haloubi Reda
        </h2>
      </div>
    
      {/* Top green text */}
      <div className="absolute top-[110px] sm:top-[80px] md:top-[100px] left-1/4 sm:left-2/3 -translate-x-1/2 text-center w-[130px] sm:w-[340px] z-20">
        <p className="font-[AtomicMarker] text-[15px] sm:text-[30px] md:text-[39px] text-[#399918] tracking-wider">
        Full-Stack Developer & Creative Technologist
        </p>
      </div>
    
      {/* Main centered text */}
      <div className="absolute top-[450px] sm:top-[500px] md:top-[620px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10">
        <h1 className="font-[TTTrailers] text-[140px] sm:text-[180px] md:text-[220px] lg:text-[264px] leading-[0.75] sm:leading-[0.85] md:leading-[198px] text-white mb-4 sm:mb-6 md:mb-8" style={{ letterSpacing: '-0.02em' }}>
        CREATIVE 
          <br />
          ENGINEER
        </h1>
        
        <p className="max-w-sm sm:max-w-xl md:max-w-2xl mx-auto text-gray-400 text-sm sm:text-lg px-4">
        {"I'm "} 
        <span className='text-white text-xl sm:text-2xl cursor-crosshair font-[TTTrailers] relative group'>
          Haloubi Reda
          <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
        </span>
        {" — a computer engineering student from Tangier with a vision to turn code into meaningful digital experiences. My work lives at the intersection of logic and creativity, where I build intuitive interfaces, scalable systems, and immersive products that not only function flawlessly, but look and feel exceptional. Whether it's a bold front-end interface or a robust back-end engine, I craft with purpose and precision. "}
        <br/>{"Explore my world of code, design, and innovation — and let's create something remarkable togethe"}
      </p>
    </div>
  </div>
);
}