"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFiletypePdf, BsDownload, BsX } from "react-icons/bs";

interface FolderProps {
  onClose: () => void;
}

export default function Folder({ onClose }: FolderProps) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handlePdfClick = (pdfName: string) => {
    window.open(`/img/${pdfName}`, '_blank');
  };

    function handleDownload(selectedPdf: string): void {
        throw new Error('Function not implemented.');
    }

  // Remove handleDownload as it's no longer needed

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{ left: -507, right: -310, top: -295, bottom: -200 }}
      dragElastic={1}
      style={{ 
        x: "-50%",
        y: "-50%",
        position: 'absolute',
        left: '50%',
        top: '50%',
      }}
      className="w-[80%] h-[500px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700"
    >
      {/* Header */}
      <div 
        className="bg-[#2d2d2d] px-4 py-2 flex items-center cursor-move"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose}></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        <div className="ml-6 flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">←</button>
          <button className="text-gray-400 hover:text-white">→</button>
        </div>

        <div className="flex-1 text-center text-sm text-gray-400">
          redahaloubi - CV
        </div>
      </div>

      {/* Main Content */}
      <div className="py-6">
        <div className="grid grid-cols-6 gap-1">
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer"
            onClick={() => handlePdfClick('ENG_Resume.pdf')}
          >
            <div className="flex items-center justify-center group-hover:bg-gray-700/30 rounded-lg transition-colors duration-200">
              <BsFiletypePdf className="w-16 h-16" />
            </div>
            <span className="text-xs text-white group-hover:text-blue-400">ENG_Resume.pdf</span>
          </div>

          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer"
            onClick={() => handlePdfClick('ESP_Resume.pdf')}
          >
            <div className="flex items-center justify-center group-hover:bg-gray-700/30 rounded-lg transition-colors duration-200">
              <BsFiletypePdf className="w-16 h-16" />
            </div>
            <span className="text-xs text-white group-hover:text-blue-400">ESP_Resume.pdf</span>
          </div>
          <div 
            className="flex flex-col items-center gap-2 group cursor-pointer"
            onClick={() => handlePdfClick('FR_Resume.pdf')}
          >
            <div className="flex items-center justify-center group-hover:bg-gray-700/30 rounded-lg transition-colors duration-200">
              <BsFiletypePdf className="w-16 h-16" />
            </div>
            <span className="text-xs text-white group-hover:text-blue-400">FR_Resume.pdf</span>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 w-screen h-screen bg-black/80 flex items-center justify-center z-50">
          <div className="w-screen h-screen bg-white flex flex-col">
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between">
              <span className="text-white">{selectedPdf}</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleDownload(selectedPdf)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <BsDownload className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <BsX className="w-6 h-6" />
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