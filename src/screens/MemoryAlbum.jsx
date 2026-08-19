import React, { useState } from 'react';
import { Camera, Heart, Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const albumPhotos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80', title: 'Memory #1', caption: 'Magical celebrations & radiant smiles' },
  { id: 2, url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80', title: 'Memory #2', caption: 'Sweetest surprises and candles' },
  { id: 3, url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=80', title: 'Memory #3', caption: 'Your happiness lights up the room' },
  { id: 4, url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80', title: 'Memory #4', caption: 'Unforgettable adventures together' },
  { id: 5, url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80', title: 'Memory #5', caption: 'Here is to 22 amazing chapters!' }
];

export default function MemoryAlbum({ onNext }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + albumPhotos.length) % albumPhotos.length);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % albumPhotos.length);
  };

  const handleFinishAlbum = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    onNext();
  };

  const photo = albumPhotos[currentIndex];

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-100 via-rose-200 to-purple-200 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 z-50 animate-fadeIn overflow-y-auto">
      <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl max-w-xl w-full text-center relative my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-pink-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Camera className="w-3.5 h-3.5" /> Chapter 4: Memory Album ({currentIndex + 1} / {albumPhotos.length})
        </div>

        {/* Polaroid Scrapbook Card */}
        <div className="bg-white dark:bg-slate-800 p-6 pb-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 mb-8 transform transition-all duration-500 animate-fadeIn">
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-4 shadow-md">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pink-500 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-pink-500" /> Page {currentIndex + 1}
            </div>
          </div>
          <div className="font-['Dancing_Script']">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{photo.title}</h3>
            <p className="text-base text-slate-600 dark:text-slate-300 font-['Plus_Jakarta_Sans'] mt-1">{photo.caption}</p>
          </div>
        </div>

        {/* Album Controls */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevPhoto}
            className="px-5 py-3 rounded-2xl glass-card hover:bg-white/80 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-md flex items-center gap-1 transition-all"
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Turn the page ✨
          </span>

          <button
            onClick={nextPhoto}
            className="px-5 py-3 rounded-2xl glass-card hover:bg-white/80 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-md flex items-center gap-1 transition-all"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={handleFinishAlbum}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Continue to Cinematic Slideshow <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
