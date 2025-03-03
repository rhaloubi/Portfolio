"use client"
import Link from "next/link";
import { useRef } from "react";

export default function Header() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
    }
  };

  return (
    <div className="fixed top-0 w-full p-4 z-40">
      <div className="fixed right-5 justify-between items-center">
        <div className="flex text-[14px] gap-8">
          <Link href="/works" className="menu-item relative group" onMouseEnter={playTickSound}>
            Works
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="menu-item relative group" onMouseEnter={playTickSound}>
            About
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="menu-item relative group" onMouseEnter={playTickSound}>
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
      <audio ref={audioRef} src="/tick.mp3" preload="auto" />
    </div>
  )
}
