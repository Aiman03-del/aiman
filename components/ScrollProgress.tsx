'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '../lib/hooks/useScrollProgress';

export default function ScrollProgress() {
  const { scrollProgress, isScrolling } = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        backgroundColor: 'var(--foreground)',
        opacity: 0.3
      }}
      initial={{ scaleX: 0 }}
      animate={{ 
        scaleX: scrollProgress,
        opacity: isScrolling ? 0.6 : 0.3
      }}
      transition={{ 
        scaleX: { duration: 0.1 },
        opacity: { duration: 0.2 }
      }}
    />
  );
}
