"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FolderProps {
  onClose: () => void;
}

export default function Folder({ onClose }: FolderProps) {
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
        {/* Window Controls */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose}></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        {/* Navigation Controls */}
        <div className="ml-6 flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">←</button>
          <button className="text-gray-400 hover:text-white">→</button>
        </div>

        {/* Path Display */}
        <div className="flex-1 text-center text-sm text-gray-400">
          aws-keys
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Certificate Files */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 relative">
              <Image
                src="/img/certificate.png"
                alt="CentOS Certificate"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-white">CentOS.pem</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 relative">
              <Image
                src="/img/certificate.png"
                alt="RedahiKEY Certificate"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-white">RedahiKEY.pem</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 relative">
              <Image
                src="/img/certificate.png"
                alt="Ubunto1 Certificate"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-white">Ubunto1.pem</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 relative">
              <Image
                src="/img/certificate.png"
                alt="ubuntu2 Certificate"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-white">ubuntu2.pem</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}