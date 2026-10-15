
import React from 'react';
import type { Experience } from '../types';
import { ICONS } from '../constants';

export const ExperienceItem: React.FC<Experience> = ({ role, company, period, descriptionPoints, technologies }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-sky-500/20 hover:scale-[1.02]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
        <h3 className="text-xl sm:text-2xl font-semibold text-sky-400">{role}</h3>
        <p className="text-sm text-slate-400 mt-1 sm:mt-0">
          {ICONS.CALENDAR}
          {period}
        </p>
      </div>
      <p className="text-lg text-slate-300 mb-4">{company}</p>
      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
        {descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {technologies && technologies.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span key={tech} className="bg-slate-700 text-sky-300 px-3 py-1 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
