"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeaserTextProps {
  text: string;
}

export default function HeaserText({ text }: HeaserTextProps) {
  const bottomTextRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if screen width is greater than mobile breakpoint (768px)
    const isMobile = window.innerWidth <= 768;

    // Infinite scroll animation
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

    // Only create scroll trigger for non-mobile screens
    let scrollTrigger: ScrollTrigger | null = null;
    
    if (!isMobile) {
      scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: '8% top',
        end: '300% top',
        //markers: true,
        pin: containerRef.current,
        pinSpacing: false,
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0 && self.progress < 1) {
            gsap.set(containerRef.current, {
              rotation: 0,
              position: 'fixed',
              top: '12%',
            });
          }
        },
      });
    }

    // Handle window resize
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      
      if (newIsMobile && scrollTrigger) {
        scrollTrigger.kill();
        scrollTrigger = null;
        // Reset container styles
        if (containerRef.current) {
          gsap.set(containerRef.current, {
            rotation: -2,
            position: 'relative',
            top: 'auto',
          });
        }
      } else if (!newIsMobile && !scrollTrigger) {
        // Reinitialize scroll trigger for desktop
        scrollTrigger = ScrollTrigger.create({
          // ... same configuration as above
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      bottomTl.kill();
      if (scrollTrigger) scrollTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className='flex bg-[#fef9e3] text-[100px] md:text-[200px] whitespace-nowrap z-20 -translate-y-1/2 rotate-[-2deg] text-center leading-none w-full overflow-hidden'
      style={{ willChange: 'transform' }}
    >
      <div className='border-y border-y-black sm:border-y-2 font-[TTTrailers] my-1 w-full'>
        <h3 ref={bottomTextRef} className='text-black select-none pointer-events-none'>
          {text}
        </h3>
      </div>
    </div>
  );
}