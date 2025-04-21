"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import toast from 'react-hot-toast';

gsap.registerPlugin(TextPlugin);

interface TerminalProps {
  onClose: () => void;
  onMessageCountChange: (count: number) => void;
}

interface Message {
  role: string;
  content: string;
}

interface CommandResponse {
  command: string;
  response: string;
}

export default function Terminal({ onClose, onMessageCountChange }: TerminalProps) {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState<CommandResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [commands]);

  const handleChat = async (message: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        toast.error(data.error, {
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
          },
        });
        throw new Error(data.error);
      }
  
      // Update message count from session
      if (data.session?.messageCount) {
        onMessageCountChange(data.session.messageCount);
      }
  
      return data.response;
    } catch (error) {
      console.error('Chat Error:', error);
      return 'you ask a lot of Qst , am tired ask me tomorrow';
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const userInput = input.trim();
      if (!userInput) return;

      setIsLoading(true);
      setInput('');
      
      // Add user command immediately
      setCommands(prev => [...prev, { command: userInput, response: '...' }]);

      // Get AI response
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const aiResponse = await handleChat(userInput);
      
      // Update the last command with the AI response
      setCommands(prev => {
        const newCommands = [...prev];
if (newCommands.length > 0) {
  const lastCommand = newCommands[newCommands.length - 1];
  if (lastCommand) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    lastCommand.response = aiResponse || 'No response received';
  }
}
        return newCommands;
      });

      setIsLoading(false);
    }
  };

  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 2,
      text: "Hey, how can I help you today? Feel free to ask me anything about myself !",
      ease: "none",
      delay: 0.5
    });
  }, []);

  // Add this state to handle screen size
  const [isMobile, setIsMobile] = useState(false);
  
  // Add this useEffect to detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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
        height: isMobile ? '100%' : undefined,
      }}
      className={`${
        !isMobile ? 'w-[95%] sm:w-[90%] md:w-[80%] h-[350px] sm:h-[450px] md:h-[500px]' : ''
      } bg-black rounded-lg shadow-2xl overflow-hidden border border-gray-700 flex flex-col`}
    >
      <div 
        className="bg-gray-800 px-2 sm:px-4 py-1 sm:py-2 flex items-center cursor-move shrink-0"
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
        <div className="flex-1 text-center text-xs sm:text-sm text-gray-400 truncate">
          redahaloubi — qemu-system-x86_64 — -zsh — 114×31
        </div>
      </div>
      <div className="h-[calc(100%-32px)] sm:h-[calc(100%-40px)] flex flex-col">
        <div 
          ref={scrollRef}
          className='flex-1 px-1 sm:px-2 pt-2 flex flex-col space-y-1 sm:space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
        >
          <div className='flex items-center'>
            <Sparkles className='mr-1 sm:mr-2 p-0.5 sm:p-1 w-4 h-4 sm:w-5 sm:h-5' />
            <h3 ref={textRef} className='font-[TTTrailers] text-lg sm:text-xl md:text-2xl'></h3>
          </div>
          {commands.map((cmd, index) => (
            <div key={index} className="flex flex-col space-y-1 sm:space-y-2">
              <div className="flex flex-wrap">
                <span className="text-purple-500 text-sm sm:text-base">➜</span>
                <span className="text-blue-500 ml-1 sm:ml-2 text-sm sm:text-base">~/Respond</span>
                <span className="text-white ml-1 sm:ml-2 text-sm sm:text-base">$</span>
                <div className='w-full'>
                  <p className="text-white ml-1 sm:ml-2 text-sm sm:text-base break-all">{cmd.command}</p>
                </div>
              </div>
              <div className="pl-4 sm:pl-6 text-green-400 text-sm sm:text-base break-all">
                {cmd.response}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-1 sm:mt-2 border-t border-gray-800 px-1 sm:px-2 pt-1 sm:pt-2 text-sm sm:text-base shrink-0">
          <span className="text-purple-500">➜</span>
          <span className="text-blue-500 ml-1 sm:ml-2 hidden sm:inline">~/Desktop/portfolio</span>
          <span className="text-blue-500 ml-1 sm:ml-2 sm:hidden">~</span>
          <span className="text-white ml-1 sm:ml-2">$</span>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "Processing..." : "Ask...!"}
            className="ml-1 sm:ml-2 bg-transparent text-white focus:outline-none w-full resize-none overflow-hidden text-sm sm:text-base pb-2"
            autoFocus
            disabled={isLoading}
            style={{ 
              minHeight: '1.2em',
              maxHeight: '4.8em',
              overflowY: 'auto'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}