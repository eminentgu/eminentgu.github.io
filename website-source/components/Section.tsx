
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  isInView?: boolean; // Prop to control section entrance animation
  isTitleIlluminated?: boolean; // Prop to control title text illumination
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '', isInView, isTitleIlluminated }) => {
  const animationClasses = isInView 
    ? 'opacity-100 translate-y-0' 
    : 'initial-hidden-translate'; // Use class from index.html for initial state

  const titleTextId = `section-${id}-title-text`;

  return (
    <section 
      id={id} 
      className={`py-16 sm:py-20 border-b border-slate-800 last:border-b-0 ${className} ${animationClasses} transition-all duration-700 ease-out transform`}
    >
      <h2 
        id={titleTextId}
        data-projectable-text="true"
        className={`text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-sky-400 projectable-text ${isTitleIlluminated ? 'projected-text-active' : ''}`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};