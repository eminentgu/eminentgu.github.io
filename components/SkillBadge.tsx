
import React from 'react';
import type { Skill } from '../types';

// SkillBadge still conforms to React.FC<Skill> as 'level' is optional in the Skill type.
// However, it will only use the 'name' prop for rendering.
export const SkillBadge: React.FC<Skill> = ({ name }) => {
  return (
    <div className="bg-slate-800 p-3 px-4 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-slate-700 hover:scale-105 flex justify-center items-center min-h-[48px] h-full">
      <p className="font-medium text-sky-300 text-sm sm:text-base">{name}</p>
    </div>
  );
};
