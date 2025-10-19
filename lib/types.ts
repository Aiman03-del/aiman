// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';

// Theme Types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isAnimating: boolean;
  animationComplete: () => void;
}

// Animation Types
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Service Types
export interface Service {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

export interface AdditionalService {
  name: string;
  price: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

// Component Props Types
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Contact Info Types
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

// Social Link Types
export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}
