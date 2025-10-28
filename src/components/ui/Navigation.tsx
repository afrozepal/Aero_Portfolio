import React from 'react';

interface NavigationProps {
  brandName?: string;
  navItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Navigation: React.FC<NavigationProps> = ({ 
  brandName = "Afroze Pal",
  navItems = [
    { label: "Work", href: "#work" },
    { label: "Profile", href: "#profile" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" }
  ]
}) => {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <span className="text-black font-bold text-sm">H</span>
        </div>
        <h1 className="text-white text-xl font-semibold">{brandName}</h1>
      </div>
      
      <div className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            className="text-white hover:text-purple-300 transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-white rounded-full opacity-60"></div>
        <div className="w-6 h-6 bg-white rounded-full opacity-60"></div>
      </div>
    </nav>
  );
};

export default Navigation;
