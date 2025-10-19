'use client';

import { Code, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 text-black min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-center relative">

          {/* Left Text */}
          <motion.div
            className="absolute left-0 lg:left-12 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 350, y: -100 }}
            transition={{ duration: 1.3, delay: 1.5 }}
          >
            <motion.h2
              className="text-5xl lg:text-7xl font-serif font-bold text-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              Web
            </motion.h2>
          </motion.div>

          {/* Center Image */}
          <div className="flex justify-center items-center mb-8 lg:mb-0">
            <motion.div
              className="relative"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className="w-64 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden"
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
                  width={320}
                  height={384}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </motion.div>

            </motion.div>
          </div>

          {/* Right Text */}
          <motion.div
            className="absolute right-0 lg:right-12 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: -105, y: 100 }}
            transition={{ duration: 1.3, delay: 1.5 }}
          >
            <motion.h2
              className="text-5xl lg:text-7xl font-mono font-bold text-black"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              Developer
            </motion.h2>
          </motion.div>
        </div>

        {/* Bottom Content */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-black">
            Hi, I'm Aiman
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-700 font-light">
            A passionate developer blending modern tech with timeless design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="gap-2">
              <a href="#projects">
                <Code className="h-5 w-5" />
                View My Work
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
