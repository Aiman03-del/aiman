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
      className={`project-card rounded-lg shadow-lg overflow-hidden border h-full flex flex-col ${
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
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="mb-4 flex-1 overflow-hidden">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded text-sm"
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
                  ? 'cursor-not-allowed' 
                  : ''
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
                  ? 'border cursor-not-allowed' 
                  : 'border'
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
