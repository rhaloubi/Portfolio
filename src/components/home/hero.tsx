"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Horizontal scroll animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    tl.fromTo(textRef.current,
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
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        if (self.progress < 1 && self.progress > 0) {
          gsap.to(containerRef.current, {
            position: 'fixed',
            top: '50%',
            duration: 0
          });
        } else if (self.progress === 0) {
          gsap.to(containerRef.current, {
            position: 'absolute',
            top: '35%',
            duration: 0
          });
        }
      },
      onLeave: () => {
        gsap.to(containerRef.current, {
          position: 'absolute',
          top: '60%',
          duration: 0
        });
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[150vh] bg-[#0B0B0B] text-white">
      {/* Background moving text */}
      <div ref={containerRef} className="absolute top-[35%] w-full whitespace-nowrap z-0 -translate-y-1/2">
        <h2 ref={textRef} className="font-[TTTrailers] text-[400px] tracking-tighter text-transparent [-webkit-text-stroke:3px_#FF0000] opacity-20">
          PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO
        </h2>
      </div>

      {/* Top green text */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center w-full z-10">
        <p className="font-[AtomicMarker] text-[39px] text-[#c4d600] tracking-wider">
          CREATIVE DEVELOPER & DESIGNER
        </p>
      </div>

      {/* Main centered text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-20">
        <h1 className="font-[TTTrailers] text-[264px] leading-[198px] text-white tracking-tighter mb-8">
          CREATIVE
          <br />
          VISION
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg px-4">
        Snack met ons de wereld beter. Want wij maken diepvries snacks met groente van
        dichtbij, zonder omwegen van boer tot frituur. Samen met onze boeren en telers
        redden we ook nog eens zoveel mogelijk groenten. Zo bestaat onze krokante korst
        uit chips die geupcycled is en maken we onze maisribs van maiskolven die te klein 
        of licht beschadigd zijn. Verder vind je In onze snacks geen onnodige toevoegingen! Wij hebben dus voor jou al die verantwoordelijkheid genomen, zodat jij wel de lusten hebt en niet de lasten. Oh, en ja! Al onze snacks zijn 100% plantaardig.


        </p>
      </div>
    </div>
  );
}