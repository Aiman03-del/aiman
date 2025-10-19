// Site Configuration
export const SITE_CONFIG = {
  name: 'Aiman Uddin Siam',
  title: 'Frontend Web Developer',
  description: 'Passionate Frontend Web Developer from Bangladesh specializing in React, Next.js, and modern web technologies.',
  url: 'https://aiman-portfolio.vercel.app',
  author: 'Aiman Uddin Siam',
  email: 'ausiaam83@gmail.com',
  phone: '+8801538288739',
  location: 'Mirsarai, Chattogram',
  company: 'Growthly IT',
  resumeUrl: 'https://drive.google.com/file/d/1fQ1pCAnayziyGm7ad3CIwDZEMXlrWmqq/view?usp=sharing'
} as const;

// Social Links
export const SOCIAL_LINKS = {
  twitter: '#',
  linkedin: '#',
  github: '#',
  email: 'mailto:ausiaam83@gmail.com',
  phone: 'tel:+8801538288739'
} as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  verySlow: 1.0
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Form Validation Rules
export const FORM_VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  subject: {
    minLength: 5,
    maxLength: 100
  },
  message: {
    minLength: 10,
    maxLength: 1000
  }
} as const;

// SEO Keywords
export const SEO_KEYWORDS = [
  'web developer',
  'frontend developer',
  'react developer',
  'nextjs',
  'typescript',
  'bangladesh',
  'portfolio',
  'web development',
  'ui/ux',
  'javascript',
  'nodejs',
  'mongodb',
  'firebase'
] as const;
