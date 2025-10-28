import React, { useState } from 'react';
import SkillBar from '../Layouts/Skillsbar';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
  category: string;
}

interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
  description: string;
}


const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories: SkillCategory[] = [

     {
      title: "Frontend Development",
      emoji: "🎨",
      description: "Modern UI/UX implementation and frameworks",
      skills: [
        { name: "JavaScript", percentage: 75, icon: "JS", color: "#1e293b", category: "Frontend" },
        { name: "TypeScript", percentage: 70, icon: "TS", color: "#334155", category: "Frontend" },
        { name: "React.js", percentage: 82, icon: "⚛️", color: "#475569", category: "Frontend" },
        { name: "Jquery", percentage: 76, icon: "🔰", color: "#64748b", category: "Frontend" },
        { name: "TailwindCss", percentage: 73, icon: "▲", color: "#64748b", category: "Frontend" },
        { name: "Bootstrap", percentage: 75, icon: "🔅", color: "#64748b", category: "Frontend" },
        { name: "HTML/CSS", percentage: 90, icon: "🎯", color: "#0f172a", category: "Frontend" },
      ]
    },

    {
      title: "Backend Development",
      emoji: "⚙️",
      description: "Server-side architecture and API development",
      skills: [
        { name: "Python Django", percentage: 72, icon: "🐍", color: "#1e293b", category: "Backend" },
        // { name: "FastAPI", percentage: 85, icon: "⚡", color: "#334155", category: "Backend" },
        // { name: "PHP Laravel", percentage: 85, icon: "💎", color: "#475569", category: "Backend" },
        // { name: "Node.js", percentage: 80, icon: "🟢", color: "#64748b", category: "Backend" },
        { name: "RESTful API", percentage: 60, icon: "🔗", color: "#0f172a", category: "Backend" },
      ]
    },
   
    {
      title: "Database & Technologies",
      emoji: "📱",
      description: "Data management and cross-platform development",
      skills: [
        { name: "MySQL", percentage: 58, icon: "🐘", color: "#1e293b", category: "Database" },
        { name: "SQLite", percentage: 75, icon: "🐬", color: "#334155", category: "Database" },
        { name: "Git", percentage: 65, icon: "📱", color: "#475569", category: "Technologies" },
        { name: "Github", percentage: 70, icon: "📲", color: "#64748b", category: "Technologies" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 px-4 md:px-10 ">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-500 flex items-center justify-center">
              <span className="text-white text-xl">💼</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-1">
                Expertise Overview
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-200 to-slate-600">
                Technical Capabilities
              </h2>
            </div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-900 via-gray-400 to-transparent mb-6 ml-15"></div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed ml-15">
            Comprehensive proficiency in frontend development with a focus on scalable architecture, 
            modern frameworks, and industry best practices.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative px-8 py-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/30'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{category.emoji}</span>
                  <div className="text-left">
                    <div className="font-semibold">{category.title}</div>
                    {activeTab === index && (
                      <div className="text-xs text-gray-300 mt-0.5">
                        {category.description}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Active indicator */}
                {activeTab === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="relative min-h-[500px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeTab === index
                  ? 'opacity-100'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-sm text-gray-600 font-medium">
                      {category.skills.length} Skills
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      delay={skillIndex * 120}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-400">
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <span>Proficiency levels based on my professional experience and project complexity</span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;