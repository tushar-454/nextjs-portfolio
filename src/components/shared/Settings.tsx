'use client';
import { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { MdNightlight, MdOutlineLightMode } from 'react-icons/md';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (
      localStorage.getItem('theme') === null &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  }, []);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`fixed bottom-4 right-4 z-[99999] cursor-pointer rounded-xl bg-gray-300 p-3`}
    >
      <div className='relative'>
        <CiSettings
          className={`animate-spin text-2xl text-gray-900 transition-all ${
            isOpen ? 'rotate-0' : 'rotate-90'
          } `}
        />
        <ul
          className={`absolute -left-3 -top-32 flex origin-bottom flex-col gap-3 rounded-xl bg-gray-300 p-3 transition-all ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}
        >
          <li>
            <FaHome
              onClick={() => window.scrollTo(0, 0)}
              className='cursor-pointer text-2xl text-gray-900'
            />
          </li>
          <li>
            {isDark ? (
              <MdNightlight
                onClick={() => toggleTheme('light')}
                className='cursor-pointer text-2xl text-gray-900'
              />
            ) : (
              <MdOutlineLightMode
                onClick={() => toggleTheme('dark')}
                className='cursor-pointer text-2xl text-gray-900'
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Settings };
