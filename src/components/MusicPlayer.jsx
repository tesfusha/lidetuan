import React from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export default function MusicPlayer({ isPlaying, toggleMusic, volume, setVolume }) {
  return (
    <div className="fixed bottom-6 left-6 z-[100] glass-card px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn">
      <button
        onClick={toggleMusic}
        className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all"
        title={isPlayingMusic ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>

      <div className="hidden sm:flex flex-col">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
          <Music className="w-3.5 h-3.5 text-pink-500 animate-bounce" />
          <span>Gentle Piano Melody</span>
        </div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400">
          {isPlaying ? 'Playing in background 🎶' : 'Paused 🎵'}
        </span>
      </div>

      <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setVolume(volume > 0 ? 0 : 0.4)}
          className="text-slate-600 dark:text-slate-300 hover:text-pink-500 transition-colors"
        >
          {volume > 0 ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-red-400" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 accent-pink-500 cursor-pointer"
        />
      </div>
    </div>
  );
}
