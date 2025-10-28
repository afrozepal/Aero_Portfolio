import React from 'react';
import Image from 'next/image';

interface AnimatedLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  src, 
  alt, 
  width = 300, 
  height = 300,
  className = ""
}) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-full animate-spin-slow hover:animate-pulse transition-all duration-300 hover:scale-105 ${className}`}
          priority
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
