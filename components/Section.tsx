
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-20 border-b border-slate-800 last:border-b-0 ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-sky-400">
        {title}
      </h2>
      {children}
    </section>
  );
};
