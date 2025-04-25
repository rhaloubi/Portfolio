"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  collaborators: string[];
  duration: string;
}

export default function ProjectMain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const SelectRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    image1: false,
    image2: false,
    image3: false
  });

  const project: Project = {
    id: "plane",
    title: "MORATEL",
    description: "MORATEL is a smart CRM solution designed to empower businesses with automated workforce and project management. It helps streamline operations by tracking employee activity, assigning tasks, monitoring performance, and optimizing resources — all within a secure, scalable environment.",
    role: "Full Stack DEV",
    collaborators: ["ReactJS", "NodeJS"],
    duration: "2 months",
    
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
          src="/img/ERP/1.jpg"
          alt=""
          onLoad={() => handleImageLoad('image1')}
        />
      </div>

      <div className="w-full py-4 md:py-10">
        <div ref={SelectRef} className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div ref={containerRef} className={`w-full md:w-1/3 ${isMobile ? 'static' : ''}`}>
            <h1 className="text-3xl md:text-6xl font-[TTTrailers]">{project.title}</h1>
            <h3 className="text-gray-500 uppercase mb-1">ERP Website</h3>
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
                <Link href={"https://frontend-nu-weld.vercel.app/"} 
                  target="_blank" 
                  className="w-full flex bg-gray-950 justify-between items-center px-3 py-4 text-gray-400 hover:bg-gray-800/80 hover:text-white rounded-md transition-all duration-300"
                >
                  <span>Website</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">{'>'}</span>
                </Link>
              </div>
              
              <div className="w-full md:w-1/2">
                <Link href={"https://github.com/orgs/PRJDevOps/repositories"} 
                  target="_blank" 
                  className="w-full flex justify-between bg-gray-950 items-center px-3 py-4 text-gray-400 hover:bg-gray-800/80 hover:text-white rounded-md transition-all duration-300"
                >
                  <span>Code Source</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">{'>'}</span>
                </Link>
              </div>
            </div>

            {[2, 3].map((imageNum, index) => (
              <div key={imageNum} className='w-full h-[50vh] md:h-[82vh] relative'>
                {!imagesLoaded[`image${imageNum}` as keyof typeof imagesLoaded] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
                <img 
                  className='w-full border-y border-l border-white h-full object-cover'
                  src={`/img/ERP/${imageNum}.jpg`}
                  alt=""
                  onLoad={() => handleImageLoad(`image${imageNum}` as keyof typeof imagesLoaded)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}