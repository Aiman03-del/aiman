import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="mb-2">
              <Image
                src="/images/logo.png"
                alt="Aiman Logo"
                width={100}
                height={100}
                className="w-30 h-30 hover:opacity-80 transition-opacity duration-300"
                quality={100}
              />
            </div>
            <p className="text-black mb-4">
              A passionate developer creating amazing digital experiences. 
              Let's build something great together.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/au_siaam" className="text-black hover:text-gray-600 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/au-siaam-721011204/" className="text-black hover:text-gray-600 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/Aiman03-del" className="text-black hover:text-gray-600 transition duration-300">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black hover:text-gray-600 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-gray-600 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-black hover:text-gray-600 transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black hover:text-gray-600 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-gray-600 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-black">
              <p>Email: aiman@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Location: Your City, Country</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 text-center text-black">
          <p>&copy; 2025 Aiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
