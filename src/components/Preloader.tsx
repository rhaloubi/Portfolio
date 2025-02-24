import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let counter = 0;
    const timeline = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    timeline
      .to(progressRef.current, {
        scaleX: 1,
        duration: 3,
        ease: "power2.inOut"
      })
      .to(counterRef.current, {
        duration: 3,
        innerText: 99,
        snap: { innerText: 1 },
        ease: "power2.inOut"
      }, 0);

  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div ref={counterRef} className="text-8xl font-bold text-white mb-8">0</div>
        <div className="w-64 h-1 bg-gray-800 relative">
          <div 
            ref={progressRef} 
            className="absolute top-0 left-0 h-full bg-white origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;