import React from 'react';

interface FooterProps {
  feedText?: string;
  year?: string;
  portfolioText?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  feedText = "Feed ↓",
  year = "2025",
  portfolioText = "Portfolio"
}) => {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="text-white text-lg hover:text-purple-300 transition-colors cursor-pointer">
        {feedText}
      </div>
      
      <div className="text-6xl font-bold text-gray-500 opacity-30">
        {year}
      </div>
      
      <div className="text-4xl font-bold text-white">
        {portfolioText}
      </div>
    </div>
  );
};

export default Footer;
