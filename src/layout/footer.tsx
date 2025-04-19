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
gsap.registerPlugin(TextPlugin);

export default function Footer() {
  const router = useRouter();
  const whiteRef = useRef(null);
  const redRef = useRef(null);
  const isOpenRef = useRef(0); // Store isOpen as a ref for immediate updates
  const [isOpen, setIsOpen] = useState(0);
  const { audioRef, playTickSound } = useClickSound();

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
         //markers: true,
        end: "65% center",
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

  // Add with other refs
  const newsletterRef = useRef<HTMLInputElement>(null);
  
  // Add with other functions
  const handleNewsletterFocus = () => {
    gsap.to(newsletterRef.current, {
      duration: 1,
      text: "Enter your email",
      ease: "none",
    });
  };

  return (
    <footer className="relative font-[FormulaCondensed] bg-[#fef9e3] h-[155vh] overflow-x-hidden">
      {/* White section */}
      <div
        ref={whiteRef}
        className="absolute top-0 left-0 w-screen h-[100vh] bg-[#fef9e3] flex items-end justify-center z-20"
      >
        <div className="w-screen text-center px-2">
          <h2
            className="text-[280px] w-full font-bold text-black leading-none"
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
        className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-end z-10"
      >
        <div className="  px-8">
          <div className="flex justify-between">
            {/* Left Section - Reach Out */}
            <div className="space-y-4">
              <h4 className="text-gray-400 text-4xl font-bold">REACH OUT </h4>
              <p>
              <Link 
                href="mailto:redahaloubi8@gmail.com" 
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                redahaloubi8@gmail.com
              </Link>
              </p>
             <p>
              <Link 
                href="tel:+212631354797" 
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                +212 (0)63 1354797
              </Link>
              </p>
            </div>

            {/* Right Section - Other Links */}
            <div className="grid grid-cols-3 gap-20 mr-8">
              <div className="space-y-4">
                
              </div>
              <div className="space-y-2">
                <h4 className="text-gray-400 text-2xl font-bold ">SOCIAL</h4>
                <ul className="text-white text-xl space-y-2">
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
                <h4 className="text-gray-400 text-2xl font-bold">NAV</h4>
                <ul className="text-white text-xl space-y-2">
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
                    <Link 
                      href="/works"
                      className="menu-item relative group cursor-pointer" 
                      onMouseEnter={playTickSound}
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        if (window.location.pathname === '/works') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          router.push('/works');
                        }
                      }}
                    >
                      Work
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                    </Link>
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
          <div className="flex justify-between items-center mt-[12vh]">
          <form method='post' className="flex items-center mb-2 border-b-[1px] border-white gap-4">
            <input
              type="email"
              className="text-[50px]  font-[TTTrailers] text-gray-300 bg-transparent outline-none cursor-pointer hover:text-gray-300 transition-colors w-[400px]  focus:border-white"
              placeholder="Enter Your Email"
            />
            <button 
              type="submit" 
              className="text-white text-4xl  hover:text-gray-300 transition-colors cursor-pointer mb-2"
            >
              <FaArrowLeft className="h-[45px] w-[60px]" />
            </button>
          </form>

            <FaArrowDown 
              className="text-white text-4xl h-[75px] w-[70px] mb-4 hover:text-gray-300 transition-colors cursor-pointer" 
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div onClick={handleClick} className="fixed top-0 left-0 w-full h-screen bg-green-800 flex flex-col justify-end">
        <h1 className=" text-center text-xl text-white"> i need some ideas for this section 😭</h1>
      </div>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </footer>
  );
}
