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
    // Complete list of all GitHub repositories
    const selectedProjects: Project[] = [
      {
        name: 'YouthMind',
        description: 'YouthMind Shield: AI-powered mobile app for South African youth (15-24) tackling mental health crises linked to unemployment & poverty. Features daily mood tracking, burnout risk predictions, and gamification.',
        techStack: ['Dart', 'Flutter', 'AI/ML', 'Firebase'],
        githubUrl: 'https://github.com/SindyMl/YouthMind',
        demoUrl: 'private',
        language: 'Dart',
      },
      {
        name: 'Snake-AI',
        description: 'AI-powered Java agent for Wits Snake competition! Uses A* pathfinding for shortest routes to fresh apples (>0 value), evasive maneuvers (2-step lookahead) to dodge walls/enemies/longer snakes.',
        techStack: ['Java', 'A* Algorithm', 'AI'],
        githubUrl: 'https://github.com/SindyMl/Snake-AI',
        language: 'Java',
      },
      {
        name: 'Estate Management App',
        description: 'Streamlines post-death administration. Securely connects families, legal representatives, and institutions to automate notifications, document submission, and process tracking.',
        techStack: ['Dart', 'Flutter', 'Firebase'],
        githubUrl: 'https://github.com/SindyMl/estate_management_app',
        demoUrl: 'private',
        language: 'Dart',
      },
      {
        name: 'POS System',
        description: 'Modern Flutter-based Point of Sale system for retail businesses. Features real-time sales processing, barcode scanning, inventory management, Firebase cloud sync, multi-payment support (cash/card).',
        techStack: ['Dart', 'Flutter', 'Firebase', 'Barcode Scanning'],
        githubUrl: 'https://github.com/SindyMl/pos',
        language: 'Dart',
      },
      {
        name: 'Hills Motors React',
        description: 'Modern car dealership management system built with React 18, TypeScript & Redux. Features dynamic vehicle catalog with live API specs, comprehensive admin dashboard with analytics, responsive design.',
        techStack: ['TypeScript', 'React', 'Redux', 'Tailwind CSS'],
        githubUrl: 'https://github.com/SindyMl/Hills-Motors-React',
        demoUrl: 'private',
        language: 'TypeScript',
      },
      {
        name: 'MobileMarket',
        description: 'Modern Android app for buying and selling items locally. Users can register, log in, browse listings, post products for sale, and search for items. Features a clean interface and secure authentication.',
        techStack: ['Java', 'Android', 'Firebase', 'Real-time Database'],
        githubUrl: 'https://github.com/SindyMl/Mobilemarket',
        language: 'Java',
      },
      {
        name: 'Ukuthula',
        description: 'Discreet mobile application designed to address critical challenges of personal safety and access to justice. Provides a secure and reliable way for individuals to proactively create a safe environment.',
        techStack: ['Dart', 'Flutter', 'Emergency Services'],
        githubUrl: 'https://github.com/SindyMl/Ukuthula',
        demoUrl: 'private',
        language: 'Dart',
      },
      {
        name: 'Aegis',
        description: 'Enhance personal safety with this innovative app. Instantly connect with emergency services & contacts via SOS alerts. Securely store vital medical info for critical situations.',
        techStack: ['Mobile Development', 'Emergency Services', 'Security'],
        githubUrl: 'https://github.com/SindyMl/Aegis',
        demoUrl: 'private',
        language: 'Mobile',
      },
      {
        name: 'AgriConnect',
        description: 'Empowers South African farmers with real-time crop prices and daily tips. Built with Flutter and Firebase, offers a simple, elegant UI and AdMob monetization.',
        techStack: ['JavaScript', 'Flutter', 'Firebase', 'AdMob'],
        githubUrl: 'https://github.com/SindyMl/AgriConnect',
        demoUrl: 'private',
        language: 'JavaScript',
      },
      {
        name: 'Shadow Economy Micro-Task Marketplace',
        description: 'Web app addressing lack of micro-job access for informal workers across South Africa. Connects workers with micro-tasks, enabling income generation in the informal economy.',
        techStack: ['JavaScript', 'Web Development', 'Marketplace'],
        githubUrl: 'https://github.com/SindyMl/Shadow-Economy-Micro-Task-Marketplace',
        language: 'JavaScript',
      },
      {
        name: 'Symptom Tracker',
        description: 'Healthcare application for tracking symptoms, monitoring health patterns, and generating health reports for medical consultation.',
        techStack: ['TypeScript', 'React', 'Healthcare'],
        githubUrl: 'https://github.com/SindyMl/Symptom_Tracker',
        language: 'TypeScript',
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
        description: 'Discover the Tshanduko Still Water App, a sleek platform bringing pure hydration to Dzingahe. Features water-themed design and animations. Explore 500ml, 1L, 10L, and 25L purified bottle options.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Animations'],
        githubUrl: 'https://github.com/SindyMl/Tshanduko-Still-Water',
        language: 'HTML',
      },
      {
        name: 'ElectroLearn',
        description: 'Tablet-optimized Flutter app for transitioning to Nated Electrical Engineering (N4-N6, Heavy Current). Offers study resources, circuit simulations, planner, progress tracking, Q&A, and LinkedIn-verification.',
        techStack: ['C++', 'Flutter', 'Education'],
        githubUrl: 'https://github.com/SindyMl/ElectroLearn',
        language: 'C++',
      },
      {
        name: 'Study Resource Tracker',
        description: 'Mobile application that allows users to add, categorize, and search for study resources (e.g., PDFs, links, or notes) by course or topic. Simple tool tailored to students.',
        techStack: ['JavaScript', 'Mobile', 'Education'],
        githubUrl: 'https://github.com/SindyMl/Study-Resource-Tracker',
        language: 'JavaScript',
      },
      {
        name: 'Community Event Finder',
        description: 'Simple web app that allows users to view and filter upcoming events based on categories (e.g., tech, career fairs, social) and location (e.g., Johannesburg or Cape Town).',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/SindyMl/Community-Event-Finder',
        language: 'HTML',
      },
      {
        name: 'Analysis of Algorithms',
        description: 'Course on problem solving covering Complexity Analysis and Graphs. Problems include: Scheduling, Matching, Path Planning, Project Planning, and Fault Tolerance.',
        techStack: ['Java', 'Algorithms', 'Data Structures'],
        githubUrl: 'https://github.com/SindyMl/Analysis-of-Algorithms',
        language: 'Java',
      },
      {
        name: 'DishCovery',
        description: 'Combines "dish" with "discovery," highlighting recipe exploration. Designed to help users discover recipes, plan meals, and track dietary habits, promoting healthier eating patterns.',
        techStack: ['Java', 'Mobile', 'Food & Health'],
        githubUrl: 'https://github.com/SindyMl/DishCovery',
        language: 'Java',
      },
      {
        name: 'FNB Academy 2025',
        description: 'Projects created from the FNB App of the Year Academy 2025.',
        techStack: ['HTML', 'Web Development'],
        githubUrl: 'https://github.com/SindyMl/Fnb-Academy-2025',
        language: 'HTML',
      },
      {
        name: 'C++ 1st Year Projects',
        description: 'Collection of C++ projects from first year computer science studies.',
        techStack: ['C++', 'Academic'],
        githubUrl: 'https://github.com/SindyMl/CPlusPlus-1st-year-projects',
        language: 'C++',
      },
      {
        name: 'Python 1st Year Projects',
        description: 'Collection of Python projects from first year computer science studies.',
        techStack: ['Python', 'Academic'],
        githubUrl: 'https://github.com/SindyMl/Python-1st-year-projects',
        language: 'Python',
      },
    ];

    setProjects(selectedProjects);
    setIsLoading(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-100 via-white to-purple-50 relative overflow-hidden min-h-screen"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-gold/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-36 h-36 bg-gradient-to-r from-emerald/10 to-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-emerald mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed px-4">
              A showcase of innovative solutions spanning <span className="text-purple-700 font-semibold">AI</span>,
              <span className="text-emerald-700 font-semibold"> mobile</span>, and
              <span className="text-gold font-semibold"> web development</span>
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald border-t-gold"></div>
              <p className="mt-4 text-gray-800">Loading projects...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-glow border-2 border-gray-100 hover:border-gold transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-r from-burgundy to-emerald p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-ivory">{project.name}</h3>
                        <span className="text-xs text-gold font-medium">{project.language}</span>
                      </div>
                      {project.demoUrl === 'private' && (
                        <span className="bg-gold/20 text-ivory px-2 py-1 rounded text-xs font-semibold border border-gold/30">
                          Private
                        </span>
                      )}
                    </div>
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
