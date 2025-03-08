"use client";

import { useRef, useState, useEffect } from "react";
import Header from "../layout/header";

export default function HomePage() {
  const [showHomepage, setShowHomepage] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    setShowHomepage(true);
  }, []);


  return (
    <>
          

    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Homepage Content */}
        {/* Header */}
        < Header/>
        {/* Main Content */}
        <div ref={contentRef} className="relative h-screen">
      
        </div>
    </main>
    <div className=" flex min-h-screen bg-white">

    </div>
  
    </>
  );
}
