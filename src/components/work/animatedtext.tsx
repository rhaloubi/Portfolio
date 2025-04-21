'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = spanRef.current;
    if (!element) return;

    // Split the text into individual characters, preserving spaces
    const splitText = text.split("").map((char) => {
      if (char === " ") {
        return `<span style="display:inline-block; width: 0.2em;">&nbsp;</span>`;
      }
      return `<span style="display:inline-block;">${char}</span>`;
    }).join("");

    // Replace the content with the split text
    element.innerHTML = splitText;

    // Get all the individual character spans
    const chars = element.querySelectorAll("span");

    // Create the staggered animation
    const animation = gsap.from(chars, {
      y: '100%',
      opacity: 0,
      duration: 1.7,
      ease: 'power3.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
      },
    });

    // Cleanup function
    return () => {
      animation.kill();
    };
  }, [text]);

  return (
    <span
      ref={spanRef}
      className="text-white font-[TTTrailers] text-[47px] px-3 md:text-[70px] inline-block"
    >
      {text}
    </span>
  );
};

export default AnimatedText;
