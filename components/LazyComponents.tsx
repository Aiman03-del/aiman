'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Lazy load heavy components
export const LazyProjectModal = dynamic(() => import('./ProjectModal'), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinner size="lg" />
    </div>
  ),
  ssr: false
});

export const LazyProjectGallery = dynamic(() => import('./ProjectGallery'), {
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinner size="lg" />
    </div>
  ),
  ssr: false
});

export const LazyPageFlipAnimation = dynamic(() => import('./PageFlipAnimation'), {
  loading: () => null,
  ssr: false
});

// Wrapper component for lazy loading with error boundary
export function LazyWrapper({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return (
    <Suspense fallback={fallback || <LoadingSpinner size="lg" />}>
      {children}
    </Suspense>
  );
}
