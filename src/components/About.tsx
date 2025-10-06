import { useEffect, useState, useRef } from 'react';
import { Code, Database, Smartphone, Brain, Globe, Cpu } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    // Frontend Technologies
    { name: 'Java', icon: Code, color: 'text-emerald' },
    { name: 'Dart', icon: Code, color: 'text-emerald' },
    { name: 'JavaScript', icon: Code, color: 'text-emerald' },
    { name: 'Python', icon: Code, color: 'text-emerald' },
    { name: 'C++', icon: Cpu, color: 'text-emerald' },
    { name: 'HTML/CSS', icon: Globe, color: 'text-emerald' },
    { name: 'React', icon: Globe, color: 'text-emerald' },
    { name: 'Flutter', icon: Smartphone, color: 'text-emerald' },
    
    // Backend Technologies
    { name: 'PHP', icon: Database, color: 'text-purple-600' },
    { name: 'SQL', icon: Database, color: 'text-purple-600' },
    { name: 'Firebase', icon: Database, color: 'text-purple-600' },
    { name: 'LAMP Server', icon: Database, color: 'text-purple-600' },
    { name: 'Django', icon: Database, color: 'text-purple-600' },
    
    // AI & Others
    { name: 'ML Basics', icon: Brain, color: 'text-gold' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gold/10 to-emerald/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-emerald mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <p className="text-lg text-gray-800 leading-relaxed">
                  I'm a passionate <span className="text-purple-700 font-semibold">second-year Computer Science student</span> at Wits University,
                  specializing in mobile apps, web development, and AI solutions. From building
                  an AI agent for a Snake game to developing full-featured POS systems, I thrive
                  on <span className="text-emerald-700 font-semibold">turning ideas into reality</span>.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <p className="text-lg text-gray-800 leading-relaxed">
                  With a <span className="text-gold font-semibold">freelance background</span> and a drive for innovation, I'm excited about
                  healthtech but ready to collaborate on any project. As CEO of <span className="text-purple-700 font-semibold">SCM HealthTech</span>,
                  I'm committed to delivering secure, innovative solutions that make a difference.
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl text-emerald-700 font-bold bg-gradient-to-r from-emerald-600 to-gold bg-clip-text text-transparent">
                  Let's build something amazing together! ✨
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-all duration-300">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-emerald-700 bg-clip-text text-transparent mb-8 text-center">
                Technical Arsenal
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group relative flex items-center space-x-3 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-emerald/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon className={`relative h-6 w-6 ${skill.color} group-hover:text-gold transition-colors duration-300`} />
                      <span className="relative text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800 via-purple-900 to-slate-800 rounded-2xl p-8 text-center shadow-2xl border border-gold/20">
            <p className="text-xl md:text-2xl text-white font-semibold">
              Proven in AI & Mobile Development — Ready to bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
