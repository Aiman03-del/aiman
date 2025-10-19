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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="mb-2">
              {mounted && (
                <Image
                  src={theme === 'light' ? "/images/logo.png" : "/images/light-logo.png"}
                  alt="Aiman Logo"
                  width={100}
                  height={100}
                  className="w-30 h-30 hover:opacity-80 transition-opacity duration-300"
                  quality={100}
                />
              )}
              {!mounted && (
                <Image
                  src="/images/logo.png"
                  alt="Aiman Logo"
                  width={100}
                  height={100}
                  className="w-30 h-30 hover:opacity-80 transition-opacity duration-300"
                  quality={100}
                />
              )}
            </div>
            <p 
              className="mb-4 opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              A passionate developer creating amazing digital experiences. 
              Let&apos;s build something great together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/au_siaam" 
                className="hover:opacity-70 transition duration-300"
                style={{ color: 'var(--foreground)' }}
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/au-siaam-721011204/" 
                className="hover:opacity-70 transition duration-300"
                style={{ color: 'var(--foreground)' }}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/Aiman03-del" 
                className="hover:opacity-70 transition duration-300"
                style={{ color: 'var(--foreground)' }}
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="hover:opacity-70 transition duration-300"
                  style={{ color: 'var(--foreground)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:opacity-70 transition duration-300"
                  style={{ color: 'var(--foreground)' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="hover:opacity-70 transition duration-300"
                  style={{ color: 'var(--foreground)' }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:opacity-70 transition duration-300"
                  style={{ color: 'var(--foreground)' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:opacity-70 transition duration-300"
                  style={{ color: 'var(--foreground)' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              Contact Info
            </h4>
            <div 
              className="space-y-2 opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              <p>Email: aiman@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: Your City, Country</p>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-8 pt-8 text-center opacity-70"
          style={{ color: 'var(--foreground)' }}
        >
          <p>&copy; 2025 Aiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
