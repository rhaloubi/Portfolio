"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const PageTransition = () => {
  const pathname = usePathname();
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layers = comp.current?.children;
    if (!layers) return;

    const layersArray = Array.from(layers);
    const tl = gsap.timeline();

    // Initial state
    gsap.set(layersArray, { yPercent: 100 });

    // Animate in
    if (layersArray[0] && layersArray[1] && layersArray[2]) {
      tl.to(layersArray[0], { yPercent: 0, duration: 0.5, ease: "power4.inOut" })
        .to(layersArray[1], { yPercent: 0, duration: 0.5, ease: "power4.inOut" }, "-=0.3")
        .to(layersArray[2], { yPercent: 0, duration: 0.5, ease: "power4.inOut" }, "-=0.3")
        // Animate out
        .to(layersArray[2], { yPercent: -100, duration: 0.5, ease: "power4.inOut" }, "+=0.2")
        .to(layersArray[1], { yPercent: -100, duration: 0.5, ease: "power4.inOut" }, "-=0.3")
        .to(layersArray[0], { yPercent: -100, duration: 0.5, ease: "power4.inOut" }, "-=0.3");
    }

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div ref={comp} className="pointer-events-none fixed inset-0 z-50">
      <div className="fixed inset-0 bg-[#cf5487]" />
      <div className="fixed inset-0 bg-[#399918]" />
      <div className="fixed inset-0 bg-black" />
    </div>
  );
};

export default PageTransition;