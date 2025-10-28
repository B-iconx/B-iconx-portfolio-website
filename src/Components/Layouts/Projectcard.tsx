

// ProjectCard Component
interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<{ project: ProjectItem; index: number; progress: number }> = ({ project, index, progress }) => {
  const cardProgress = Math.max(0, Math.min(1, (progress - index * 0.25) * 4));
  
  const scale = 1 - (1 - cardProgress) * 0.05;
  const yOffset = (1 - cardProgress) * 40;
  const opacity = 0.3 + cardProgress * 0.7;

  return (
    <div
      className="absolute w-full transition-all duration-300"
      style={{
        transform: `translateY(${yOffset}px) scale(${scale})`,
        opacity: opacity,
        zIndex: index,
      }}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
        <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <span className="text-white text-lg font-semibold relative z-10">{project.title}</span>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-5 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.codeLink && (
              <a
                href={project.codeLink}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Code
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
 export default ProjectCard