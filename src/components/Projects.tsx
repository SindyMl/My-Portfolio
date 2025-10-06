import { useEffect, useState, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  language: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fallbackProjects: Project[] = [
      {
        name: 'Snake-AI',
        description: 'Intelligent AI agent for Snake game featuring advanced pathfinding algorithms and decision-making logic to navigate and maximize score.',
        techStack: ['Java', 'AI Algorithms', 'Pathfinding'],
        githubUrl: 'https://github.com/SindyMl/Snake-AI',
        language: 'Java',
      },
      {
        name: 'pos',
        description: 'Comprehensive Flutter-based Point of Sale system with inventory management, real-time synchronization, and intuitive user interface.',
        techStack: ['Dart', 'Flutter', 'Firebase'],
        githubUrl: 'https://github.com/SindyMl/pos',
        language: 'Dart',
      },
      {
        name: 'MobileMarket',
        description: 'Android marketplace application enabling users to buy and sell products with secure transactions and user-friendly interface.',
        techStack: ['Java', 'Android SDK', 'Firebase'],
        githubUrl: 'https://github.com/SindyMl/MobileMarket',
        language: 'Java',
      },
      {
        name: 'Prodigy',
        description: 'JavaScript-based application showcasing modern web development practices and interactive user experiences.',
        techStack: ['JavaScript', 'HTML5', 'CSS3'],
        githubUrl: 'https://github.com/SindyMl/Prodigy',
        language: 'JavaScript',
      },
      {
        name: 'Study Resource Tracker',
        description: 'Organizational tool for managing and tracking study materials, resources, and academic progress with intuitive categorization.',
        techStack: ['JavaScript', 'React', 'Local Storage'],
        githubUrl: 'https://github.com/SindyMl/Study-Resource-Tracker',
        language: 'JavaScript',
      },
      {
        name: 'Community Event Finder',
        description: 'Web application for discovering and filtering local community events with location-based search and category filters.',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        githubUrl: 'https://github.com/SindyMl/Community-Event-Finder',
        language: 'HTML',
      },
      {
        name: 'DishCovery',
        description: 'Recipe discovery and meal planning application helping users find, save, and organize their favorite dishes.',
        techStack: ['Java', 'Android', 'API Integration'],
        githubUrl: 'https://github.com/SindyMl/DishCovery',
        language: 'Java',
      },
    ];

    setProjects(fallbackProjects);
    setIsLoading(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-b from-ivory to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, mobile, and web development
          </p>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald border-t-gold"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-glow border-2 border-transparent hover:border-gold transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-r from-burgundy to-emerald p-4">
                    <h3 className="text-xl font-bold text-ivory">{project.name}</h3>
                    <span className="text-xs text-gold font-medium">{project.language}</span>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-4 min-h-[100px]">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-emerald/10 text-emerald text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-burgundy text-ivory px-4 py-2 rounded-lg hover:bg-emerald transition-colors duration-300 flex-1 justify-center"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gold text-burgundy px-4 py-2 rounded-lg hover:bg-emerald hover:text-ivory transition-colors duration-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
