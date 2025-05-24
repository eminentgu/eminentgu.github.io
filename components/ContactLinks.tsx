

import React from 'react';
import type { ContactLink } from '../types';

interface ContactLinksProps {
  links: ContactLink[];
}

export const ContactLinks: React.FC<ContactLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-center items-center space-x-6 sm:space-x-8">
      {links.map(link => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-slate-400 hover:text-sky-400 transition-transform duration-300 ease-in-out transform hover:scale-125"
        >
          {/* Fix: Cast link.icon to a specific ReactElement type whose props are known to include className for SVG elements. */}
          {React.isValidElement(link.icon) ? React.cloneElement(link.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: "h-8 w-8 sm:h-10 sm:w-10" }) : link.icon}
        </a>
      ))}
    </div>
  );
};