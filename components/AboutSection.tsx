'use client';

import { Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function AboutSection() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1.7, 1.45, 1.2, 1.1]);

  return (
    <section 
      id="about" 
      className="py-20 overflow-hidden transition-colors duration-300"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Badge */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div 
            className="inline-block border rounded-full px-6 py-2 shadow-sm"
            style={{
              borderColor: 'var(--foreground)',
              backgroundColor: 'var(--background)'
            }}
          >
            <h3 
              className="text-sm uppercase tracking-[0.2em] font-medium opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              About Section
            </h3>
          </div>
        </motion.div>

        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="w-20 h-[2px] mx-auto mb-6"
            style={{ backgroundColor: 'var(--foreground)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-lg max-w-2xl mx-auto font-light opacity-70"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Passionate web developer with a love for minimalism, detail, and timeless design.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-16">

          {/* My Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pl-6"
          >
            <h3 
              className="text-2xl font-serif font-semibold mb-3"
              style={{ color: 'var(--foreground)' }}
            >
              My Story
            </h3>
            Hey there  I’m <span className="font-semibold">Ayman Uddin Siam</span> — a passionate{" "}
          <span className="font-semibold">Frontend Web Developer</span> from Bangladesh, currently working at{" "}
          <span className="font-semibold">Growthly IT</span>. My journey didn’t start with a computer science degree —
          it started with pure curiosity and endless nights of exploring how the web really works.  
          <br /> 
          {/* After completing my SSC in Science, I joined the Navy, which taught me discipline, focus, and respect for
          structure — traits I still carry into my coding life today. Later, I shifted my path into the world of web
          development, where I found my true calling.   */}
          <br />
          I started with HTML and CSS, fell in love with React, and eventually built projects using{" "}
          <span className="font-semibold">MERN stack, NestJS, and TypeScript</span>. I value clean design,
          performance, and user-first experiences — blending traditional craftsmanship with modern tools.  
          <br /> <br />
          Now, every project I build isn’t just code — it’s a reflection of my story, my discipline, and my belief that
          growth comes from patience, persistence, and purpose.
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-2xl font-serif font-semibold mb-6"
              style={{ color: 'var(--foreground)' }}
            >
              Technologies I Use
            </h3>

            <div className="relative overflow-hidden py-4">
              {/* Faded edges */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r to-transparent z-10"
                style={{ background: `linear-gradient(to right, var(--background), transparent)` }}
              ></div>
              <div 
                className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l to-transparent z-10"
                style={{ background: `linear-gradient(to left, var(--background), transparent)` }}
              ></div>

              <div className="flex animate-marquee">
                {[
                  'reactjs-svgrepo-com.svg',
                  'nextjs-icon-svgrepo-com.svg',
                  'typescript-svgrepo-com.svg',
                  'node-js-svgrepo-com.svg',
                  'mongodb-svgrepo-com.svg',
                  'firebase-svgrepo-com.svg',
                  'html-5-svgrepo-com.svg',
                  'css-3-svgrepo-com.svg',
                  'javascript-svgrepo-com.svg',
                  'express-svgrepo-com.svg',
                  'git-svgrepo-com.svg',
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center mx-8 rounded-full p-4 shadow-sm flex-shrink-0 hover:shadow-lg transition-all duration-500"
                    style={{ backgroundColor: 'var(--background)' }}
                  >
                    <Image
                      src={`/images/${icon}`}
                      alt="Tech Icon"
                      width={40}
                      height={40}
                      className="h-10 w-10 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What Drives Me */}
          <motion.div
            className="backdrop-blur-sm p-6 rounded-xl shadow-sm"
            style={{
              backgroundColor: 'var(--background)',
              opacity: 0.9
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="p-2 rounded-lg"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)'
                }}
              >
                <Heart className="h-5 w-5" />
              </div>
              <h3 
                className="text-xl font-serif font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                What Drives Me
              </h3>
            </div>
            <p 
              className="leading-relaxed opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              I'm driven by the challenge of transforming ideas into meaningful digital realities.
              Every line of code is a step toward clarity, precision, and beauty.
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div ref={imageRef} className="flex justify-center pt-6">
            <div className="relative w-72 h-90 overflow-hidden bg-transparent">
              <motion.div style={{ scale: imageScale }}>
                <Image
                  src="/images/profile.png"
                  alt="Aiman - Developer"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
