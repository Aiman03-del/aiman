'use client';

import { useState } from 'react';
import ProjectGallery from './ProjectGallery';
import ProjectModal from './ProjectModal';

export default function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full">
      <ProjectGallery onProjectClick={handleProjectClick} />
      <ProjectModal 
        projectId={selectedProject} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
