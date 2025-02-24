import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useColor } from '~/context/ColorContext';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { nextColor } = useColor();

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const gridSize = 20;
    const container = containerRef.current;
    container.innerHTML = '';

    const width = window.innerWidth / gridSize;
    const height = window.innerHeight / gridSize;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const pixel = document.createElement('div');
        pixel.className = 'absolute';
        pixel.style.width = `${width}px`;
        pixel.style.height = `${height}px`;
        pixel.style.left = `${j * width}px`;
        pixel.style.top = `${i * height}px`;
        pixel.style.transform = 'scale(0)';
        pixel.style.backgroundColor = nextColor;
        container.appendChild(pixel);
      }
    }

    const pixels = container.children;
    const tl = gsap.timeline();

    tl.set(pixels, { scale: 0 })
      .set(contentRef.current, { opacity: 1 })
      .to(pixels, {
        scale: 1,
        duration: 0.5,
        stagger: {
          from: "random",
          amount: 0.3
        }
      })
      .to(pixels, {
        scale: 0,
        duration: 0.5,
        stagger: {
          from: "random",
          amount: 0.3
        }
      });

    return () => {
      tl.kill();
    };
  }, [pathname, nextColor]);

  return (
    <>
      <div ref={contentRef} className="relative">
        {children}
      </div>
      <div 
        ref={containerRef}
        className="fixed inset-0 z-50 pointer-events-none"
      />
    </>
  );
};

export default PageTransition;