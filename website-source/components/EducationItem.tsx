
import React from 'react';
import type { EducationItem } from '../types'; // Changed from Education to EducationItem for consistency
import { ICONS } from '../constants';

export const EducationDisplayItem: React.FC<EducationItem> = ({ institution, degree, period, description }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-sky-500/20 hover:scale-[1.02]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <h3 className="text-xl font-semibold text-sky-400">{degree}</h3>
        <p className="text-sm text-slate-400 mt-1 sm:mt-0">
          {ICONS.CALENDAR}
          {period}
        </p>
      </div>
      <p className="text-lg text-slate-300 mb-3">{institution}</p>
      {description && (
        <p className="text-slate-400 text-sm">{description}</p>
      )}
    </div>
  );
};
