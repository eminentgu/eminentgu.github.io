
import React from 'react';
import type { NavLink } from '../types';

interface HeaderProps {
  name: string;
  title: string;
  navLinks: NavLink[];
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ name, title, navLinks, activeSection }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          <h1 className="text-2xl font-bold text-sky-400">{name}</h1>
          <p className="text-sm text-slate-400">{title}</p>
        </div>
        <nav>
          <ul className="flex space-x-2 sm:space-x-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out
                    ${activeSection === link.href.substring(1) ? 'bg-sky-500 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-sky-300'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
