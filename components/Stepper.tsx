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
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      {/* Previous Step Button - Above stepper */}
      {activeSection > 0 && (
        <motion.button
          onClick={() => scrollToSection(sections[activeSection - 1])}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center hover:bg-gray-300 transition-all duration-300"
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
          >
            {getIcon(sections[activeSection - 1], activeSection - 1)}
          </motion.div>
        </motion.button>
      )}

      <div className="relative">
        {/* Circular Background */}
        <div className="w-20 h-20 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white">
          <motion.div
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${sections[activeSection] === 'home' || sections[activeSection] === 'projects'
              ? 'bg-white text-black border-2 border-gray-300' // Black icons need white background
              : 'bg-black text-white border-2 border-black' // White icons need black background
              }`}
            key={activeSection}
            initial={{ scale: 0.5, opacity: 0, }}
            animate={{ scale: 1, opacity: 1, }}
            exit={{ scale: 0.5, opacity: 0, }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <motion.div
              className={`${sections[activeSection] === 'home' || sections[activeSection] === 'projects'
                ? 'text-black' // Black text for white background
                : 'text-white' // White text for black background
                }`}
              key={`icon-${activeSection}`}
              initial={{ scale: 0, }}
              animate={{ scale: 1, }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              {getIcon(sections[activeSection], activeSection)}
            </motion.div>
          </motion.div>
        </div>

        {/* Next Section - Show only the next step */}
        {activeSection < sections.length - 1 && (
          <motion.button
            onClick={() => scrollToSection(sections[activeSection + 1])}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-black hover:bg-gray-50 transition-all duration-300"
            initial={{ opacity: 0, x: 30, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.8 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
              type: "spring",
              stiffness: 150,
              damping: 15
            }}
            whileHover={{
              scale: 1.15,
              x: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              key={`next-${activeSection + 1}`}
              initial={{ scale: 0, }}
              animate={{ scale: 1, }}
              transition={{
                duration: 0.3,
                delay: 0.5,
                ease: "easeOut"
              }}
            >
              {getIcon(sections[activeSection + 1], activeSection + 1)}
            </motion.div>
          </motion.button>
        )}


      </div>
    </div>
  );
}
