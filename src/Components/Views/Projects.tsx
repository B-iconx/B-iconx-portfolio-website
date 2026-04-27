import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, Code2, Rocket } from 'lucide-react';
import naijalance from '../../assets/naijalance.png';
import construction from '../../assets/port.png';
import ecommerce from '../../assets/project3.png';
import smsgateway from '../../assets/project2.png';
import vtu from '../../assets/vtu.jpg';

type Card = {
  title: string
  description: string
  tags: string[]
  bgImage: string
  features: string[]
  codeLink?: string
  demoLink?: string
}

const cards: Card[] = [

  {
    title: "NaijaLance",
    description: "A freelance platform that connects Nigerian freelancers with companies hiring globally. Features AI-powered job matching, real-time application tracking — fast, reliable, and built for Africa.",
    tags: ["Nextjs", "TypeScript", "Tailwind", "Node.js"],
    bgImage: naijalance,
    features: [
      "AI-powered job matching ",
      "Real-time tracking and interview scheduling",
      "Company hiring dashboard ",
      "Freelancer discovery with role, salary, and remote filters",
    ],
    codeLink: "https://github.com/B-iconx",
    demoLink: "#",
  },
  {
    title: "VTU Services Platform",
    description: "Developed a virtual top-up platform that allows users to purchase airtime, data bundles, pay bills, and manage subscriptions with seamless payment integration.",
    tags: ["React", "Django", "MySQL", "Payment API"],
    bgImage: vtu,
    features: [
      "Airtime and data bundle purchases",
      "Bill payment (electricity, cable TV)",
      "Automated transaction processing",
      "Wallet system with transaction history"
    ],
    codeLink: 'https://github.com/B-iconx',
    demoLink: '#',
  },
  {
    title: "Construction Company website",
    description: "Created a visually stunning landing page for a pop decoration company, showcasing their services, portfolio, and contact information with an engaging and modern design.",
    tags: ["React", "Tailwind", "Typescript", "UI/UX"],
    bgImage: construction,
    features: [
      "Responsive design for all devices",
      "Interactive image gallery",
      "Contact form integration",
      "Smooth scroll animations"
    ],
    codeLink: 'https://github.com/B-iconx',
    demoLink: "https://www.dawncrownpop.com/",
  },
  {
    title: "E-Commerce Platform",
    description: "Built a complete e-commerce solution with advanced product catalog, intelligent search, shopping cart, secure authentication, order processing, and integrated payment system.",
    tags: ["React", "Tailwind", "Typescript", "Django", "MySQL"],
    bgImage: ecommerce,
    features: [
      "Dynamic product filtering and search",
      "Real-time inventory management",
      "Order tracking system",
      "Admin dashboard with analytics"
    ],
    codeLink: 'https://github.com/B-iconx',
    demoLink: '#',
  },
  {
    title: "SMS Gateway Web Application",
    description: "Built a comprehensive SMS gateway platform that enables businesses to send bulk messages, manage contacts, and track delivery status with an intuitive web interface.",
    tags: ["React", "Django", "Onbuka API", "MySQL"],
    bgImage: smsgateway,
    features: [
      "Bulk SMS sending capabilities",
      "Contact list management",
      "Real-time delivery tracking",
      "SMS scheduling and automation"
    ],
    codeLink: 'https://github.com/B-iconx',
    demoLink: '#',
  },
 
];

// Individual card component so useState hook works per card
const StickyCard: React.FC<{ c: Card; i: number }> = ({ c, i }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="card">
      <div className="card-inner">

        {/* Left: Content */}
        <div className="card-content">
          <h2 className="card-title">{c.title}</h2>
          <p className="card-description">{c.description}</p>

          <div className="card-features">
            <h4 className="card-section-label">
              <Rocket size={14} />
              Key Features
            </h4>
            <ul className="features-list">
              {c.features.map((f, idx) => (
                <li key={idx}>
                  <span className="feature-bullet">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-stack">
            <h4 className="card-section-label">
              <Code2 size={14} />
              Tech Stack
            </h4>
            <div className="card-tags">
              {c.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* Action buttons — hidden on mobile via CSS */}
          <div className="card-actions">
            {c.demoLink && (
              <a href={c.demoLink} className="btn-demo">
                <Eye size={16} />
                View Project
              </a>
            )}
            {c.codeLink && (
              <a href={c.codeLink} className="btn-code">
                <Github size={16} />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Right: Image with mobile touch overlay */}
        <div
          className="card-visual"
          style={{
            backgroundImage: `url(${c.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onTouchStart={() => setTouched(true)}
          onTouchEnd={() => setTimeout(() => setTouched(false), 1800)}
        >
          <div className={`card-visual-overlay ${touched ? 'touched' : ''}`}>
            {c.demoLink && (
              <a href={c.demoLink} target="_blank" rel="noopener noreferrer" aria-label="View demo">
                <Eye size={22} />
              </a>
            )}
            {c.codeLink && (
              <a href={c.codeLink} target="_blank" rel="noopener noreferrer" aria-label="View code">
                <Github size={22} />
              </a>
            )}
          </div>
        </div>

        <div className="vignette" aria-hidden />
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-10 px-4 md:px-10">

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
              <span className="text-white text-xl">🚀</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-1">
                Portfolio Showcase
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-200 to-slate-600">
                Featured Projects
              </h2>
            </div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-900 via-gray-400 to-transparent ml-15"></div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed ml-15">
            A showcase of my best work - real-world solutions that solve complex problems and deliver exceptional user experiences.
          </p>
        </div>

        <section id="projects">
          <div id="work" className="cards-container2">
            {cards.map((c, i) => (
              <StickyCard key={i} c={c} i={i} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub for more projects and open-source contributions
            </p>
            <a
              href="https://github.com/B-iconx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-700 to-gray-800 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
            >
              <Github size={20} />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;