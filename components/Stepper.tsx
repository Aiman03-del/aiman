'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Mail, DollarSign } from 'lucide-react';

interface StepperProps {
  sections: string[];
}

export default function Stepper({ sections }: StepperProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (section: string, index: number) => {
    const iconProps = { className: "w-5 h-5" };

    switch (section) {
      case 'home':
        return <Home {...iconProps} />;
      case 'about':
        return <User {...iconProps} />;
      case 'projects':
        return <FolderOpen {...iconProps} />;
      case 'services':
        return <DollarSign {...iconProps} />;
      case 'contact':
        return <Mail {...iconProps} />;
      default:
        return <span className="text-sm font-bold">{index + 1}</span>;
    }
  };

  return (
    <>
      {/* Desktop Vertical Stepper */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">

      {/* Previous Step Button - North (Above) */}
      {activeSection > 0 && (
        <motion.button
          onClick={() => scrollToSection(sections[activeSection - 1])}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-300"
          style={{
            backgroundColor: 'var(--background)',
            border: `2px solid var(--foreground)`,
            opacity: 0.8
          }}
          initial={{ opacity: 0, y: -20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.5 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          whileHover={{
            scale: 1.2,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.8 }}
        >
          <motion.div
            key={`prev-${activeSection - 1}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              ease: "easeOut"
            }}
            style={{ color: 'var(--foreground)' }}
          >
            {getIcon(sections[activeSection - 1], activeSection - 1)}
          </motion.div>
        </motion.button>
      )}

      {/* Current Section - Center */}
      <div className="relative">
        {/* Pulse Animation Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid var(--foreground)`,
            opacity: 0.6
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)'
          }}
          key={activeSection}
          initial={{ 
            scale: 0.5, 
            opacity: 0,
            rotate: -180
          }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            rotate: 0
          }}
          exit={{ 
            scale: 0.5, 
            opacity: 0,
            rotate: 180
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
            stiffness: 150,
            damping: 15
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            style={{ color: 'var(--background)' }}
            key={`icon-${activeSection}`}
            initial={{ 
              scale: 0,
              rotate: -90
            }}
            animate={{ 
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            {getIcon(sections[activeSection], activeSection)}
          </motion.div>
        </motion.div>
      </div>

      {/* Next Section Button - South (Below) */}
      {activeSection < sections.length - 1 && (
        <motion.button
          onClick={() => scrollToSection(sections[activeSection + 1])}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-300"
          style={{
            backgroundColor: 'var(--background)',
            border: `2px solid var(--foreground)`,
            opacity: 0.8
          }}
          initial={{ 
            opacity: 0, 
            y: 20, 
            scale: 0.5,
            rotate: 45
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            rotate: 0
          }}
          exit={{ 
            opacity: 0, 
            y: 20, 
            scale: 0.5,
            rotate: -45
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
          whileHover={{
            scale: 1.2,
            y: 2,
            rotate: 10,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.8,
            rotate: -5
          }}
        >
          <motion.div
            key={`next-${activeSection + 1}`}
            initial={{ 
              scale: 0,
              rotate: -45
            }}
            animate={{ 
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            style={{ color: 'var(--foreground)' }}
          >
            {getIcon(sections[activeSection + 1], activeSection + 1)}
          </motion.div>
        </motion.button>
      )}
      </div>

      {/* Mobile Horizontal Stepper */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div 
          className="flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border transition-colors duration-300"
          style={{
            backgroundColor: 'var(--background)',
            borderColor: 'var(--foreground)',
            opacity: 0.9
          }}
        >
          {sections.map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeSection === index
                  ? 'scale-110'
                  : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: activeSection === index ? 'var(--foreground)' : 'var(--background)',
                color: activeSection === index ? 'var(--background)' : 'var(--foreground)',
                border: `1px solid var(--foreground)`,
                opacity: activeSection === index ? 1 : 0.7
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                key={`mobile-${section}-${index}`}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="w-5 h-5 flex items-center justify-center"
                style={{
                  color: activeSection === index ? 'var(--background)' : 'var(--foreground)'
                }}
              >
                {getIcon(section, index)}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
}
