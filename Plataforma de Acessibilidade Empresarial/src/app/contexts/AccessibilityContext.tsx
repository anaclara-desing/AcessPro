import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  readAloud: boolean;
  toggleReadAloud: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [readAloud, setReadAloud] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));
  const resetFontSize = () => setFontSize(16);
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleReadAloud = () => setReadAloud(prev => !prev);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        highContrast,
        toggleHighContrast,
        readAloud,
        toggleReadAloud,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}
