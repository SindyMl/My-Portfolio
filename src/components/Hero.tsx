import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #4A0E1A 0%, #2E7D32 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 flex justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <div className="absolute inset-0 bg-gold rounded-full animate-pulse opacity-50"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-gold to-emerald rounded-full flex items-center justify-center text-6xl sm:text-7xl font-bold text-burgundy">
              SM
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory mb-4">
          Sindy Ml
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gold mb-6 font-semibold">
          Developer & HealthTech Innovator
        </p>
        <p className="text-base sm:text-lg md:text-xl text-ivory/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building mobile and web apps with AI solutions—open to bringing any tech idea to life!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="bg-gold text-burgundy px-8 py-4 rounded-lg font-semibold text-lg hover-glow transition-all duration-300 w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#business"
            className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-burgundy transition-all duration-300 w-full sm:w-auto"
          >
            Explore Business
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gold mx-auto" />
        </div>
      </div>
    </section>
  );
}
