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
      className="py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-emerald-500 mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              A showcase of innovative solutions spanning <span className="text-purple-600 font-semibold">AI</span>,{' '}
              <span className="text-emerald-600 font-semibold">mobile</span>, and{' '}
              <span className="text-amber-600 font-semibold">web development</span>
            </p>
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-purple-600"></div>
              <p className="mt-4 text-gray-700">Loading projects...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={`${project.name}-${index}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 hover:border-purple-400 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-emerald-500 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white truncate">{project.name}</h3>
                        <span className="text-xs text-amber-200 font-medium">{project.language}</span>
                      </div>
                      {project.demoUrl === 'private' && (
                        <span className="bg-amber-400 text-purple-900 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                          Private
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {project.demoUrl === 'private' ? (
                        <div className="flex items-center justify-center gap-2 bg-gray-400 text-white px-4 py-2.5 rounded-lg flex-1 text-sm font-medium">
                          <Github className="h-4 w-4" />
                          <span>Private Repo</span>
                        </div>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2.5 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex-1 text-sm font-medium"
                        >
                          <Github className="h-4 w-4" />
                          <span>View Code</span>
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl !== 'private' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-2.5 rounded-lg hover:bg-emerald-600 transition-colors duration-200 text-sm font-medium"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
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
