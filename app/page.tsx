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
      
      {/* About Section */}
      <section className="py-8 md:py-16 lg:py-20">
        <AboutSection />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-16 lg:py-20">
        <ProjectsContainer />
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 md:py-16 lg:py-20">
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-16 lg:py-20">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
