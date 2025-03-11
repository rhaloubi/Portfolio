"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface TerminalProps {
  onClose: () => void;
}

export default function Terminal({ onClose }: TerminalProps) {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [commands]);

  // Update the type definition in handleKeyDown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      setCommands([...commands, input]);
      setInput('');
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{ left: -507, right: -310, top: -295, bottom: -200 }}
      dragElastic={1}
      style={{ 
        x : "-50%",
        y : "-50%",
        position: 'absolute',
        left: '50%',
        top: '50%',
      }}
      className="w-[80%] h-[500px] bg-black rounded-lg shadow-2xl overflow-hidden border border-gray-700"
    >
      <div 
        className="bg-gray-800 px-4 py-2 flex items-center cursor-move"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose}></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-400">
          redahaloubi — qemu-system-x86_64 — -zsh — 114×31
        </div>
      </div>
      <div className=" font-mono text-green-500 h-[calc(100%-40px)] flex flex-col">
        <div 
          ref={scrollRef}
          className='flex-1 px-2 pt-2 flex flex-col space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
        >
           <div className='flex'>
            <h2>hi </h2>
        </div>
          {commands.map((cmd, index) => (
            <div key={index} className="flex whitespace-nowrap">
              <span className="text-purple-500">➜</span>
              <span className="text-blue-500 ml-2">~/Respond</span>
              <span className="text-white ml-2">$</span>
              <span className="text-green-500 ml-2">{cmd}</span>
            </div>
          ))}
        </div>
        <div className="flex mt-2 border-t border-gray-800  px-2 pt-2">
          <span className="text-purple-500">➜</span>
          <span className="text-blue-500 ml-2">~/Desktop/portfolio</span>
          <span className="text-white ml-2">$</span>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-2 bg-transparent text-green-500  focus:outline-none w-full resize-none overflow-hidden"
            autoFocus
            style={{ minHeight: '1.2em' }}
          />
        </div>
      </div>
    </motion.div>
  );
}