"use client"
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const project: Project = {
    id: "plane",
    title: "Plane",
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="w-full py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-400 text-lg">{project.description}</p>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <h3 className="text-gray-500 uppercase mb-1">ROLE</h3>
                <p>{project.role}</p>
              </div>
              <div>
                <h3 className="text-gray-500 uppercase mb-1">COLLABORATORS</h3>
                {project.collaborators.map((collaborator, index) => (
                  <p key={index}>{collaborator}</p>
                ))}
              </div>
              <div>
                <h3 className="text-gray-500 uppercase mb-1">DURATION</h3>
                <p>{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="w-full px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111] rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm">🌍 EV World Automobiles</span>
                <span className="text-sm">📋 Issues</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-1 bg-blue-500 rounded-md text-sm">+ Add Issue</button>
              </div>
            </div>
            
            <div className="space-y-4">
              {project.tasks.map((task, index) => (
                <div key={task.id} className="flex items-center justify-between p-3 hover:bg-[#222] rounded-lg">
                  <div className="flex items-center gap-4">
                    <span>🔸</span>
                    <span className="text-gray-400">{task.id}</span>
                    <span>{task.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-blue-400">{task.category}</span>
                    <span className="text-sm text-gray-400">{task.status}</span>
                    <span className="text-sm text-gray-400">{task.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}