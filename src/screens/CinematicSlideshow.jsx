import React, { useState, useEffect } from 'react';
import { Film, Sparkles, Heart, ArrowRight, Play, Pause } from 'lucide-react';
import confetti from 'canvas-confetti';

const imageModules = import.meta.glob('../picture/*.jpg', { eager: true });
const cinematicSlides = Object.values(imageModules).map((mod, index) => ({
  url: mod.default,
  title: `Cinematic Memory #${index + 1}`,
  subtitle: `Unforgettable moments shared with Tini ❤️`
}));

export default function CinematicSlideshow({ onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying && cinematicSlides.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cinematicSlides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    onNext();
  };

  const slide = cinematicSlides[currentIndex] || {
    url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=80',
    title: 'Cinematic Chapter',
    subtitle: 'Where every glance is a timeless memory.'
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn overflow-y-auto">
      <div className="glass-card p-6 md:p-10 rounded-3xl shadow-2xl max-w-4xl w-full text-center relative my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          <Film className="w-3.5 h-3.5" /> Chapter 5: Cinematic Slideshow <Sparkles className="w-3.5 h-3.5" />
        </div>

        <div className="relative h-72 sm:h-96 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-6 group bg-slate-900 flex items-center justify-center">
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-105 animate-fadeIn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
            <div className="flex items-center justify-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Heart className="w-4 h-4 fill-pink-400" /> Scene {currentIndex + 1} of {cinematicSlides.length}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] mb-1">
              {slide.title}
            </h3>
            <p className="text-base md:text-xl text-slate-200 font-['Dancing_Script']">
              {slide.subtitle}
            </p>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-all"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          {cinematicSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-pink-500 w-6' : 'bg-slate-400/50'
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleNext}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Continue to Friendship Stats <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
