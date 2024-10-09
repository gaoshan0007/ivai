import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Palette } from 'lucide-react';

const themes = [
  { name: 'black', color: 'bg-gray-900' },
  { name: 'blue', color: 'bg-blue-600' },
  { name: 'green', color: 'bg-green-600' },
  { name: 'red', color: 'bg-red-600' },
  { name: 'purple', color: 'bg-purple-600' },
  { name: 'orange', color: 'bg-orange-600' },
  { name: 'teal', color: 'bg-teal-600' },
] as const;

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-full shadow-md p-2">
      <div className="flex items-center space-x-2">
        <Palette size={24} className="text-gray-600 dark:text-gray-300" />
        {themes.map((t) => (
          <button
            key={t.name}
            className={`w-6 h-6 rounded-full ${t.color} ${
              theme === t.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
            }`}
            onClick={() => setTheme(t.name)}
            aria-label={`Switch to ${t.name} theme`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;