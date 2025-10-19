'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, X, Calendar, Code } from 'lucide-react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (projectId) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [projectId]);

  const project = projects.find(p => p.id === projectId);
  
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 backdrop-blur-sm" onClick={handleBackdropClick} />
          
          {/* Modal Content */}
          <motion.div
            className="relative bg-white dark:bg-black rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-6 w-6 text-black dark:text-white" />
            </button>

            {/* Project Image */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 text-black dark:text-white">
              {/* Project Header */}
              <div className="mb-6">
                <h1 
                  className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black dark:text-white"
                >
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-black dark:text-white">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    <span>Web Application</span>
                  </div>
                </div>

                <p 
                  className="text-lg leading-relaxed text-black dark:text-white"
                >
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 
                  className="text-xl font-semibold mb-4 text-black dark:text-white"
                >
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveUrl && (
                  <Button variant="default" className="flex-1 gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">View Live Demo</span>
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="flex-1 gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="h-4 w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">View Source Code</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
