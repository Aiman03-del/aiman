'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  
  // Only use theme after component is mounted to avoid hydration issues
  const themeContext = useTheme();
  const { theme } = mounted ? themeContext : { theme: 'light' };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer 
      className="py-20 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              {mounted && (
                <Image
                  src={theme === 'light' ? "/images/logo.png" : "/images/light-logo.png"}
                  alt="Aiman Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 hover:opacity-80 transition-opacity duration-300"
                  quality={100}
                />
              )}
              {!mounted && (
                <Image
                  src="/images/logo.png"
                  alt="Aiman Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 hover:opacity-80 transition-opacity duration-300"
                  quality={100}
                />
              )}
            </div>
            <p 
              className="mb-6 text-sm sm:text-base opacity-70 leading-relaxed"
              style={{ color: 'var(--foreground)' }}
            >
              A passionate developer creating amazing digital experiences. 
              Let&apos;s build something great together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/au_siaam" 
                className="hover:opacity-70 transition duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ color: 'var(--foreground)' }}
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/au-siaam-721011204/" 
                className="hover:opacity-70 transition duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ color: 'var(--foreground)' }}
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://github.com/Aiman03-del" 
                className="hover:opacity-70 transition duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ color: 'var(--foreground)' }}
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 
              className="text-base sm:text-lg font-semibold mb-3 sm:mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-sm sm:text-base hover:opacity-70 transition duration-300 block py-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm sm:text-base hover:opacity-70 transition duration-300 block py-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-sm sm:text-base hover:opacity-70 transition duration-300 block py-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-sm sm:text-base hover:opacity-70 transition duration-300 block py-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm sm:text-base hover:opacity-70 transition duration-300 block py-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 
              className="text-base sm:text-lg font-semibold mb-3 sm:mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              Contact Info
            </h4>
            <div 
              className="space-y-2 opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              <p className="text-sm sm:text-base">Email: aiman@example.com</p>
              <p className="text-sm sm:text-base">Phone: +1 (555) 123-4567</p>
              <p className="text-sm sm:text-base">Location: Your City, Country</p>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 text-center opacity-70 border-t"
          style={{ 
            color: 'var(--foreground)',
            borderColor: 'var(--foreground)'
          }}
        >
          <p className="text-xs sm:text-sm">&copy; 2025 Aiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
