"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageTransition from "~/components/PageTransition";
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import Preloader from "~/components/Preloader";
import { ReactLenis } from "../lib/lenis";
import Header from "../layout/header";
import { Azeret_Mono } from "next/font/google";

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

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
      <head>
        <link rel="icon" href="/img/shape.svg" type="image/svg+xml" />
      </head>
      <ReactLenis root>
        <body className={`bg-current ${loading ? "overflow-hidden h-screen pointer-events-none" : ""}`}>
          <div className={`relative`}>
            <Header/>
            <div key={pathname} className="relative">
              {children}
              <PageTransition />
            </div>
           
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
