import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
  category: string;
}


const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const increment = skill.percentage / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= skill.percentage) {
          setCurrentPercentage(skill.percentage);
          clearInterval(timer);
        } else {
          setCurrentPercentage(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, skill.percentage, delay]);

  const getExpertiseLevel = (percentage: number) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <div 
      ref={skillRef}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
            <span className="text-xl">{skill.icon}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900 text-base block">{skill.name}</span>
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              {getExpertiseLevel(skill.percentage)}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="font-bold text-gray-900 text-lg">
            {currentPercentage}
          </span>
          <span className="text-gray-400 text-sm">%</span>
        </div>
      </div>
      
      <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative"
          style={{
            width: `${currentPercentage}%`,
            background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 100%)`
          }}
        >
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              animation: isHovered ? 'shimmer 2s infinite' : 'none'
            }}
          />
        </div>
      </div>

      {/* Subtle divider */}
      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
};
export default SkillBar