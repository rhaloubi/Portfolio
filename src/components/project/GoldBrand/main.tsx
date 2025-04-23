"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const project: Project = {
    id: "plane",
    title: "GoldBrand",
    description: "Plane is a software company combining task management, wikis, and editor features into one comprehensive productivity platform. I consulted and advised the team around core product surfaces.",
    role: "Product Designer",
    collaborators: ["Plane team", "Bryce Li"],
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
    const scrollTrigger = ScrollTrigger.create({
      trigger: SelectRef.current,
      start: 'top 10%',
      end: 'bottom 40%',
      //markers: true,
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  })

  return (
    <div className="min-h-screen font-[SFCompactRounded] bg-black px-3 pt-20 text-white">

    <div className='w-full h-[82vh]'>
        <img className='w-full h-full object-cover'
            src="/img/Goldbrand/2.jpg"  
            alt="" />
    </div>
      {/* Header Section */}
      <div className="w-full py-4 ">
          <div
          ref={SelectRef} 
          className="flex flex-col md:flex-row justify-between items-start gap-4">
            {/* Left Section - 1/3 width */}
            <div
            ref={containerRef} 
            className="w-full items-start md:w-1/3">
              <h1 className="text-4xl md:text-6xl font-[TTTrailers]  ">{project.title}</h1>
                <h3 className="text-gray-500 uppercase mb-1">E-Commerce</h3>
            </div>
            
            {/* Right Section - 2/3 width */}
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <p className=" text-lg">{project.description}</p>
              <div className="flex gap-12">
                <div>
                  <h3 className="text-gray-500 uppercase mb-1">COLLABORATORS</h3>
                  {project.collaborators.map((collaborator, index) => (
                    <p key={index}>{collaborator}</p>
                  ))}
                </div>
                <div>
                  <h3 className="text-gray-500 uppercase mb-1">ROLE</h3>
                  {project.collaborators.map((ROLE, index) => (
                    <p key={index}>{ROLE}</p>
                  ))}
                </div>
                <div>
                  <h3 className="text-gray-500 uppercase mb-1">DURATION</h3>
                  <p>{project.duration}</p>
                </div>
              </div>
              <div className='w-full h-[82vh]'>
                  <img className='w-full border-y border-l border-white h-full object-cover'
                      src="/img/Goldbrand/5.jpg"  
                      alt="" />
              </div>
              <div className='w-full border-y border-l border-white h-[82vh]'>
                  <img className='w-full h-full object-cover'
                      src="/img/Goldbrand/6.jpg"  
                      alt="" />
              </div>
              <p className=" text-lg">{project.description}</p>

            </div>
          </div>
        </div>
      </div>

       );
}