"use client"
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { StarBorder } from "../components/ui/star-border"
import { Button } from "../components/ui/button";
export default function Header() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true);
    };

    // Add more interaction events
    const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });

    // Try to initialize audio context
    const initAudio = async () => {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioContext = new AudioContext();
        await audioContext.resume();
        setUserInteracted(true);
      } catch (error) {
        console.log("Audio context initialization failed");
      }
    };
    
    initAudio();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  const playTickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        if (error.name !== 'NotAllowedError') {
          console.error("Audio playback failed:", error);
        }
      });
    }
  };

  return (
    <div className="fixed top-0 w-full p-1 md:p-4 z-40 font-[TTTrailers]" style={{ mixBlendMode: "difference" }}>
      <div className="flex justify-between items-center px-5" >
        {/* Left side - Contact */}
        <div className="text-[14px]">
          <Button 
            className="relative inline-flex text-[20px] border-t border-l  border-[#FF70AB] rounded-full h-11 items-center px-6 py-2  bg-[length:200%_100%] text-white  transition-all duration-500 hover:bg-[center_right_10px] hover:shadow-lg hover:shadow-red-500/50"
            style={{ letterSpacing: '+0.02em' }}
          >
            Contact Me
          </Button>
        </div>

        {/* Center - Logo */}
        <Link href={"/"} className="text-[33px]   font-bold text-white absolute left-1/2 transform -translate-x-1/2" >
          Logo
        </Link>

        {/* Right side - Works & About */}
        <div className="flex gap-8 text-[19px] font-thin">
          <Link href="/works" className="menu-item relative group text-white" onMouseEnter={playTickSound}>
            Works
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="menu-item relative group text-white" onMouseEnter={playTickSound}>
            About
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </div>
  );
}
