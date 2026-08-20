import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

import PasswordScreen from './screens/PasswordScreen';
import AgeJourney from './screens/AgeJourney';
import BirthdayLetter from './screens/BirthdayLetter';
import MemoryAlbum from './screens/MemoryAlbum';
import CinematicSlideshow from './screens/CinematicSlideshow';
import FriendshipStats from './screens/FriendshipStats';
import LeaveMemory from './screens/LeaveMemory';
import FinalMessage from './screens/FinalMessage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const nextScreen = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen w-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-purple-100 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 text-slate-800 dark:text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Floating Balloons Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="balloon bg-pink-400/30" style={{ left: '15%', animationDelay: '0s', animationDuration: '14s' }}></div>
        <div className="balloon bg-purple-400/30" style={{ left: '45%', animationDelay: '3s', animationDuration: '12s' }}></div>
        <div className="balloon bg-rose-400/30" style={{ left: '75%', animationDelay: '1s', animationDuration: '16s' }}></div>
      </div>

      {/* Dark Mode Toggle Widget */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-14 h-14 rounded-full glass-card shadow-2xl flex items-center justify-center text-amber-500 dark:text-purple-300 hover:scale-110 active:scale-95 transition-all"
          title="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Chapter Indicator */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-5 py-2 rounded-full glass-pill shadow-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-300">
        <span>Chapter {currentScreen} of 8</span>
      </div>

      {/* Screen Router / Story Sequence */}
      {currentScreen === 1 && <PasswordScreen onNext={nextScreen} />}
      {currentScreen === 2 && <AgeJourney onNext={nextScreen} />}
      {currentScreen === 3 && <BirthdayLetter onNext={nextScreen} />}
      {currentScreen === 4 && <MemoryAlbum onNext={nextScreen} />}
      {currentScreen === 5 && <CinematicSlideshow onNext={nextScreen} />}
      {currentScreen === 6 && <FriendshipStats onNext={nextScreen} />}
      {currentScreen === 7 && <LeaveMemory onNext={nextScreen} />}
      {currentScreen === 8 && <FinalMessage />}

    </div>
  );
}
