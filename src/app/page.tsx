"use client";

import { useRef, useState, useEffect } from "react";

import Hero from "../components/home/hero";
import About from "../components/home/about";
import Widget from '../components/spotify/widgets';
import Footer from "../layout/footer";


export default function HomePage() {
  const [showHomepage, setShowHomepage] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setShowHomepage(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <main className="relative z-10 flex flex-col bg-[#0B0B0B] text-white">
        <Hero/> 
        <About/>
        <Widget/>
        <div ref={contentRef} className="relative h-screen">
        </div>
      </main>
     
      <div className="relative z-0">
              <Footer/>
            </div>
    </div>
  );
}
