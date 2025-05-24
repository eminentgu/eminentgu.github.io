
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactLink {
  href: string;
  icon: React.ReactNode;
  label: string; // For accessibility
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  descriptionPoints: string[];
  technologies?: string[];
}

export interface Project { // Used for Publications as well
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  repoUrl?: string; // Can link to paper or code
  liveUrl?: string; // Can link to conference page or PDF
}

export interface EducationItem {
  id:string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: number; // Optional: 0-100 for progress bar
}

export interface RewardItem {
  id: string;
  name: string;
  level: string; // e.g., National, Provincial, University
}
