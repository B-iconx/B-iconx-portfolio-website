import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin,Award } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
  borderColor: string;
  type: string;
}

const ExperienceCard: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative mb-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side (timeline dot and line) - Desktop */}
        <div className={`hidden md:block ${isEven ? 'order-1' : 'order-2'}`}>
          <div className={`text-right ${isEven ? 'pr-12' : 'pl-12 text-left'}`}>
            <div className="inline-block">
              <div className={`px-6 py-3 rounded-full font-bold text-white shadow-lg ${exp.color}`}>
                {exp.period}
              </div>
              <div className="mt-4 text-gray-400 font-medium flex items-center gap-2 justify-end">
                <MapPin size={16} />
                {exp.location}
              </div>
            </div>
          </div>
        </div>

        {/* Right side (content card) */}
        <div className={`${isEven ? 'order-2' : 'order-1'}`}>
          <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-l-4`}
               style={{ borderLeftColor: exp.borderColor }}>
            
            {/* Card Header */}
            <div className={`p-6 ${exp.color} bg-opacity-5`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${exp.color} text-white transition-all duration-300 ${
                    isHovered ? 'scale-110' : ''
                  }`}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-slate-800 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-300 mt-1">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Mobile period and location */}
              <div className="md:hidden flex items-center gap-4 text-sm text-gray-300 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              {exp.achievements.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center">
                      <Award size={16} className="text-gray-700" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:scale-150 transition-transform duration-200"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {exp.technologies.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Tech Stack
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline dot - Desktop */}
      <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className={`w-6 h-6 rounded-full ${exp.color} border-4 border-white shadow-lg transition-all duration-300 ${
          isHovered ? 'scale-125' : ''
        }`}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
        {/* Pulse effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 w-6 h-6 rounded-full bg-slate-700 animate-ping opacity-20"></div>
        )}
      </div>
    </div>
  );
};

// Experience Section Component
const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
      {
      title: "Frontend/Django Developer",
      company: "Devnex",
      period: "Feb 2025 - Present",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Develop and maintain full-stack web applications using Django and modern frontend technologies. Build responsive user interfaces and implement robust backend features for client projects.",
      achievements: [
        "Developed responsive web applications serving potential users monthly",
        "Reduced page load times by 45% through frontend optimization techniques",
        "Collaborated with cross-functional teams to deliver projects on schedule"
      ],
      technologies: ["Django", "React", "JavaScript", "HTML/CSS", "PostgreSQL", "Git", "REST APIs"],
      color: "bg-blue-500",
      borderColor: "#3B82F6"
    },
    {
      title: "Web Developer",
      company: "R-Tech Global Enterprise",
      period: "2024 - Present",
      location: "Remote",
      type: "Contract",
      description: "Developed a full-stack e-commerce web application with modern frameworks. Built responsive user interfaces and implemented backend functionality for product management, shopping cart, and checkout processes.",
      achievements: [
        "Built  a fully functional e-commerce platform with payment integration",
        "Implemented responsive design ensuring seamless experience across all devices",
        "Integrated secure authentication and authorization for user accounts"
      ],
      technologies: ["React", "TypeScript",  "Django", "PostgreSQL", "Git", "Tailwind CSS"],
      color: "bg-indigo-700",
      borderColor: "#4338ca"
    },
    {
        title: "Web Developer",
        company: "Devnex",
        period: "2023 - 2024",
        location: "Lagos, Nigeria",
        type: "Intern",
        description: "Contributed to the development of web applications using Django and FastAPI. Assisted in building RESTful APIs and learned database optimization techniques under senior developer guidance.",
        achievements: [
          "Built and tested API endpoints serving 5K+ daily requests",
          "Improved page load times by 30% through code optimization",
          "Collaborated on team projects using Git and Agile methodologies"
        ],
        technologies: ["Django", "FastAPI", "SQlite", "HTML/CSS", "JavaScript", "Git"],
        color: "bg-teal-700",
        borderColor: "#0f766e"
    }
  ];

  return (
    <section id="experience" className="relative py-10 px-4 md:px-10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-500 flex items-center justify-center">
              <span className="text-white text-xl">💼</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-1">
                Career Timeline
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-200 to-slate-600">
                Professional Experience
              </h2>
            </div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-900 via-gray-400 to-transparent ml-15"></div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed ml-15">
            
            A comprehensive overview of my professional journey, showcasing impactful contributions 
            and continuous growth across diverse technical roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-300 via-gray-300 to-slate-400"></div>

          {/* Experience Cards */}
          <div>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;