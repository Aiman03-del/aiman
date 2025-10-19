'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const fadeInUp = () => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    }
  });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Badge */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp()}
          transition={{ delay: 0, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-block border border-gray-400 rounded-full px-6 py-2 bg-white shadow-sm">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
              Contact Section
            </h3>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp()}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
            Get In Touch
          </h2>

          <motion.div
            className="w-20 h-[2px] bg-black mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light">
            Let’s create something extraordinary together. I’d love to hear about your idea or project!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Section */}
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp()}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-serif font-semibold text-black mb-8">Let’s Connect</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "ausiaam83@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+8801538288739" },
                  { icon: MapPin, label: "Location", value: "Mirsarai, Chattogram" }
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-black text-white rounded-lg mr-4 group-hover:bg-gray-800 transition-colors duration-300">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-black font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-serif font-semibold text-black mb-6">Follow My Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Github, label: "GitHub", href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-4 bg-gray-100 hover:bg-black text-black hover:text-white rounded-lg transition-all duration-300 group"
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp()}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-black mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {["name", "email"].map((field) => (
                  <motion.div key={field} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor={field} className="block text-sm font-medium text-black mb-2 capitalize">
                      {field} *
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder={field === "email" ? "you@example.com" : "Your full name"}
                    />
                  </motion.div>
                ))}
              </div>

              {["subject", "message"].map((field) => (
                <motion.div key={field} whileFocus={{ scale: 1.02 }}>
                  <label htmlFor={field} className="block text-sm font-medium text-black mb-2 capitalize">
                    {field} *
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  ) : (
                    <input
                      type="text"
                      id={field}
                      name={field}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  )}
                </motion.div>
              ))}

              <Button type="submit" size="lg" className="w-full gap-2">
                Send Message
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp()}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-black mb-4">
              Prefer a Quick Call?
            </h3>
            <p className="text-gray-600 mb-6">
              Sometimes a chat works best. Book a free 15-minute consultation today.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Schedule a Call</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
