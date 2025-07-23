"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageTransition from "~/components/PageTransition";
import Preloader from "~/components/Preloader";
import { ReactLenis } from "../lib/lenis";
import Header from "../layout/header";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Use CSS class for overflow instead of direct style manipulation
    if (loading) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => {
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [loading]);

  return (
    <ReactLenis root>
      <div className={`bg-current ${loading ? 'pointer-events-none' : ''}`}>
        <div className="relative">
          <Header />
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
      </div>
    </ReactLenis>
  );
}