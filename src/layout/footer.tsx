"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const whiteRef = useRef(null);
  const redRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: whiteRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      }
    });

    tl.to(whiteRef.current, {
      rotateZ: -7,
      x: "-10%",
      duration: 2.5,
      ease: "power3.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer className="relative bg-[#FF3B1D] h-[145vh] overflow-hidden">
      {/* White section */}
      <div 
        ref={whiteRef} 
        className="absolute top-0 left-0 w-full h-[80vh] bg-white flex items-center justify-center z-10"
      >        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[150px] font-[TTTrailers] text-black">
            THE LINE
          </h2>
        </div>
      </div>

      {/* Red section */}
      <div ref={redRef} className="fixed top-0 left-0 w-full h-screen bg-[#FF3B1D] flex flex-col justify-end">        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-white text-xl font-bold">REACH OUT</h4>
              <p className="text-white">info@thelineanimation.com</p>
              <p className="text-white">+44 (0)20 30020224</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xl font-bold">FIND US</h4>
              <p className="text-white">
                The Line Animation Studio Ltd<br />
                Studio 92<br />
                De Beauvoir Block, 92-96<br />
                De Beauvoir Road<br />
                London, N1 4EN
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xl font-bold">SOCIAL</h4>
              <ul className="text-white space-y-2">
                <li>YouTube</li>
                <li>Instagram</li>
                <li>TikTok</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xl font-bold">NAV</h4>
              <ul className="text-white space-y-2">
                <li>Home</li>
                <li>Work</li>
                <li>Entertainment</li>
                <li>About</li>
                <li>Feed</li>
                <li>Podcast</li>
                <li>Contact</li>
                <li>Shop</li>
              </ul>
            </div>
          </div>
          <h3 className="text-[80px] font-[TTTrailers] text-white mt-20">
            Newsletter
          </h3>
        </div>
      </div>
    </footer>
  );
}