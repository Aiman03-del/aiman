'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const fullText = "Hi, I'm Aiman";
  const typingSpeed = 100; // milliseconds per character
  const startDelay = 3500; // Start typing after 3.5 seconds to sync with existing animations

  useEffect(() => {
    // Start typing after delay
    const startTimer = setTimeout(() => {
      let currentIndex = 0;
      const typingTimer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingTimer);
        }
      }, typingSpeed);

      return () => clearInterval(typingTimer);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, []);

  // Show content after image loads
  useEffect(() => {
    if (imageLoaded) {
      // Dispatch custom event for Navbar
      window.dispatchEvent(new CustomEvent('heroImageLoaded'));
      
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500); // Small delay after image loads
      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="py-20 min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-center relative">

          {/* Left Text - Hidden on mobile, visible on larger screens */}
          <motion.div
            className="hidden lg:block absolute left-12 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 350, y: -100 }}
            transition={{ duration: 1.3, delay: 1.5 }}
          >
            <motion.h2
              className="text-7xl font-serif font-bold"
              style={{ color: 'var(--foreground)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              Web
            </motion.h2>
          </motion.div>

          {/* Center Image */}
          <div className="flex justify-center items-center mb-6 sm:mb-8 lg:mb-0">
            <motion.div
              className="relative"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden"
                animate={{
                  scale: [1, 0.98, 1],
                  rotate: [0, 0.4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Aiman - Developer"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>

            </motion.div>
          </div>

          {/* Right Text - Hidden on mobile, visible on larger screens */}
          <motion.div
            className="hidden lg:block absolute right-12 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: -105, y: 100 }}
            transition={{ duration: 1.3, delay: 1.5 }}
          >
            <motion.h2
              className="text-7xl font-mono font-bold"
              style={{ color: 'var(--foreground)' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              Developer
            </motion.h2>
          </motion.div>

          {/* Mobile Text - Visible only on mobile and tablet */}
          <div className="lg:hidden text-center mb-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2"
              style={{ color: 'var(--foreground)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              Web
            </motion.h2>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold"
              style={{ color: 'var(--foreground)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              Developer
            </motion.h2>
          </div>
        </div>

        {/* Bottom Content */}
        {!showContent ? (
          // Loading state
          <motion.div
            className="text-center mt-12 sm:mt-16 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="text-center mt-12 sm:mt-16 md:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              {displayedText}
              <span className={`transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto font-light opacity-70 px-4"
              style={{ color: 'var(--foreground)' }}
            >
              A passionate developer blending modern tech with timeless design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" variant="default" className="w-full sm:w-auto">
                <a href="#projects">
                  View My Work
                </a>
              </Button>

              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
