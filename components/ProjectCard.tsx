import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  position?: 'left' | 'center' | 'right';
  onCardClick?: () => void;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  position = 'center',
  onCardClick
}: ProjectCardProps) {
  const isSideCard = position !== 'center';
  
  return (
    <div 
      className={`project-card bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col ${
        isSideCard ? 'cursor-pointer' : ''
      }`}
      onClick={isSideCard ? onCardClick : undefined}
      style={{ height: '500px' }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 overflow-hidden">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a
              href={isSideCard ? undefined : liveUrl}
              target={isSideCard ? undefined : "_blank"}
              rel={isSideCard ? undefined : "noopener noreferrer"}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                isSideCard 
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                  : 'bg-black dark:bg-white text-white dark:text-black'
              }`}
              onClick={isSideCard ? (e) => e.preventDefault() : undefined}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={isSideCard ? undefined : githubUrl}
              target={isSideCard ? undefined : "_blank"}
              rel={isSideCard ? undefined : "noopener noreferrer"}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                isSideCard 
                  ? 'border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                  : 'border border-black dark:border-white text-black dark:text-white'
              }`}
              onClick={isSideCard ? (e) => e.preventDefault() : undefined}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
