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

    const tl = gsap.timeline();

    // Initial state
    gsap.set(Array.from(layers), { yPercent: 100 });

    // Animate in
    tl.to(layers[0], { yPercent: 0, duration: 0.5, ease: "power4.inOut" })
      .to(layers[1], { yPercent: 0, duration: 0.5, ease: "power4.inOut" }, "-=0.3")
      .to(layers[2], { yPercent: 0, duration: 0.5, ease: "power4.inOut" }, "-=0.3")
      // Animate out
      .to(layers[2], { yPercent: -100, duration: 0.5, ease: "power4.inOut" }, "+=0.2")
      .to(layers[1], { yPercent: -100, duration: 0.5, ease: "power4.inOut" }, "-=0.3")
      .to(layers[0], { yPercent: -100, duration: 0.5, ease: "power4.inOut" }, "-=0.3");

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