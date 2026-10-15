import React, { useEffect, useState } from 'react';
import type { ContactLink } from '../types';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
  contactLinks: ContactLink[];
  isTextIlluminated?: boolean;
  onDarkSideClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  name, 
  title, 
  tagline, 
  location, 
  contactLinks, 
  isTextIlluminated,
  onDarkSideClick 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDarkSideClick = () => {
    setIsTransitioning(true);
    const overlay = document.getElementById('glitch-screen-overlay');
    if (overlay) overlay.classList.add('glitch-overlay-active');
    
    setTimeout(() => {
      onDarkSideClick?.();
    }, 600);
  };

  const getAnimationClasses = (delayClass: string) => {
    return `initial-hero-hidden ${isMounted ? `animate-fadeInUp ${delayClass}` : ''}`;
  };

  return (
    <section id="hero" className={`min-h-[calc(80vh-4rem)] flex flex-col justify-center items-center text-center py-16 sm:py-20 overflow-hidden transition-all duration-300 ${isTransitioning ? 'scale-110 blur-sm glitch-active' : ''}`}>
      <div className="max-w-3xl relative">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
          <span className={`block text-slate-500 text-3xl mb-2 font-light tracking-tight ${getAnimationClasses('animation-delay-100')}`}>
            Hello, I am
          </span>
          <span 
            id="hero-main-name-text"
            data-projectable-text="true"
            className={`block text-sky-400 projectable-text ${getAnimationClasses('animation-delay-200')} ${isTextIlluminated ? 'projected-text-active' : ''}`}
          >
            {name}
          </span>
        </h1>
        
        <div className={`mb-10 ${getAnimationClasses('animation-delay-300')}`}>
          <div className="relative inline-block px-12 py-3 group">
            {/* Thematic Light Side Decoration & Blade */}
            <div className="absolute inset-0 border-x-2 border-sky-500/10 rounded-lg"></div>
            
            {/* Blue Horizontal Blade */}
            <div className="absolute -bottom-1 left-0 right-0 flex justify-center px-4">
               <div className="blade-blue w-full"></div>
            </div>

            <p className="text-2xl sm:text-4xl font-semibold jedi-glow tracking-wider">
              {title}
            </p>
          </div>

          <div className="mt-12">
            <button 
              onClick={handleDarkSideClick}
              disabled={isTransitioning}
              className={`group relative inline-flex items-center justify-center px-8 py-3 text-sm font-black tracking-[0.3em] text-red-500 uppercase border border-red-900/40 rounded transition-all duration-500 hover:border-red-600 hover:text-red-400 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]`}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
                Click to the Dark Side
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
              </span>
              <div className="absolute inset-0 bg-red-950/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        <p className={`text-xl text-slate-400 mb-8 leading-relaxed italic opacity-80 ${getAnimationClasses('animation-delay-400')}`}>
          "{tagline}"
        </p>

        <div className={`flex items-center justify-center text-slate-400 mb-8 ${getAnimationClasses('animation-delay-500')}`}>
          <span className="text-sky-500/50 mr-2 text-2xl">⌬</span>
          <span className="tracking-wide uppercase text-sm font-bold">{location}</span>
          <span className="text-sky-500/50 ml-2 text-2xl">⌬</span>
        </div>

        <div className={`flex flex-wrap justify-center space-x-4 sm:space-x-8 items-center ${getAnimationClasses('animation-delay-700')}`}>
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-500 hover:text-sky-400 transition-all duration-300 hover:scale-125"
            >
              {link.icon}
            </a>
          ))}
           <a 
            href="#contact"
            className="relative overflow-hidden group bg-transparent border border-sky-500 text-sky-400 hover:text-white font-bold py-3 px-10 rounded-sm tracking-widest transition-all duration-500"
          >
            <span className="relative z-10">ARCHIVE ACCESS</span>
            <div className="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};