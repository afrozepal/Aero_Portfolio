"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  link?: string;
  github?: string;
}

const WorkSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("work");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
        id: "EquiShare",
        title: "EquiShare",
        description: "AI-powered donation management platform with blockchain-based transparency and fairness. Focused on social impact and accessibility.",
        tech: ["React", "Node.js", "Blockchain", "AI", "Web3"],
        image: "/logo/aero.jpg",
        category: "Social Impact",
        link: "#",
        github: "https://github.com/afrozepal"
    },
    {
        id:"Have a Seat",
        title: "Have a Seat",
        description: "A platform for booking seats in a restaurant. It allows users to book seats in a restaurant and view the available seats.",
        tech: ["Next.js", "Python", "FastAPI", "PostgreSQL" , "Tailwind CSS", "Expo"],
        image: "/logo/aero.jpg",
        category: "Web Application and Mobile Application",
        link: "#",
        github: "https://github.com/afrozepal"
    },
    {
      id: "earth-guard",
      title: "Earth Guard",
      description: "Waste management system focusing on software design principles with analysis. Features comprehensive use cases and class diagrams for efficient waste tracking and management.",
      tech: ["NetBeans", "JavaScript"],
      image: "/logo/aerologo.png",
      category: "Environmental Tech",
      link: "#",
      github: "https://github.com/afrozepal"
    },
    {
      id: "novel-voyage",
      title: "Novel Voyage",
      description: "An interactive book club application using the MERN stack, enhancing user engagement through real-time features. Connect with fellow readers and discover new books.",
      tech: ["React", "MERN Stack", "Node.js", "MongoDB", "JavaScript"],
      image: "/logo/logo.png",
      category: "Web Application",
      link: "#",
      github: "https://github.com/afrozepal"
    },
    {
      id: "flavor-fusion",
      title: "Flavor Fusion",
      description: "Developed a recipe generator application using the MERN stack, allowing users to find and share recipes with intelligent recommendations based on available ingredients.",
      tech: ["React", "MERN Stack", "Node.js", "MongoDB", "JavaScript", "Python"],
      image: "/logo/a2.png",
      category: "Food Tech",
      link: "#",
      github: "https://github.com/afrozepal"
    },
    {
      id: "pulse-guard",
      title: "Pulse Guard",
      description: "Created a machine learning model to predict heart disease using Python and relevant ML libraries. Advanced healthcare analytics for early disease detection.",
      tech: ["Python", "Machine Learning"],
      image: "/logo/aero.jpg",
      category: "Healthcare AI",
      link: "#",
      github: "https://github.com/afrozepal"
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting digital experiences that combine technical precision with creative vision
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-500 cursor-pointer flex flex-col h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-gray-700 text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.link && (
                    <a
                      href="https://github.com/afrozepal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-center"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href="https://github.com/afrozepal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-purple-400 hover:text-purple-300 transition-all duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              {activeProject === project.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 3 && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? 'Show Less' : `Show More (${projects.length - 3} more)`}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-gray-300 mb-6">
            Interested in collaborating? Let's build something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
