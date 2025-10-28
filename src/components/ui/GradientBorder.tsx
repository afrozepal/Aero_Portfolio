import React from 'react';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBorder: React.FC<GradientBorderProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-sm"></div>
      <div className="absolute inset-1 bg-black rounded-lg"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;
