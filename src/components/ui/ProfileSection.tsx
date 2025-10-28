"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ProfileSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("profile");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React", level: 95, color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
    { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
    { name: "Python", level: 85, color: "from-yellow-400 to-orange-400" },
    { name: "Machine Learning", level: 80, color: "from-purple-400 to-pink-400" },
    { name: "FastAPI", level: 82, color: "from-teal-400 to-blue-400" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "User-Focused",
      description: "Every solution starts with understanding the user's needs and creating experiences that truly work for people."
    },
    {
      icon: "✨",
      title: "Creative Precision",
      description: "Merging technical accuracy with creative vision to build interfaces that feel human and meaningful."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Embracing new technologies and approaches to solve problems in ways that create lasting impact."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Believing that the best solutions come from diverse perspectives working together toward common goals."
    }
  ];

  return (
    <section id="profile" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer, creative thinker, and believer in technology that tells stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Image & Intro */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full">
                  <Image
                    src="/logo/aero.jpg"
                    alt="Afroze Pal"
                    fill
                    className="rounded-full object-cover border-4 border-white/20"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Afroze Pal</h3>
                <p className="text-purple-300 text-lg mb-4">Software Developer & Creative Thinker</p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in building smart, user-focused solutions using React, Next.js, Node.js, Python, and Machine Learning. 
                  What sets me apart is how I merge technical precision with creativity, crafting interfaces that feel human and 
                  finding beauty in functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Skills & Values */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Skills */}
            {/* <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-6">Technical Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Values */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className={`p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-400/50 transition-all duration-300 cursor-pointer ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setActiveSkill(value.title)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <h5 className="text-white font-semibold mb-2">{value.title}</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                    {activeSkill === value.title && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-3xl font-bold text-white mb-8">My Story</h4>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Over time, I've worked on diverse projects, from AI-powered tools and restaurant booking platforms to social impact apps like 
                <span className="text-purple-300 font-semibold"> EquiShare</span>, which focuses on transparent donation management and 
                blockchain-based fairness — a project close to my heart because it aligns with values of justice, accessibility, and innovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Beyond code, I'm also a poetry enthusiast — it helps me bring emotion and empathy into the products I build. I believe technology 
                should not only solve problems but also tell stories and create impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether it's a startup idea, small business website, or a large-scale system, I approach every project with curiosity, dedication, 
                and the goal to make it meaningful. Let's collaborate — to build, design, and innovate something that makes a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
