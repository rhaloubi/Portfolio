import React, { createContext, useContext, useState } from 'react';

type ColorContextType = {
  setNextColor: (color: string) => void;
  nextColor: string;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [nextColor, setNextColor] = useState('');

  return (
    <ColorContext.Provider value={{ nextColor, setNextColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) throw new Error('useColor must be used within ColorProvider');
  return context;
};