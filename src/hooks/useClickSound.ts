import { useRef } from 'react';

export const useClickSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        if (error.name !== 'NotAllowedError') {
          console.error("Audio playback failed:", error);
        }
      });
    }
  };

  return { audioRef, playTickSound };
};