'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (projectIndex: number) => {
    setCurrentIndex(projectIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Get the three visible projects (previous, current, next)
  const getVisibleProjects = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    
    return [
      { project: projects[prevIndex], index: prevIndex, position: 'left' as const },
      { project: projects[currentIndex], index: currentIndex, position: 'center' as const },
      { project: projects[nextIndex], index: nextIndex, position: 'right' as const }
    ];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <div className="w-full max-w-8xl mx-auto px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full transition duration-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full transition duration-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* 3D Carousel Container */}
      <div 
        className="relative h-[600px] overflow-hidden perspective-1000"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative w-full h-full flex items-center justify-center gap-8">
          {visibleProjects.map(({ project, position }) => (
            <motion.div
              key={`${project.id}-${position}`}
              className="flex-shrink-0"
              layout
              initial={{
                rotate: position === 'left' ? 2 : position === 'right' ? -2 : 0,
                rotateY: position === 'left' ? 15 : position === 'right' ? -15 : 0,
                rotateX: position === 'center' ? 0 : 5,
                scale: position === 'center' ? 1 : 0.85,
                filter: position === 'center' ? 'blur(0px)' : 'blur(1px)',
                z: position === 'center' ? 50 : 0,
                y: position === 'center' ? 0 : 20,
              }}
              animate={{
                rotate: position === 'left' ? 2 : position === 'right' ? -2 : 0,
                rotateY: position === 'left' ? 15 : position === 'right' ? -15 : 0,
                rotateX: position === 'center' ? 0 : 5,
                scale: position === 'center' ? 1 : 0.85,
                filter: position === 'center' ? 'blur(0px)' : 'blur(1px)',
                z: position === 'center' ? 50 : 0,
                y: position === 'center' ? 0 : 20,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
              }}
            >
              <div className={`h-[500px] ${
                position === 'center' ? 'w-96' : 'w-80'
              }`} style={{ height: '500px' }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  position={position}
                  onCardClick={() => handleCardClick(visibleProjects.find(p => p.project.id === project.id)?.index || 0)}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-12 gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentIndex
                ? ''
                : 'opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Enhanced 3D CSS */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1200px;
          perspective-origin: center center;
        }
        
        @media (max-width: 1024px) {
          .perspective-1000 {
            perspective: 1000px;
          }
        }
        
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
        
        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 600px;
          }
        }
        
        /* Enhanced 3D shadows */
        .perspective-1000 > div > div {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        
        /* 3D depth effect */
        .perspective-1000 > div > div:hover {
          box-shadow: 
            0 35px 70px -12px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        
        /* Smooth transitions for better performance */
        .perspective-1000 * {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        
        /* Optimize animations */
        @media (prefers-reduced-motion: reduce) {
          .perspective-1000 * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
