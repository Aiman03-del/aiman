'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectGallery from '../components/ProjectGallery';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Stepper from '../components/Stepper';
export default function Home() {


  const sections = ['home', 'about', 'projects', 'services', 'contact'];

  return (
    <>
      <Navbar />
      <Stepper sections={sections} />
      <Hero />
      <AboutSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white text-black">
        <ProjectGallery />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-black">
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </>
  );
}
