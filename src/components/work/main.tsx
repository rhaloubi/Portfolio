"use client"
import AnimatedText from './animatedtext';
import React, { useState, useRef } from 'react';
import HeaderText from './header';
import { motion, AnimatePresence } from 'framer-motion';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
    
    if (selectedProject !== index && projectRefs.current[index]) {
      const targetPosition = window.innerHeight * 0.25;
      const elementPosition = projectRefs.current[index].getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="row row-title h-[150vh] z-0 text-white" style={{ justifyContent: 'left' }}>
      <HeaderText text="My Work  *  My Work  *  My Work  *  My Work  " />
      
      <div 
        ref={(el: HTMLDivElement | null) => { projectRefs.current[0] = el }}
        className="col border-y-2 hover:bg-gray-900 cursor-pointer border-white py-10"
        onClick={() => handleProjectClick(0)}
      >
        <h2 className="flex items-center justify-between">
          <AnimatedText text="T-SHIRTS:" />
          <span className="text-[40px]  md:text-[50px] text-gray-500 font-[TTTrailers] mr-4">2024</span>
        </h2>
      </div>
      <AnimatePresence>
        {selectedProject === 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "50vh" }}
            exit={{ opacity: 1, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full  overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-3xl font-[TTTrailers] mb-4">Project Details</h3>
              <p className="text-gray-400 text-lg">
                This is a collection of custom-designed t-shirts featuring unique artwork and patterns.
                Each piece is carefully crafted to reflect modern streetwear aesthetics while maintaining
                comfort and style.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        ref={(el: HTMLDivElement | null) => { projectRefs.current[1] = el }}
        className="col border-y-2 hover:bg-gray-900 cursor-pointer border-white py-10"
        onClick={() => handleProjectClick(1)}
      >
        <h2 className="flex items-center justify-between">
          <AnimatedText text="Project-2" />
          <span className="text-[40px] sm:text-[50px] md:text-[60px] text-gray-500 font-[TTTrailers] mr-4">2024</span>
        </h2>
      </div>
        <AnimatePresence>
          {selectedProject === 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "50vh" }}
              exit={{ opacity: 1, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full  overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-3xl font-[TTTrailers] mb-4">Project Details</h3>
                <p className="text-gray-400 text-lg">
                  Description for Project 2 goes here. Add your specific project details
                  and highlights in this section.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      <div 
        ref={(el: HTMLDivElement | null) => { projectRefs.current[2] = el }}
        className="col border-y-2 hover:bg-gray-900 cursor-pointer border-white py-10"
        onClick={() => handleProjectClick(2)}
      >
        <h2 className="flex items-center justify-between">
          <AnimatedText text="Project-3" />
          <span className="text-[40px] sm:text-[50px] md:text-[60px] text-gray-500 font-[TTTrailers] mr-4">2024</span>
        </h2>
      </div>
        <AnimatePresence>
          {selectedProject === 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "50vh" }}
              exit={{ opacity: 1, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full border-b border-white overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-3xl font-[TTTrailers] mb-4">Project Details</h3>
                <p className="text-gray-400 text-lg">
                  Description for Project 3 goes here. Add your specific project details
                  and highlights in this section.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}