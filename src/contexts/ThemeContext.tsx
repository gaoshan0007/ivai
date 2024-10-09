import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'black' | 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'teal';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'black';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('theme-black', 'theme-blue', 'theme-green', 'theme-red', 'theme-purple', 'theme-orange', 'theme-teal');
    root.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};