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
      <div className="h-[calc(100%-40px)] flex flex-col">
        <div 
          ref={scrollRef}
          className='flex-1 px-2 pt-2 flex flex-col space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
        >
          <div className='flex'>
            <Sparkles className='mr-2 p-1' />
            <h3 ref={textRef} className='font-[TTTrailers] text-2xl'></h3>
          </div>
          {commands.map((cmd, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex flex-wrap">
                <span className="text-purple-500">➜</span>
                <span className="text-blue-500 ml-2">~/Respond</span>
                <span className="text-white ml-2">$</span>
                <div className='w-full'>
                  <p className="text-white ml-2 break-all">{cmd.command}</p>
                </div>
              </div>
              <div className="pl-6 text-green-400 break-all">
                {cmd.response}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-2 border-t border-gray-800 px-2 pt-2">
          <span className="text-purple-500">➜</span>
          <span className="text-blue-500 ml-2">~/Desktop/portfolio</span>
          <span className="text-white ml-2">$</span>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "Processing..." : "Ask...!"}
            className="ml-2 bg-transparent text-white focus:outline-none w-full resize-none overflow-hidden"
            autoFocus
            disabled={isLoading}
            style={{ minHeight: '1.2em' }}
          />
        </div>
      </div>
    </motion.div>
  );
}