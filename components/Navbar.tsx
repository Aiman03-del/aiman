'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" data-cursor-hover>
              <Image
                src="/images/logo.png"
                alt="Aiman Logo"
                width={80}
                height={80}
                className="w-20 h-20 hover:opacity-80 transition-opacity duration-300"
                quality={100}
                priority
              />
            </Link>
          </div>
          
          {/* Menu toggle button - Center */}
          <div className="flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
              data-cursor-hover
            >
              <div className="relative w-6 h-6">
                <AnimatePresence mode="wait">
                  {!isMenuOpen ? (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
          
          {/* My Resume - Right */}
          <div className="flex items-center">
            <Button asChild variant="default" size="sm">
            <a 
              href="https://drive.google.com/file/d/1fQ1pCAnayziyGm7ad3CIwDZEMXlrWmqq/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              data-cursor-hover
            >
              My Resume
            </a>
            </Button>
          </div>
        </div>

        {/* Full Screen Modal - All devices */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              ref={modalRef}
              className="fixed inset-0 z-50 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div 
                className="flex flex-col items-center justify-center h-full space-y-8 relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 p-3  text-black rounded-full transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  data-cursor-hover
                >
                  <X className="h-6 w-6" />
                </motion.button>
                <motion.a 
                  href="#home" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl md:text-6xl font-bold text-black hover:text-gray-600"
                  whileHover={{ 
                    letterSpacing: "0.1em",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  data-cursor-hover
                >
                  Home
                </motion.a>
                <motion.a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl md:text-6xl font-bold text-black hover:text-gray-600"
                  whileHover={{ 
                    letterSpacing: "0.1em",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  data-cursor-hover
                >
                  About
                </motion.a>
                <motion.a 
                  href="#projects" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl md:text-6xl font-bold text-black hover:text-gray-600"
                  whileHover={{ 
                    letterSpacing: "0.1em",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  data-cursor-hover
                >
                  Projects
                </motion.a>
                <motion.a 
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl md:text-6xl font-bold text-black hover:text-gray-600"
                  whileHover={{ 
                    letterSpacing: "0.1em",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  data-cursor-hover
                >
                  Services
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl md:text-6xl font-bold text-black hover:text-gray-600"
                  whileHover={{
                    letterSpacing: "0.1em",
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  data-cursor-hover
                >
                  Contact
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
