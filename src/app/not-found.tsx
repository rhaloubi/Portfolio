import { type Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import Footer from "../layout/footer";

export const metadata: Metadata = {
  title: '404 - Page Not Found | Reda Haloubi Portfolio',
  description: 'The page you are looking for does not exist on Reda Haloubi\'s portfolio website.',
  robots: { index: false },
};


export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <main className="relative z-20 flex flex-col bg-[#0B0B0B] text-white">
    <div className="min-h-screen bg-[#0B0B0B] flex flex-col items-center justify-center px-4">
      <div className="relative w-full max-w-2xl h-[400px] md:h-[500px]">
        <Image
          src="/img/404.JPG"
          alt="404 Not Found"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      <div className="text-center mt-8">
        <h1 className="text-4xl md:text-6xl font-[TTTrailers] text-white mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-flex bg-gray-950 justify-between items-center px-6 py-3 text-gray-400 hover:bg-gray-800/80 hover:text-white rounded-md transition-all duration-300"
        >
          <span>Back to Home</span>
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
        </Link>
      </div>
    </div>
    </main>
     
     <div className="relative z-0">
             <Footer/>
           </div>
   </div>
  );
}