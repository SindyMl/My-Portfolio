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
    { name: 'Java', icon: Code, color: 'text-emerald' },
    { name: 'Dart', icon: Code, color: 'text-emerald' },
    { name: 'JavaScript', icon: Code, color: 'text-emerald' },
    { name: 'Python', icon: Code, color: 'text-emerald' },
    { name: 'C++', icon: Cpu, color: 'text-emerald' },
    { name: 'HTML/CSS', icon: Globe, color: 'text-emerald' },
    { name: 'React', icon: Globe, color: 'text-emerald' },
    { name: 'Django', icon: Database, color: 'text-emerald' },
    { name: 'Flutter', icon: Smartphone, color: 'text-emerald' },
    { name: 'ML Basics', icon: Brain, color: 'text-emerald' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-8 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate second-year Computer Science student at Wits University,
                specializing in mobile apps, web development, and AI solutions. From building
                an AI agent for a Snake game to developing full-featured POS systems, I thrive
                on turning ideas into reality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With a freelance background and a drive for innovation, I'm excited about
                healthtech but ready to collaborate on any project. As CEO of SCM HealthTech,
                I'm committed to delivering secure, innovative solutions that make a difference.
              </p>
              <p className="text-lg text-emerald font-semibold">
                Let's build something amazing together!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-emerald/20">
              <h3 className="text-2xl font-bold text-burgundy mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-3 p-3 bg-ivory rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Icon className={`h-5 w-5 ${skill.color}`} />
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-burgundy to-emerald rounded-lg p-8 text-center">
            <p className="text-xl md:text-2xl text-ivory font-semibold">
              Proven in AI & Mobile Development — Ready to bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
