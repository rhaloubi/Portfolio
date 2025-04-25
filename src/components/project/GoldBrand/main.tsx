"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  collaborators: string[];
  duration: string;
  tasks: {
    id: string;
    title: string;
    category: string;
    date: string;
    status: string;
  }[];
}

export default function ProjectMain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const SelectRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false
  });

  const project: Project = {
    id: "plane",
    title: "GoldBrand",
    description: "Gold Brand is a Tangier-based luxury boutique specializing in high-end men’s fashion, featuring brands like Nike, MyBrand, and Adidas. I developed their custom e-commerce platform to elevate their digital presence and provide a seamless shopping experience for trend-conscious buyers.",
    role: "Full Stack DEV",
    collaborators: ["React", "Laravel"],
    duration: "3 months",
    tasks: [
      {
        id: "ECC-95",
        title: "Optimize Battery Efficiency",
        category: "Engineering",
        date: "Dec 22, 2023",
        status: "Cycle 31"
      },
      {
        id: "ECC-94",
        title: "Develop Advanced Battery Management System",
        category: "Design",
        date: "Dec 22, 2023",
        status: "Cycle 31"
      }
      // Add more tasks as needed
    ]
  };



  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: SelectRef.current,
        start: 'top 9%',
        end: 'bottom 40%',
        pin: containerRef.current,
        pinSpacing: false,
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0 && self.progress < 1) {
            gsap.set(containerRef.current, {
              rotation: 0,
              position: 'fixed',
              top: '10%',
            });
          }
        },
        onLeave: () => {
          gsap.to(containerRef.current, {
            position: 'absolute',
            top: 0,
            duration: 0
          });
        }
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, [isMobile]);

  const handleImageLoad = (imageKey: keyof typeof imagesLoaded) => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageKey]: true
    }));
  };

  return (
    <div className="min-h-screen font-[SFCompactRounded] bg-black px-3 pt-20 text-white">
      <div className='w-full h-[50vh] md:h-[82vh] relative'>
        {!imagesLoaded.image1 && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        <img 
          className='w-full h-full object-cover'
          src="/img/Goldbrand/2.jpg"
          alt="Gold Brand Preview"
          onLoad={() => handleImageLoad('image1')}
        />
      </div>

      <div className="w-full py-4 md:py-10">
        <div ref={SelectRef} className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div ref={containerRef} className={`w-full md:w-1/3 ${isMobile ? 'static' : ''}`}>
            <h1 className="text-3xl md:text-6xl font-[TTTrailers]">{project.title}</h1>
            <h3 className="text-gray-500 uppercase mb-1">E-Commerce</h3>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <p className="text-sm md:text-md">{project.description}</p>
            
            <div className="flex flex-wrap gap-6 md:gap-12 border-b pb-2 border-gray-600">
              <div>
                <h3 className="text-gray-500 uppercase mb-1">ROLE</h3>
                {project.role}
              </div>
              <div>
                <h3 className="text-gray-500 uppercase mb-1">DURATION</h3>
                <p>{project.duration}</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase mb-1">TOOLS</h3>
                {project.collaborators.map((collaborator, index) => (
                  <p key={index}>{collaborator}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-1/2">
                <Link href={"https://boga.clarodigi.com/"} 
                  target="_blank" 
                  className="w-full flex bg-gray-950 justify-between items-center px-3 py-4 text-gray-400 hover:bg-gray-800/80 hover:text-white rounded-md transition-all duration-300"
                >
                  <span>Website</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">></span>
                </Link>
              </div>
              
              <div className="w-full md:w-1/2">
                <Link href={"https://github.com/rhaloubi/GoldBrand"} 
                  target="_blank" 
                  className="w-full flex justify-between bg-gray-950 items-center px-3 py-4 text-gray-400 hover:bg-gray-800/80 hover:text-white rounded-md transition-all duration-300"
                >
                  <span>Code Source</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">></span>
                </Link>
              </div>
            </div>

            {[
              { src: "/img/Goldbrand/5.jpg", key: "image2" },
              { src: "/img/Goldbrand/3.jpg", key: "image3" },
              { src: "/img/Goldbrand/7.jpg", key: "image4" }
            ].map((img, index) => (
              <div key={index} className='w-full h-[50vh] md:h-[82vh] relative'>
                {!imagesLoaded[img.key as keyof typeof imagesLoaded] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
                <img 
                  className='w-full border-y border-l border-white h-full object-cover'
                  src={img.src}
                  alt={`Gold Brand Preview ${index + 2}`}
                  onLoad={() => handleImageLoad(img.key as keyof typeof imagesLoaded)}
                />
              </div>
            ))}

            <h1 className="text-2xl md:text-6xl font-[TTTrailers]">Admin Control</h1>
            <p className="text-sm md:text-md text-gray-300">{project.description}</p>

            <div className='w-full h-[50vh] md:h-[82vh] relative'>
              {!imagesLoaded.image5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              <img 
                className='w-full border-y border-l border-white h-full object-cover'
                src="/img/Goldbrand/6.jpg"
                alt="Admin Dashboard Preview"
                onLoad={() => handleImageLoad('image5')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}