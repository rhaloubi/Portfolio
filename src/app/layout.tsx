"use client";

import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { useState, useEffect } from "react";
import Preloader from "~/components/Preloader";
import { ReactLenis } from "../lib/lenis";

import { Azeret_Mono } from "next/font/google";

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [loading]);

  return (
    <html lang="en" className={`${GeistSans.variable} ${azeretMono.className} ${loading ? "h-screen overflow-hidden" : ""}`}>
      <ReactLenis root>
        <body className={`bg-current ${loading ? "overflow-hidden h-screen pointer-events-none" : ""}`}>
          <div className={`relative`}>
            {children}
          </div>
          {loading && (
            <div className="fixed inset-0 z-50">
              <Preloader onComplete={() => setLoading(false)} />
            </div>
          )}
        </body>
      </ReactLenis>
    </html>
  );
}
