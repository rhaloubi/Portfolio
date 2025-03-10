"use client";

import { useRef, useState, useEffect } from "react";
import Header from "../layout/header";
import Hero from "../components/home/hero";
import About from "../components/home/about";


export default function HomePage() {
  const [showHomepage, setShowHomepage] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    setShowHomepage(true);
  }, []);


  return (
    <>
       {/* Header */}
          < Header/>
    <main className="flex min-h-screen flex-col bg-[#0B0B0B] text-white">
      {/* Homepage Content */}
      < Hero/> 
      < About/>
       
        {/* Main Content */}
        <div ref={contentRef} className="relative h-screen">
      
        </div>
    </main>
    <main className=" flex min-h-screen bg-white">

    </main>
  
    </>
  );
}
