'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, ShoppingCart, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Custom websites built with modern technologies and best practices for optimal performance.',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.',
    features: ['Mobile-First', 'Cross-Browser', 'Touch Optimized', 'Fast Loading'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment processing, inventory management, and customer features.',
    features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics'],
  },
  {
    icon: Settings,
    title: 'Maintenance & SEO',
    description: 'Ongoing support, updates, and optimization to keep your website running smoothly.',
    features: ['Regular Updates', 'Security Patches', 'Performance Optimization', 'SEO Monitoring'],
  },
];

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Our <span className="text-primary-400">Services</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your business needs. 
            From concept to launch, we handle every aspect of your digital presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:border-primary-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors"
                >
                  <service.icon className="h-8 w-8 text-primary-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-muted"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('booking')}
                  className="w-full btn-secondary flex items-center justify-center space-x-2 group-hover:bg-primary-500 group-hover:text-white transition-all"
                >
                  <span>Start now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted mb-6">
              Let's discuss your project and create something amazing together. 
              Book a free consultation to explore your options.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('booking')}
              className="btn-primary text-lg px-8 py-4"
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
