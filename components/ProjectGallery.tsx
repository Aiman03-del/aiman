'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function ProjectGallery() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
      {/* Header Badge */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-block border border-gray-400 rounded-full px-6 py-2 bg-white shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
            Projects Section
          </h3>
        </div>
      </motion.div>

      {/* Title & Subtitle */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="w-20 h-[2px] bg-black mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hover over a project to explore the details and see what I’ve built.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="relative h-80 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay with Animation */}
            <motion.div
              className={`absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6 transition-all duration-500 ${
                hoveredProject === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  hoveredProject === index
                    ? { y: 0, opacity: 1, transition: { delay: 0.2 } }
                    : {}
                }
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-300 mb-4 text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  hoveredProject === index
                    ? { y: 0, opacity: 1, transition: { delay: 0.3 } }
                    : {}
                }
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  hoveredProject === index
                    ? { y: 0, opacity: 1, transition: { delay: 0.4 } }
                    : {}
                }
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white/90 text-black px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  hoveredProject === index
                    ? { y: 0, opacity: 1, transition: { delay: 0.5 } }
                    : {}
                }
              >
                {project.liveUrl && (
                  <Button asChild variant="secondary" size="sm" className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm" className="gap-2 border-white text-white hover:bg-white hover:text-black">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
