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
          <div className="absolute bottom-0 left-0 p-8 w-full grid grid-cols-4 gap-8 text-sm">
            <div>
              <h3>Dior Homme</h3>
              <p className="opacity-50">Jonathan Alric</p>
              <p className="opacity-50">Commercials</p>
            </div>
            <div>
              <h3>Le Louvre x Joker</h3>
              <p className="opacity-50">Manu Cossu</p>
              <p className="opacity-50">Commercials</p>
            </div>
            <div>
              <h3>We Are From LA</h3>
              <p className="opacity-50">Clément Durou</p>
              <p className="opacity-50">Commercials</p>
            </div>
            <div>
              <h3>Dom Pérignon</h3>
              <p className="opacity-50">The Labour Of Creation</p>
              <p className="opacity-50">Commercials</p>
            </div>
          </div>
        </div>
    </main>
    <div className=" flex min-h-screen bg-white">

    </div>
    </>
  );
}
