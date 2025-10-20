'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import { Button } from './ui/button';

interface ProjectGalleryProps {
  onProjectClick: (projectId: string) => void;
}

export default function ProjectGallery({ onProjectClick }: ProjectGalleryProps) {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (projectId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };


  return (
    <section
      id="projects"
      className="py-20 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-block border rounded-full px-6 py-2 shadow-sm">
            <h3 className="text-sm uppercase tracking-[0.2em] font-medium opacity-70">
              My Work
            </h3>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>

          <div className="w-16 sm:w-20 h-[2px] mx-auto mb-4 sm:mb-6" />

          <p className="text-base sm:text-lg max-w-2xl mx-auto font-light opacity-70 px-4">
            Hover over projects to see options - view details or visit live site.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedCards.has(project.id);
            return (
            <div
              key={project.id}
              className="group relative cursor-pointer sm:cursor-default"
              onClick={() => {
                // Only toggle on mobile (sm and below)
                if (window.innerWidth < 640) {
                  toggleCard(project.id);
                }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-40 grayscale"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority={index < 2}
                />

                {/* Hover Overlay - Only on desktop */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300 hidden sm:block"></div>
                
                {/* Mobile Background Overlay - Full card */}
                <div className={`absolute inset-0 bg-black/60 sm:bg-transparent transition-opacity duration-300 ${
                  isExpanded ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              
              {/* Card Content - Toggle on mobile, hover on desktop */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 transition-opacity duration-300 z-20 ${
                isExpanded ? 'opacity-100' : 'opacity-0 sm:opacity-0 group-hover:opacity-100'
              }`}>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-center">
                  {/* Project Name */}
                  <div className="flex items-center sm:col-span-1">
                    <h3 className="text-base sm:text-lg font-medium text-white sm:text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Buttons Grid */}
                  <div className="flex gap-2 sm:col-span-1 justify-end">
                    {/* Visit Button */}
                    {project.liveUrl && (
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        size="sm"
                        variant="default"
                        className="px-3 py-2 rounded-full flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm bg-white text-black hover:bg-gray-100"
                        aria-label={`Open ${project.title} live site`}
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="font-medium">Visit</span>
                      </Button>
                    )}
                    
                    {/* View Button */}
                    <Button
                      onClick={() => onProjectClick(project.id)}
                      size="sm"
                      variant="outline"
                      className="px-3 border-none py-2 rounded-full flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm bg-transparent text-white hover:bg-white hover:text-black"
                      aria-label={`View ${project.title} details`}
                    >
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="font-medium">View</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

