import React from 'react';
import AnimatedLogo from './AnimatedLogo';

interface HeroSectionProps {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  logo, 
  title, 
  subtitle 
}) => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <AnimatedLogo 
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
        />
        
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
