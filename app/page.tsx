'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsContainer from '../components/ProjectsContainer';
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
      <section id="projects">
        <ProjectsContainer />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </>
  );
}
