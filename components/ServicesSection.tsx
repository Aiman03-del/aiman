'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Clock, Code } from 'lucide-react';
import { Button } from './ui/button';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      name: 'Basic Website',
      price: '$299',
      duration: '1-2 weeks',
      description: 'Perfect for small businesses and personal portfolios',
      features: [
        'Responsive Design',
        '5 Pages Maximum',
        'Contact Form',
        'Basic SEO',
        'Mobile Optimization',
        '1 Month Support'
      ],
      popular: false,
      icon: Code
    },
    {
      id: 2,
      name: 'Professional Website',
      price: '$599',
      duration: '2-3 weeks',
      description: 'Ideal for growing businesses and professional services',
      features: [
        'Custom Design',
        'Up to 10 Pages',
        'Advanced Contact Forms',
        'SEO Optimization',
        'Analytics Integration',
        'CMS Integration',
        '3 Months Support',
        'Performance Optimization'
      ],
      popular: true,
      icon: Star
    },
    {
      id: 3,
      name: 'E-commerce Website',
      price: '$999',
      duration: '3-4 weeks',
      description: 'Complete online store with payment integration',
      features: [
        'Product Catalog',
        'Shopping Cart',
        'Payment Gateway',
        'Order Management',
        'Inventory System',
        'Admin Dashboard',
        'Security Features',
        '6 Months Support'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const additionalServices = [
    {
      name: 'Website Maintenance',
      price: '$99/month',
      icon: Clock,
      description: 'Regular updates, backups, and security monitoring'
    },
    {
      name: 'Performance Optimization',
      price: '$199',
      icon: Zap,
      description: 'Speed optimization and performance improvements'
    },
    {
      name: 'SEO Services',
      price: '$299',
      icon: Star,
      description: 'Search engine optimization and ranking improvements'
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 transition-colors duration-300"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Badge */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div 
            className="inline-block border rounded-full px-6 py-2 shadow-sm"
            style={{
              borderColor: 'var(--foreground)',
              backgroundColor: 'var(--background)'
            }}
          >
            <h3 
              className="text-sm uppercase tracking-[0.2em] font-medium opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Services & Pricing
            </h3>
          </div>
        </motion.div>

        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Services
          </motion.h2>

          <motion.div
            className="w-20 h-[2px] mx-auto mb-6"
            style={{ backgroundColor: 'var(--foreground)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-lg max-w-2xl mx-auto font-light opacity-70"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transparent pricing for professional web development services
          </motion.p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--background)',
                opacity: service.popular ? 1 : 0.8,
                transform: service.popular ? 'scale(1.05)' : 'scale(1)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span 
                    className="px-4 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: 'var(--foreground)',
                      color: 'var(--background)'
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{
                      backgroundColor: 'var(--foreground)',
                      color: 'var(--background)'
                    }}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {service.name}
                    </h3>
                    <p 
                      className="text-sm opacity-70"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {service.duration}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <span 
                    className="text-4xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {service.price}
                  </span>
                  <p 
                    className="mt-2 opacity-70"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span 
                        className="opacity-70"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="default"
                  size="lg" 
                  className="w-full mt-auto"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="backdrop-blur-sm p-8 rounded-xl shadow-sm"
            style={{
              backgroundColor: 'var(--background)',
              opacity: 0.9
            }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-2xl font-serif font-semibold mb-8 text-center"
            style={{ color: 'var(--foreground)' }}
          >
            Additional Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--background)',
                  opacity: 0.8
                }}
              >
                <div 
                  className="p-3 rounded-lg w-fit mx-auto mb-4"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--background)'
                  }}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h4 
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  {service.name}
                </h4>
                <p 
                  className="text-2xl font-bold mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  {service.price}
                </p>
                <p 
                  className="text-sm opacity-70"
                  style={{ color: 'var(--foreground)' }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Ready to Start Your Project?
          </h3>
          <p 
            className="mb-8 max-w-2xl mx-auto opacity-70"
            style={{ color: 'var(--foreground)' }}
          >
            Let&apos;s discuss your requirements and create something amazing together. 
            All projects include free consultation and detailed project planning.
          </p>
          <div className="flex flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="default" size="lg" className="flex-1 sm:flex-none">
              <a href="#contact">Get Free Quote</a>
            </Button>
            <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
              <a href="#projects">View Portfolio</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
