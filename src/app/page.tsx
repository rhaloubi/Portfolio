"use client";

import Link from "next/link";
import { useColor } from "~/context/ColorContext";

export default function HomePage() {
  const { setNextColor } = useColor();

  const handleTransition = () => {
    setNextColor('#7f1d1d'); // red-900 color
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-900 text-white">
      <h1 className="text-6xl font-bold mb-8">Home Page</h1>
      <Link 
        href="/about"
        onClick={handleTransition}
        className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
      >
        Go to About
      </Link>
    </main>
  );
}
