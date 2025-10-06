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
    // CUSTOMIZE YOUR PROJECTS HERE:
    // To show different GitHub repositories, simply update the entries below
    // Change the name, description, techStack, githubUrl, and language for each project
    const selectedProjects: Project[] = [
      {
        name: 'Snake-AI',
        description: 'Intelligent AI agent for Snake game featuring advanced pathfinding algorithms and decision-making logic to navigate and maximize score.',
        techStack: ['Java', 'AI Algorithms', 'Pathfinding'],
        githubUrl: 'https://github.com/SindyMl/Snake-AI',
        language: 'Java',
      },
      {
        name: 'POS System',
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
        name: 'EstateMobile App',
        description: 'Mobile application for real estate management with property listings, client management, and booking system.',
        techStack: ['Flutter', 'Dart', 'Firebase'],
        githubUrl: 'https://github.com/SindyMl/Estatemobile_app',
        demoUrl: 'private',
        language: 'Dart',
      },
      {
        name: 'Prodigy',
        description: 'JavaScript-based application showcasing modern web development practices and interactive user experiences.',
        techStack: ['JavaScript', 'HTML5', 'CSS3'],
        githubUrl: 'https://github.com/SindyMl/Prodigy',
        language: 'JavaScript',
      },
      {
        name: 'Tshanduko Still Water',
        description: 'Water management system for tracking and monitoring still water resources with data visualization and reporting.',
        techStack: ['JavaScript', 'React', 'Node.js'],
        githubUrl: 'https://github.com/SindyMl/Tshanduko-Still-Water',
        language: 'JavaScript',
      },
      {
        name: 'Symptom Tracker',
        description: 'Healthcare application for tracking symptoms, monitoring health patterns, and generating health reports for medical consultation.',
        techStack: ['React', 'Firebase', 'Chart.js'],
        githubUrl: 'https://github.com/SindyMl/Symptom_Tracker',
        language: 'JavaScript',
      },
      {
        name: 'ElectroLearn',
        description: 'Educational platform for electronics learning with interactive tutorials, circuit simulations, and progress tracking.',
        techStack: ['React', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/SindyMl/ElectroLearn',
        language: 'JavaScript',
      },
      {
        name: 'Hills Motors React',
        description: 'Motor dealership website with vehicle inventory management, customer portal, and online booking system.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/SindyMl/Hills-Motors-React',
        demoUrl: 'private',
        language: 'TypeScript',
      },
    ];

    setProjects(selectedProjects);
    setIsLoading(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-100 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-gold/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-36 h-36 bg-gradient-to-r from-emerald/10 to-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-emerald mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative solutions spanning <span className="text-purple-700 font-semibold">AI</span>,
              <span className="text-emerald-700 font-semibold"> mobile</span>, and
              <span className="text-gold font-semibold"> web development</span>
            </p>
          </div>

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
                      {project.demoUrl === 'private' ? (
                        <div className="flex items-center gap-2 bg-gray-500 text-ivory px-4 py-2 rounded-lg flex-1 justify-center cursor-not-allowed">
                          <Github className="h-4 w-4" />
                          <span className="text-sm font-medium">Repository is Private</span>
                        </div>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-burgundy text-ivory px-4 py-2 rounded-lg hover:bg-emerald transition-colors duration-300 flex-1 justify-center"
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl !== 'private' && (
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
