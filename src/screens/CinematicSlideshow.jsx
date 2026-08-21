import React from 'react';
import { Film, Sparkles, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const imageModules = import.meta.glob('../picture/*.jpg', { eager: true });
const allPhotos = Object.values(imageModules).map((mod, index) => ({
  id: index + 1,
  url: mod.default,
  title: `Memory #${index + 1}`
}));

const row1 = allPhotos.slice(0, 4);
const row2 = allPhotos.slice(4, 7);
const row3 = allPhotos.slice(7, 10);

export default function CinematicSlideshow({ onNext }) {
  const handleNext = () => {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    onNext();
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-between p-4 md:p-8 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn overflow-hidden">
      
      {/* Header */}
      <div className="text-center z-10 pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-2 shadow-sm">
          <Film className="w-3.5 h-3.5" /> Chapter 5: Cinematic Memory Wall <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold font-['Playfair_Display'] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Tini's Moving Memories ✨
        </h2>
      </div>

      {/* 3-Row Cinematic Wall Container with GPU acceleration */}
      <div className="w-full max-w-6xl h-[55vh] md:h-[60vh] grid grid-cols-3 gap-3 md:gap-6 overflow-hidden relative px-2 my-auto">
        {/* Gradient overlays for cinematic fade effect at top and bottom */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-pink-100 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-pink-100 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Moves UP */}
        <div className="relative overflow-hidden h-full rounded-2xl glass-card p-2">
          <div className="flex flex-col gap-3 animate-scroll-up transform-gpu will-change-transform">
            {[...row1, ...row1, ...row1].map((photo, idx) => (
              <div key={idx} className="relative h-44 sm:h-56 rounded-xl overflow-hidden shadow-lg bg-slate-950 shrink-0 group">
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-40 scale-110 pointer-events-none transform-gpu"
                  style={{ backgroundImage: `url(${photo.url})` }}
                ></div>
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 transform-gpu" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves DOWN */}
        <div className="relative overflow-hidden h-full rounded-2xl glass-card p-2">
          <div className="flex flex-col gap-3 animate-scroll-down transform-gpu will-change-transform">
            {[...row2, ...row2, ...row2].map((photo, idx) => (
              <div key={idx} className="relative h-44 sm:h-56 rounded-xl overflow-hidden shadow-lg bg-slate-950 shrink-0 group">
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-40 scale-110 pointer-events-none transform-gpu"
                  style={{ backgroundImage: `url(${photo.url})` }}
                ></div>
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 transform-gpu" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Moves UP */}
        <div className="relative overflow-hidden h-full rounded-2xl glass-card p-2">
          <div className="flex flex-col gap-3 animate-scroll-up transform-gpu will-change-transform" style={{ animationDuration: '28s' }}>
            {[...row3, ...row3, ...row3].map((photo, idx) => (
              <div key={idx} className="relative h-44 sm:h-56 rounded-xl overflow-hidden shadow-lg bg-slate-950 shrink-0 group">
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-40 scale-110 pointer-events-none transform-gpu"
                  style={{ backgroundImage: `url(${photo.url})` }}
                ></div>
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 transform-gpu" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Continue Button */}
      <div className="text-center z-10 pb-2">
        <button
          onClick={handleNext}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
        >
          Continue to Friendship Stats <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
