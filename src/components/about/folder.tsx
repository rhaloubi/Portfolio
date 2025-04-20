"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsFiletypePdf, BsDownload, BsX } from "react-icons/bs";

interface FolderProps {
  onClose: () => void;
}

export default function Folder({ onClose }: FolderProps) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePdfClick = (pdfName: string) => {
    window.open(`/img/${pdfName}`, '_blank');
  };

    function handleDownload(selectedPdf: string): void {
        throw new Error('Function not implemented.');
    }

  // Remove handleDownload as it's no longer needed

  return (
    <motion.div
      drag={!isMobile}
      dragMomentum={false}
      dragConstraints={!isMobile ? {
        left: -507,
        right: -310,
        top: -295,
        bottom: -200
      } : undefined}
      dragElastic={0.7}
      style={{ 
        x: isMobile ? 0 : "-50%",
        y: isMobile ? 0 : "-50%",
        position: 'absolute',
        left: isMobile ? 0 : '50%',
        top: isMobile ? 0 : '50%',
        width: isMobile ? '100%' : undefined,
        height: isMobile ? '100vh' : undefined,
      }}
      className={`${
        !isMobile ? 'w-[95%] sm:w-[90%] md:w-[80%] h-[400px] sm:h-[450px] md:h-[500px]' : ''
      } bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700`}
    >
      {/* Header */}
      <div 
        className="bg-[#2d2d2d] px-2 sm:px-4 py-1 sm:py-2 flex items-center cursor-move"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex space-x-1 sm:space-x-2">
          <div 
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 cursor-pointer relative group"
            onClick={onClose}
          >
            <span className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-[14px] text-black opacity-0 group-hover:opacity-100 font-bold leading-none">
              ×
            </span>
          </div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 cursor-default"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 cursor-default"></div>
        </div>
        
        <div className="ml-4 sm:ml-6 flex items-center space-x-2 sm:space-x-4">
          <button className="text-gray-400 hover:text-white text-sm sm:text-base" onClick={onClose}>←</button>
          <button className="text-gray-600 text-sm sm:text-base">→</button>
        </div>

        <div className="flex-1 text-center text-xs sm:text-sm text-gray-400">
          redahaloubi - CV
        </div>
      </div>

      {/* Main Content */}
      <div className="py-4 sm:py-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-1 px-2 sm:px-0">
          {/* PDF items with responsive sizes */}
          <div 
            className="flex flex-col items-center gap-1 sm:gap-2 group cursor-pointer"
            onClick={() => handlePdfClick('ENG_Resume.pdf')}
          >
            <div className="flex items-center justify-center group-hover:bg-gray-700/30 rounded-lg transition-colors duration-200">
              <BsFiletypePdf className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </div>
            <span className="text-[10px] sm:text-xs text-white group-hover:text-blue-400 text-center">ENG_Resume.pdf</span>
          </div>

          <div 
            className="flex flex-col items-center gap-1 sm:gap-2 group cursor-pointer"
            onClick={() => handlePdfClick('ESP_Resume.pdf')}
          >
            <div className="flex items-center justify-center group-hover:bg-gray-700/30 rounded-lg transition-colors duration-200">
              <BsFiletypePdf className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </div>
            <span className="text-[10px] sm:text-xs text-white group-hover:text-blue-400 text-center">ESP_Resume.pdf</span>
          </div>
          <div 
            className="flex flex-col items-center gap-1 sm:gap-2 group cursor-pointer"
            onClick={() => handlePdfClick('FR_Resume.pdf')}
          >
            <div className="flex items-center justify-center group-hover:bg-gray-700/30 rounded-lg transition-colors duration-200">
              <BsFiletypePdf className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </div>
            <span className="text-[10px] sm:text-xs text-white group-hover:text-blue-400 text-center">FR_Resume.pdf</span>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal - Make it responsive */}
      {selectedPdf && (
        <div className="fixed inset-0 w-screen h-screen bg-black/80 flex items-center justify-center z-50">
          <div className="w-full h-full bg-white flex flex-col">
            <div className="bg-[#2d2d2d] px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-between">
              <span className="text-white text-sm sm:text-base truncate">{selectedPdf}</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => handleDownload(selectedPdf)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <BsDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <BsX className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[#1e1e1e]">
              <iframe
                src={`/img/${selectedPdf}`}
                className="w-full h-full"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}