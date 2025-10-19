'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PageFlipAnimationProps {
  isAnimating: boolean;
  onAnimationComplete: () => void;
  children: React.ReactNode;
}

export default function PageFlipAnimation({ 
  isAnimating, 
  onAnimationComplete, 
  children 
}: PageFlipAnimationProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setShowOverlay(true);
      // Wait for the roll animation to complete
      const timer = setTimeout(() => {
        setShowOverlay(false);
        onAnimationComplete();
      }, 800); // Duration of the roll animation

      return () => clearTimeout(timer);
    }
  }, [isAnimating, onAnimationComplete]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main Content */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* Roll Overlay Animation */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="roll-overlay"
            className="absolute inset-0 z-50"
            initial={{ 
              x: "100%",
              y: "100%",
              rotate: 0,
              scale: 0.1,
              opacity: 0
            }}
            animate={{ 
              x: "-100%",
              y: "0%",
              rotate: 360,
              scale: 1,
              opacity: 1
            }}
            exit={{ 
              x: "-100%",
              y: "0%",
              rotate: 360,
              scale: 1,
              opacity: 0
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1],
              times: [0, 0.3, 0.7, 1]
            }}
            style={{
              background: 'var(--background)',
              borderRadius: '50%',
              transformOrigin: 'center'
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
