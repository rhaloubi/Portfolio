// main.tsx
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
  const [loading, setLoading] = useState({
    image1: true,
    image2: true,
    image3: true,
    image4: true
  });

  const project: Project = {
    id: "shri",
    title: "SHRI",
    description: "SHRI is a microservices-based marketplace platform. It includes a Next.js frontend, a dedicated user-auth service using BetterAuth, three Go microservices (product-catalog, store-management, order-management), an API Gateway (CORS + rate-limit + JWT validation), and Neon PostgreSQL databases. The system is deployed on Kubernetes and uses GitHub Actions for CI/CD (Docker Hub + SonarCloud).",
    role: "Full Stack & DevOps",
    collaborators: ["Next.js", "Go", "BetterAuth", "PostgreSQL (Neon)", "Kubernetes", "GitHub Actions"],
    duration: "4 months",
    tasks: [
      {
        id: "SH-001",
        title: "Design microservices architecture & API Gateway",
        category: "Architecture",
        date: "Mar 14, 2024",
        status: "Completed"
      },
      {
        id: "SH-002",
        title: "Implement JWT-based authorization and BetterAuth flows",
        category: "Security",
        date: "Apr 02, 2024",
        status: "Completed"
      },
      {
        id: "SH-003",
        title: "Kubernetes deployments + LoadBalancer topology (4 nodes, pods distribution)",
        category: "DevOps",
        date: "May 09, 2024",
        status: "Completed"
      }
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

  const handleImageLoad = (imageKey: keyof typeof loading) => {
    setLoading(prev => ({
      ...prev,
      [imageKey]: false
    }));
  };

  return (
    <div className="min-h-screen font-[SFCompactRounded] bg-black px-3 pt-20 text-white">
      {/* Main / Hero image */}
      <div className='w-full h-[50vh] md:h-[82vh] relative'>
        {loading.image1 && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        <div className="relative w-full h-full">
          <Image 
            src="/img/SHRI/1.png"
            alt="SHRI Preview"
            fill
            className="object-cover"
            priority
            onLoadingComplete={() => handleImageLoad('image1')}
          />
        </div>
      </div>

      <div className="w-full py-4 md:py-10">
        <div ref={SelectRef} className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div ref={containerRef} className={`w-full md:w-1/3 ${isMobile ? 'static' : ''}`}>
            <h1 className="text-3xl md:text-6xl font-[TTTrailers]">{project.title}</h1>
            <h3 className="text-gray-500 uppercase mb-1">Microservices Marketplace</h3>
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
                <h3 className="text-gray-500 uppercase mb-1">TECH</h3>
                  <p >{project.collaborators[0]}</p>
                  <p >{project.collaborators[1]}</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase mb-1">TECH</h3>
                  <p >{project.collaborators[2]}</p>
                  <p >{project.collaborators[3]}</p>
                  <p >{project.collaborators[4]}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-1/2">
                <Link href={"https://github.com/rhaloubi/shri"} 
                  target="_blank" 
                  className="w-full flex bg-gray-950 justify-between items-center px-3 py-4 text-gray-400 hover:bg-gray-800/80 hover:text-white rounded-md transition-all duration-300"
                >
                  <span>Repository / Docs</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">{'>'}</span>
                </Link>
              </div>
              
              <div className="w-full md:w-1/2">
                <Link href={"https://github.com/rhaloubi/shri"} 
                  target="_blank" 
                  className="w-full flex justify-between bg-gray-950 items-center px-3 py-4 text-gray-400 hover:bg-gray-800/80 hover:text-white rounded-md transition-all duration-300"
                >
                  <span>Code Source</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">{'>'}</span>
                </Link>
              </div>
            </div>

            {/* Additional preview images */}
            {[
              { src: "/img/SHRI/2.png", key: "image2" },
              { src: "/img/SHRI/3.png", key: "image3" },
              { src: "/img/SHRI/4.png", key: "image4" }
            ].map((img, index) => (
              <div key={index} className='w-full h-[50vh] md:h-[82vh] relative'>
                {loading[img.key as keyof typeof loading] && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
                <div className="relative w-full h-full">
                  <Image 
                    src={img.src}
                    alt={`SHRI Preview ${index + 2}`}
                    fill
                    className="object-cover"
                    onLoadingComplete={() => handleImageLoad(img.key as keyof typeof loading)}
                  />
                </div>
              </div>
            ))}

            <h1 className="text-2xl md:text-6xl font-[TTTrailers]">Admin & Infra</h1>
            <p className="text-sm md:text-md text-gray-300">Kubernetes deployments, API Gateway rules (CORS & rate limits), and CI/CD integration (Docker Hub + SonarCloud) with secure secrets management for JWT and database credentials.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
