"use client";

import Link from "next/link";
import { useColor } from "~/context/ColorContext";

export default function AboutPage() {
  const { setNextColor } = useColor();

  const handleTransition = () => {
    setNextColor('#1e3a8a'); // blue-900 color
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-900 text-white">
      <h1 className="text-6xl font-bold mb-8">About Page</h1>
      <Link 
        href="/"
        onClick={handleTransition}
        className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
}