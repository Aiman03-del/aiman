import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Aiman</h3>
            <p className="text-black mb-4">
              A passionate developer creating amazing digital experiences. 
              Let's build something great together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-600 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition duration-300">
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
