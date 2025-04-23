"use client"
import AnimatedText from './animatedtext';
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useState, useRef } from 'react';
import HeaderText from './header';
import { motion, AnimatePresence } from 'framer-motion';
import GoldBrand from './sections/goldBrand';
import SectionERP from './sections/ERP';
import SectionBank from './sections/Bank';
import SectionPort from './sections/Port';

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
    <div className="row row-title h-[180vh] z-0 text-white" style={{ justifyContent: 'left' }}>
      <HeaderText text="My Work  *  My Work  *  My Work  *  My Work  " />
      
      <div 
        ref={(el: HTMLDivElement | null) => { projectRefs.current[0] = el }}
        className="col border-y-2 hover:text-[#399918] hover:bg-gray-950 cursor-pointer border-white py-10"
        onClick={() => handleProjectClick(0)}
      >
        <h2 className="flex items-center justify-between">
          <AnimatedText text="GOLD BRAND :" />
          <div className="flex items-center gap-2">
            <span className="text-[20px] md:text-[30px] font-[AtomicMarker] mr-1">2024</span>
            <IoIosArrowDropdown className="text-2xl md:text-3xl text-gray-100 mr-4" />
          </div>
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
            <GoldBrand />
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        ref={(el: HTMLDivElement | null) => { projectRefs.current[1] = el }}
        className="col border-y-2 hover:text-[#399918] cursor-pointer border-white py-10"
        onClick={() => handleProjectClick(1)}
      >
        <h2 className="flex items-center justify-between">
          <AnimatedText text="BANK-SYSTEM : " />
          <div className="flex items-center gap-2">
            <span className="text-[20px] md:text-[30px] font-[AtomicMarker] mr-1">2024</span>
            <IoIosArrowDropdown className="text-2xl md:text-3xl text-gray-100 mr-4" />
          </div>
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
                          <SectionBank />

            </motion.div>
          )}
        </AnimatePresence>

      <div 
        ref={(el: HTMLDivElement | null) => { projectRefs.current[2] = el }}
        className="col border-y-2 hover:text-[#399918] cursor-pointer border-white py-10"
        onClick={() => handleProjectClick(2)}
      >
        <h2 className="flex items-center justify-between">
          <AnimatedText text="Omaadness : " />
          <div className="flex items-center gap-2">
          <span className="text-[20px] md:text-[30px] font-[AtomicMarker] mr-1">2024</span>
          <IoIosArrowDropdown className="text-2xl md:text-3xl text-gray-100 mr-4" />
          </div>
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
              <SectionPort />
            </motion.div>
          )}
      </AnimatePresence>

      <div 
        ref={(el: HTMLDivElement | null) => { projectRefs.current[3] = el }}
        className="col border-y-2 hover:text-[#399918] cursor-pointer border-white py-10"
        onClick={() => handleProjectClick(3)}
      >
        <h2 className="flex items-center justify-between">
          <AnimatedText text="MORATEL-ERP :" />
          <div className="flex items-center gap-2">
          <span className="text-[20px] md:text-[30px] text-red-600 font-[AtomicMarker] mr-1">2025</span>
          <IoIosArrowDropdown className="text-2xl md:text-3xl text-gray-100 mr-4" />
          </div>
        </h2>
      </div>
      <AnimatePresence>
        {selectedProject === 3 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "50vh" }}
            exit={{ opacity: 1, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full border-b border-white overflow-hidden"
          >
            <SectionERP />
          </motion.div>
        )}
      </AnimatePresence>
        
    </div>
  );
}