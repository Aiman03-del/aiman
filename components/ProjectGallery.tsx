'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface ProjectGalleryProps {
  onProjectClick: (projectId: string) => void;
}

export default function ProjectGallery({ onProjectClick }: ProjectGalleryProps) {

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="projects"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-block border rounded-full px-6 py-2 shadow-sm">
            <h3 className="text-sm uppercase tracking-[0.2em] font-medium opacity-70">
              Projects Section
            </h3>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured Projects
          </h2>

          <div className="w-20 h-[2px] mx-auto mb-6" />

          <p className="text-lg max-w-2xl mx-auto font-light opacity-70">
            Hover over projects to see options - view details or visit live site.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-xl  hover:opacity-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority={index < 2}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300"></div>


              </div>
              {/* Card Content - Initially hidden, shown on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="grid grid-cols-2 gap-4">
                  {/* Project Name - Left Side */}
                  <div className="flex items-end">
                    <h3 className="text-lg font-medium">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Buttons Grid - Right Side */}
                  <div className="grid grid-rows-2 gap-2">
                    {/* Visit Button - Top */}
                    {project.liveUrl && (
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        size="sm"
                        variant="default"
                        className="p-2 rounded-full flex items-center justify-center gap-2"
                        aria-label={`Open ${project.title} live site`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium">Visit</span>
                      </Button>
                    )}
                    
                    {/* View Button - Bottom */}
                    <Button
                      onClick={() => onProjectClick(project.id)}
                      size="sm"
                      variant="outline"
                      className="p-2 border-none rounded-full flex items-center justify-center gap-2"
                      aria-label={`View ${project.title} details`}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="text-sm font-medium">View</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

