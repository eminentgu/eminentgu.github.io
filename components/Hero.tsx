
import React from 'react';
import type { ContactLink } from '../types';
import { ICONS } from '../constants';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
  contactLinks: ContactLink[];
}

export const Hero: React.FC<HeroProps> = ({ name, title, tagline, location, contactLinks }) => {
  return (
    <section id="hero" className="min-h-[calc(80vh-4rem)] flex flex-col justify-center items-center text-center py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
          <span className="block">Hello, I'm</span>
          <span className="block text-sky-400">{name}</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-slate-300 mb-6">{title}</p>
        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
          {tagline}
        </p>
        <div className="flex items-center justify-center text-slate-400 mb-8">
          {ICONS.LOCATION}
          <span className="ml-2">{location}</span>
        </div>
        <div className="flex justify-center space-x-6">
          {contactLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
           <a 
            href="#contact"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
