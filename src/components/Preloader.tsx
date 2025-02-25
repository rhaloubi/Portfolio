"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let count = 0;
    const counter = { val: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          y: '100%',
          duration: 1,
          ease: 'power4.inOut',
          onComplete
        });
      }
    });

    tl.to(counter, {
      val: 99,
      duration: 3,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          count = Math.round(counter.val);
          counterRef.current.textContent = count.toString().padStart(2, '0');
        }
      }
    })
    .to(progressBarRef.current, {
      width: '100%',
      duration: 3,
      ease: 'power2.inOut',
    }, 0);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
    >
      <div 
        ref={counterRef}
        className="text-white text-8xl font-bold"
        suppressHydrationWarning
      >
        00 
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[calc(100%-40px)] h-1 bg-gray-800">
        <div 
          ref={progressBarRef}
          className="h-full w-0 bg-white"
        />
      </div>
    </div>
  );
};

export default Preloader;