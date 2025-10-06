import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Code, Zap } from 'lucide-react';
import logo from '../images/logo.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Developer', 'HealthTech Innovator', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-gold/50 rounded-full animate-bounce"></div>
        <Sparkles className="absolute top-20 right-20 text-gold/30 animate-pulse" size={24} />
        <Code className="absolute bottom-20 left-20 text-emerald/30 animate-bounce" size={20} />
        <Zap className="absolute top-1/3 right-1/3 text-purple-400/30 animate-pulse" size={18} />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute top-20 left-10 w-20 h-20 border-2 border-gold/20 rotate-45 animate-float"></div>
        <div className="floating-shape absolute bottom-32 right-20 w-16 h-16 border-2 border-emerald/20 rounded-full animate-float-delayed"></div>
        <div className="floating-shape absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-purple-500/10 to-gold/10 transform rotate-12 animate-float-slow"></div>
      </div>

      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold via-gold to-gold/70 rounded-full blur-lg opacity-40 group-hover:opacity-70 animate-pulse transition-opacity duration-300"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
              <img
                src={logo}
                alt="Business Logo"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Text Header */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gold mb-4 tracking-tight drop-shadow-lg">
            Sindiswa Chantell Mulondo
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 typewriter">
              <span className="inline-block min-w-0 transition-all duration-500">
                {texts[currentText]}
              </span>
              <span className="animate-pulse text-gold">|</span>
            </p>
          </div>
        </div>

        {/* Description with unique styling */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-6">
            Building mobile and web apps with
            <span className="text-gold font-semibold"> AI solutions</span>—open to bringing any
            <span className="text-gold font-semibold"> tech idea</span> to life!
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
            <span className="px-4 py-2 bg-gold/20 rounded-full border border-gold/50 text-gold font-semibold">
              Mobile Development
            </span>
            <span className="px-4 py-2 bg-gold/20 rounded-full border border-gold/50 text-gold font-semibold">
              Web Applications
            </span>
            <span className="px-4 py-2 bg-gold/20 rounded-full border border-gold/50 text-gold font-semibold">
              AI Integration
            </span>
          </div>
        </div>

        {/* CTA Buttons with enhanced design */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
            style={{
              backgroundColor: '#D4AF37',
              color: '#1B5E20'
            }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(212, 175, 55, 0.9)' }}></div>
          </a>
          <a
            href="#business"
            className="group relative px-8 py-4 bg-transparent border-2 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
            style={{
              borderColor: '#D4AF37'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span className="relative z-10">Explore Business</span>
          </a>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white/70 text-sm tracking-wider">SCROLL TO EXPLORE</p>
          <div className="animate-bounce p-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}>
            <ChevronDown className="h-6 w-6" style={{ color: '#1B5E20' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
