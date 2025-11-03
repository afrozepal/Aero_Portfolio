'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, Github, Linkedin, Twitter, Calendar } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:afrozenajam@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+15550123456';
  };

  return (
    <footer className="bg-dark-950 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-primary-500 mr-3" />
                <span className="text-2xl font-bold font-display text-white">
                  WebDev Pro
                </span>
              </div>
              
              <p className="text-muted mb-6 max-w-md leading-relaxed">
                Transforming businesses through innovative web development solutions. 
                We create stunning, functional websites that drive results and exceed expectations.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleEmailClick}
                  className="flex items-center text-muted hover:text-primary-300 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>afrozenajam@gmail.com</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handlePhoneClick}
                  className="flex items-center text-muted hover:text-primary-300 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (555) 012-3456</span>
                </motion.button>
                
                <div className="flex items-center text-muted">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Worldwide Services</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection('services')}
                    className="text-muted hover:text-primary-300 transition-colors"
                  >
                    Services
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection('portfolio')}
                    className="text-muted hover:text-primary-300 transition-colors"
                  >
                    Portfolio
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection('booking')}
                    className="text-muted hover:text-primary-300 transition-colors"
                  >
                    Book Consultation
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleEmailClick}
                    className="text-muted hover:text-primary-300 transition-colors"
                  >
                    Contact Us
                  </motion.button>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                <li className="text-muted">Website Development</li>
                <li className="text-muted">Responsive Design</li>
                <li className="text-muted">E-commerce Solutions</li>
                <li className="text-muted">Maintenance & SEO</li>
                <li className="text-muted">Custom Applications</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-12 border-t border-primary-500/20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold font-display mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Book a free consultation today 
              and let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('booking')}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Free Consultation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us Now</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted text-sm mb-4 md:mb-0"
            >
              © 2024 WebDev Pro. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-500/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
