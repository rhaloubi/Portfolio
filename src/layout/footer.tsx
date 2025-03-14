"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const whiteRef = useRef(null);
  const redRef = useRef(null);
  const isOpenRef = useRef(0); // Store isOpen as a ref for immediate updates
  const [isOpen, setIsOpen] = useState(0);

  useEffect(() => {
    // White section animation
    gsap.to(whiteRef.current, {
      rotateZ: -5,
      x: "-5%",
      duration: 2.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: whiteRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Black section scroll detection
    ScrollTrigger.create({
        trigger:"footer",
        end: "70% center",
        onEnterBack: () => {
          if (isOpenRef.current === 1) {
            handleCloseClick();
          }
        },
      });
    
      

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleNewsletterClick = () => {
    gsap.to(redRef.current, {
      rotateZ: -5,
      x: "5%",
      y: "-30vh",
      duration: 1,
      ease: "power3.inOut",
    });
    isOpenRef.current = 1;
    setIsOpen(1);
  };

  const handleCloseClick = () => {
    gsap.to(redRef.current, {
      rotateZ: 0,
      x: "0",
      y: "0",
      duration: 0.5,
    });
    isOpenRef.current = 0;
    setIsOpen(0);
  };

  const handleClick = () => {
    if (isOpen === 0) {
      handleNewsletterClick();
    } else {
      handleCloseClick();
    }
  };

  return (
    <footer className="relative bg-[#fef9e3] h-[190vh] overflow-x-hidden">
      {/* White section */}
      <div
        ref={whiteRef}
        className="absolute top-0 left-0 w-screen h-[120vh] bg-[#fef9e3] flex items-end justify-center z-20"
      >
        <div className="w-screen text-center px-2">
          <h2
            className="text-[280px] w-full font-bold text-black leading-none"
            style={{
              fontFamily: "'Bowlby One SC', sans-serif",
            }}
          >
            THE LINE
          </h2>
        </div>
      </div>

      {/* Black section */}
      <div
        ref={redRef}
        className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-end z-10"
      >
        <div className="max-w-7xl mx-auto px-8">
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
          <h3
            className="text-[80px] font-[TTTrailers] text-white mt-20 cursor-pointer hover:text-gray-300 transition-colors"
            onClick={handleClick}
          >
            Newsletter
          </h3>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-green-800 flex flex-col justify-end"></div>
    </footer>
  );
}
