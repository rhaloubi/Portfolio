"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useClickSound } from '../hooks/useClickSound';

export default function Header() {
  const router = useRouter();
  const { audioRef, playTickSound } = useClickSound();
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true);
    };

    const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });

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

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      const footerHeight = footer.scrollHeight;
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToWork = async () => {
    if (window.location.pathname === '/') {
      const workSection = document.querySelector('.row-title');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      await router.push('/');
      setTimeout(() => {
        const workSection = document.querySelector('.row-title');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="fixed top-0 w-full p-1 md:p-4 z-40 font-[TTTrailers]" style={{ mixBlendMode: "difference" }}>
      <div className="flex justify-between items-center px-2 sm:px-5">
        {/* Left side - Contact */}
        <div className="hidden sm:block">
          <Button 
            onClick={scrollToFooter}
            className="relative inline-flex text-[16px] sm:text-[18px] md:text-[20px] border-t border-l border-[#FF70AB] rounded-full h-8 sm:h-10 md:h-11 items-center px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-[length:200%_100%] text-white transition-all duration-500 hover:bg-[center_right_10px] hover:shadow-lg hover:shadow-red-500/50"
            style={{ letterSpacing: '+0.02em' }}
          >
            Contact Me
          </Button>
        </div>

        {/* Center - Logo */}
        <Link 
          href="/"
          className="text-[24px] sm:text-[28px] md:text-[33px] font-bold text-white sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              router.push('/');
            }
          }}
        >
          Reda
        </Link>

        {/* Right side - Works & About */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 text-[16px] sm:text-[17px] md:text-[19px] font-thin">
          <button
            onClick={scrollToWork}
            className="menu-item relative group text-white cursor-pointer"
            onMouseEnter={playTickSound}
          >
            Works
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
          <Link 
            href="/about"
            className="menu-item relative group text-white" 
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
        </div>
      </div>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </div>
  );
}
