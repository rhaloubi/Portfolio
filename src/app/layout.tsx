"use client";

import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { useState } from "react";
import Preloader from "~/components/Preloader";
import {ReactLenis} from "../lib/lenis"

import { Azeret_Mono } from "next/font/google";

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en" className={`${GeistSans.variable ,azeretMono.className}`}>
      <ReactLenis root>
      <body className="bg-current" >
          {loading && <Preloader onComplete={() => setLoading(false)} />}
            {children}
      </body>
      </ReactLenis>
    </html>
  );
}