"use client";

import Image from "next/image";
import { useState } from "react";
import { WorkSection, ProfileSection, ContactSection } from "@/components/ui";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Navigation - Sticky at top */}
      <nav className="sticky top-0 z-50 relative p-0">
        <div className="flex items-center justify-between p-4 md:p-6 backdrop-blur-md bg-black/30 border-b border-white/10">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="relative">
              <Image
                src="/logo/aero.jpg"
                alt="Aero Logo"
                width={30}
                height={30}
                className="rounded-full animate-spin-slow hover:animate-pulse transition-all duration-300 hover:scale-105"
                priority
              />
            </div>
            <h1 className="text-white text-lg md:text-xl font-semibold">Afroze Pal</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#work" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#profile" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group">
              Profile
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-white hover:text-purple-300 transition-colors duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="mailto:afrozepal7@gmail.com" 
              className="text-white hover:text-purple-300 transition-colors duration-300 text-sm bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10"
            >
              afrozepal7@gmail.com
            </a>
            <a 
              href="https://wa.me/923170716760" 
              className="text-white hover:text-green-400 transition-colors duration-300 text-sm bg-green-500/20 px-3 py-2 rounded-lg hover:bg-green-500/30"
            >
              +92 (317) 0716760
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-300 transition-colors duration-300 p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (inside nav for correct stacking) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                <a 
                  href="#home" 
                  className="block text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#work" 
                  className="block text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="#profile" 
                  className="block text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </a>
                <a 
                  href="#contact" 
                  className="block text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a 
                  href="mailto:afrozepal7@gmail.com" 
                  className="block text-white hover:text-purple-300 transition-colors duration-300 text-sm bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  afrozepal7@gmail.com
                </a>
                <a 
                  href="https://wa.me/923170716760" 
                  className="block text-white hover:text-green-400 transition-colors duration-300 text-sm bg-green-500/20 px-3 py-2 rounded-lg hover:bg-green-500/30"
                >
                  +92 (317) 0716760
                </a>
              </div>
            </div>
          </div>
        )}

      </nav>

      {/* Hero Section - Full Height */}
      <section id="home" className="h-screen relative overflow-hidden">
        {/* Video Background - Behind everything */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/herov.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl z-20 animate-pulse-glow" />
        
        {/* Main content */}
        <div className="relative z-30 h-full flex flex-col">
        {/* Main content area */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12">
          {/* Centered content */}
          <div className="text-center text-white max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Welcome to Aero
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the future of technology with our innovative solutions. 
              Building tomorrow's digital experiences today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Schedule a Meet Now
              </a>
              <a 
                href="#work" 
                className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:border-purple-400/60 hover:text-purple-300 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Work Section */}
      <WorkSection />
      
      {/* Profile Section */}
      <ProfileSection />
      
      {/* Contact Section */}
      <ContactSection backgroundImage="/logo/l1.jpg" />
    </div>
  );
}
