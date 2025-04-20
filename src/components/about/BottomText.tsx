"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface BottomTextProps {
  text: string;
}

export default function BottomText({ text }: BottomTextProps) {
  const bottomTextRef = useRef(null);

  useEffect(() => {
    const bottomTl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    bottomTl.fromTo(bottomTextRef.current,
      { x: '0%' },
      { 
        x: '-50%', 
        duration: 15,
      }
    );

    return () => {
      bottomTl.kill();
    };
  }, []);

  return (
    <div className='flex mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px] bg-[#fef9e3] text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] whitespace-nowrap z-0 -translate-y-1/2 rotate-[-2deg] text-center leading-none w-full overflow-hidden'>
      <div className='border-y border-y-black sm:border-y-2 font-[TTTrailers] my-1'>
        <h3 ref={bottomTextRef} className='text-black select-none pointer-events-none'>
          {text}
        </h3>
      </div>
    </div>
  );
}