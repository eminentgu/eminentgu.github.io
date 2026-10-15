
import React, { useState } from 'react';
import type { NavLink } from '../types';

interface HeaderProps {
  name: string;
  title: string;
  navLinks: NavLink[];
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ name, title, navLinks, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        <div className="text-left"> {/* Always text-left now */}
          <h1 className="text-2xl font-bold text-sky-400">{name}</h1>
          <p className="text-sm text-slate-400">{title}</p>
        </div>

        {/* Mobile Menu Button - hidden on md screens and up */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-slate-300 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 p-2 rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              // X Icon (Close)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon (Open)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation - hidden below md, flex on md and up */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-2 lg:space-x-4"> {/* Adjusted sm:space-x-4 to lg:space-x-4 for slightly more room */}
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

      {/* Mobile Navigation Menu - conditionally rendered */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-slate-800/95 backdrop-blur-sm shadow-xl border-t border-slate-700"
        >
          <ul className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu} // Close menu when a link is clicked
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out
                    ${activeSection === link.href.substring(1) ? 'bg-sky-500 text-white' : 'text-slate-200 hover:bg-slate-700 hover:text-sky-300'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
