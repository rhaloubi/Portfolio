"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useClickSound } from '../hooks/useClickSound';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaGithub, FaLinkedin , FaArrowLeft} from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { TextPlugin } from 'gsap/TextPlugin';


// Add at the top with other imports

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Footer() {
  const router = useRouter();
  const whiteRef = useRef(null);
  const redRef = useRef(null);
  const isOpenRef = useRef(0); // Store isOpen as a ref for immediate updates
  const [isOpen, setIsOpen] = useState(0);
  const { audioRef, playTickSound } = useClickSound();

  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window !== 'undefined') {
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

      // Create ScrollTrigger based on screen width
      ScrollTrigger.create({
        trigger: "footer",
        end: window.innerWidth < 640 ? "45% center" : "65% center",
        //markers: true,
        onEnterBack: () => {
          if (isOpenRef.current === 1) {
            handleCloseClick();
          }
        },
      });

      // Add resize listener with cleanup
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  const handleNewsletterClick = () => {
    gsap.to(redRef.current, {
      rotateZ: -5,
      x: "5%",
      y: "-30vh",
      duration: 1,
      // markers: true,
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

  const scrollToWork = async () => {
    if (window.location.pathname === '/') {
      const workSection = document.querySelector('.row-title');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
       router.push('/');
      setTimeout(() => {
        const workSection = document.querySelector('.row-title');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  


  return (
    <footer className="relative font-[FormulaCondensed] bg-[#fef9e3] h-[125vh] sm:h-[155vh] overflow-x-hidden">
      {/* White section */}
      <div
        ref={whiteRef}
        className="absolute top-0 left-0 w-screen h-[65vh] sm:h-[100vh] bg-[#fef9e3] flex items-end justify-center z-20"
      >
        <div className="w-screen text-center px-4">
          <h2
            className="text-[75px] sm:text-[170px] md:text-[280px]  w-full font-bold text-black leading-none"
            style={{
              fontFamily: "'Bowlby One SC', sans-serif",
            }}
          >
            REDA hl
          </h2>
        </div>
      </div>

      {/* Black section */}
      <div
        ref={redRef}
        className=" fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-end z-10"
      >
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            {/* Left Section - Reach Out */}
            <div className="space-y-4">
              <h4 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl font-bold">REACH OUT </h4>
              <p>
                <Link 
                  href="mailto:redahaloubi8@gmail.com" 
                  className="text-white text-lg sm:text-xl md:text-2xl hover:text-gray-300 transition-colors break-all"
                >
                  redahaloubi8@gmail.com
                </Link>
              </p>
              <p>
                <Link 
                  href="tel:+212631354797" 
                  className="text-white text-lg sm:text-xl md:text-2xl hover:text-gray-300 transition-colors"
                >
                  +212 (0)63 1354797
                </Link>
              </p>
            </div>

            {/* Right Section - Other Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 mr-0 md:mr-8">
              <div className="space-y-4 hidden md:block">
              </div>
              <div className="space-y-2">
              <h4 className="text-gray-400 text-xl md:text-2xl font-bold">SOCIAL</h4>
              <ul className="text-white text-lg md:text-xl space-y-2">
                  <Link href={"https://www.instagram.com/reda__hl"}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-gray-300  transition-colors cursor-pointer">
                    <FaInstagram size={20} /> Instagram
                  </Link>
                  <Link href={"https://github.com/rhaloubi"}
                   target="_blank" 
                   rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                    <FaGithub size={20} /> Github
                  </Link>
                  <Link href={"https://linkedin.com/in/reda-haloubi"}
                   target="_blank" 
                   rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                    <FaLinkedin size={20} /> LinkedIn
                  </Link>
                </ul>
              </div>
              <div className="space-y-4">
              <h4 className="text-gray-400 text-xl md:text-2xl font-bold">NAV</h4>
                <ul className="text-white text-lg md:text-xl space-y-2">
                  {/* Navigation links remain the same */}
                  <li>
                    <Link 
                      href="/"
                      className="menu-item relative group cursor-pointer" 
                      onMouseEnter={playTickSound}
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        if (window.location.pathname === '/') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          router.push('/');
                        }
                      }}
                    >
                      Home
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <button 
                      className="menu-item relative group cursor-pointer" 
                      onMouseEnter={playTickSound}
                      onClick={scrollToWork}
                    >
                      Work
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                  <li>
                    <Link 
                      href="/about"
                      className="menu-item relative group cursor-pointer" 
                      onMouseEnter={playTickSound}
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        if (window.location.pathname === '/about') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          router.push('/about');
                        }
                      }}
                    >
                      About
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-[12vh] gap-4">
            <form  className="flex items-center mb-2 border-b-[1px] border-white gap-4 w-full sm:w-auto">
              <input
                type="email"
                className="text-[30px] sm:text-[40px] md:text-[50px] font-[TTTrailers] text-gray-300 bg-transparent outline-none cursor-pointer hover:text-gray-300 transition-colors w-full sm:w-[300px] md:w-[400px] focus:border-white"
                placeholder="Enter Your Email"
              />
              <button 
                type="submit" 
                className="text-white text-2xl sm:text-3xl md:text-4xl hover:text-gray-300 transition-colors cursor-pointer mb-2"
              >
                <FaArrowLeft className="h-[35px] w-[40px] sm:h-[40px] sm:w-[50px] md:h-[45px] md:w-[60px]" />
              </button>
            </form>

            <FaArrowDown 
              className="text-white text-4xl h-[45px] w-[40px] sm:h-[60px] sm:w-[55px] md:h-[75px] md:w-[70px] mb-4 hover:text-gray-300 transition-colors cursor-pointer" 
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      {/* Newsletter section */}
      <div onClick={handleClick} className="fixed top-0 left-0 w-full h-screen bg-green-800 flex flex-col justify-end">
        <h1 className="text-center text-lg sm:text-xl text-white px-4">i need some ideas for this section 😭</h1>
      </div>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </footer>
  );
}
