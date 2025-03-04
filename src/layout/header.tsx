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
      <div className="fixed top-0 left-5 p-1 z-40  text-xl font-bold w-full text-white" style={{ mixBlendMode: "difference" }}>
        STUDIO
      <div className="fixed right-5 p-1 top-0 ">
        <div className="text-[14px] gap-8 flex" style={{ mixBlendMode: "difference" }}>
            <Link href="/works" className="menu-item relative group " onMouseEnter={playTickSound}>
            Works
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="menu-item relative group " onMouseEnter={playTickSound}>
            About
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="menu-item relative group " onMouseEnter={playTickSound}>
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </div>
      </div>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
    </div>
  )
}
