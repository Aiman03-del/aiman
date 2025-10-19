'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ArrowLeft, Calendar, Code } from 'lucide-react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={onBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <section 
      className="min-h-screen py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button 
            variant="outline" 
            onClick={onBack}
            className="gap-2 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Back to Projects</span>
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm opacity-70">
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
            className="text-lg max-w-3xl leading-relaxed opacity-80"
          >
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          className="mb-12 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-96 md:h-[500px] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 
                className="text-2xl font-bold mb-6"
              >
                Project Overview
              </h2>
              <div 
                className="prose prose-lg max-w-none"
              >
                <p className="mb-4">
                  This project showcases my expertise in modern web development, 
                  combining cutting-edge technologies with thoughtful design principles.
                </p>
                <p className="mb-4">
                  The application demonstrates clean code architecture, responsive design, 
                  and user-centered development practices.
                </p>
                <p>
                  Built with attention to performance, accessibility, and maintainability, 
                  this project represents the quality and care I bring to every development challenge.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
              >
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
              >
                Project Links
              </h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <Button variant="default" className="w-full gap-2 flex items-center justify-center">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">View Live Demo</span>
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="w-full gap-2 flex items-center justify-center">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">View Source Code</span>
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-4 rounded-lg"
            >
              <h4 
                className="font-semibold mb-2"
              >
                Project Details
              </h4>
              <div className="space-y-2 text-sm opacity-70">
                <div>
                  <span className="font-medium">Category:</span> Web Application
                </div>
                <div>
                  <span className="font-medium">Year:</span> 2024
                </div>
                <div>
                  <span className="font-medium">Status:</span> Completed
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
