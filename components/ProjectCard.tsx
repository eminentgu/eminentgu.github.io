
import React from 'react';
import type { Project } from '../types';
import { ICONS } from '../constants';

export const ProjectCard: React.FC<Project> = ({ name, description, technologies, imageUrl, repoUrl, liveUrl }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-sky-500/20 hover:scale-[1.03]">
      {imageUrl && (
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-sky-400 mb-2">{name}</h3>
        <p className="text-slate-300 text-sm mb-4 flex-grow">{description}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase mb-2">Keywords/Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span key={tech} className="bg-slate-700 text-sky-300 px-2 py-1 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-4">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors duration-300 flex items-center"
              aria-label={`GitHub repository for ${name}`}
            >
              {ICONS.GITHUB}
              <span className="ml-2 text-sm">Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors duration-300 flex items-center"
              aria-label={`View paper for ${name}`}
            >
              {ICONS.LINK}
              <span className="ml-2 text-sm">Paper</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
