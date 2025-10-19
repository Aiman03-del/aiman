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
    <section id="services" className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Badge */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block border border-gray-400 rounded-full px-6 py-2 bg-white shadow-sm">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
              Services & Pricing
            </h3>
          </div>
        </motion.div>

        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professional Services
          </motion.h2>

          <motion.div
            className="w-20 h-[2px] bg-black mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto font-light"
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
              className={`relative bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular 
                  ? 'border-black scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-black text-white rounded-lg mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.duration}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">{service.price}</span>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? "default" : "secondary"} 
                  size="lg" 
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-semibold text-black mb-8 text-center">
            Additional Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="p-3 bg-black text-white rounded-lg w-fit mx-auto mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">{service.name}</h4>
                <p className="text-2xl font-bold text-black mb-2">{service.price}</p>
                <p className="text-gray-600 text-sm">{service.description}</p>
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
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and create something amazing together. 
            All projects include free consultation and detailed project planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <a href="#contact">Get Free Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Portfolio</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
