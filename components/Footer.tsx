
import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center border-t border-slate-800">
      <p className="text-sm text-slate-500">
        &copy; {currentYear} {name}. All rights reserved.
      </p>
      <p className="text-xs text-slate-600 mt-1">
        Built with React, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
};
