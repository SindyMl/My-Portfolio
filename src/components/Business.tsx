import { useEffect, useState, useRef } from 'react';
import { Smartphone, Globe, Brain, HeartPulse, CheckCircle, Star } from 'lucide-react';

export default function Business() {
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

  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps built with Flutter and Java for Android, delivering seamless user experiences.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications using React, Django, and cutting-edge technologies for optimal performance.',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent systems leveraging machine learning and AI algorithms to solve complex problems and enhance functionality.',
    },
    {
      icon: HeartPulse,
      title: 'HealthTech Innovation',
      description: 'Specialized health technology solutions including symptom trackers, patient management systems, and telemedicine platforms.',
    },
  ];

  const testimonials = [
    {
      name: 'Client A',
      role: 'Startup Founder',
      text: 'Exceptional work! Sindy delivered our mobile app ahead of schedule with top-notch quality.',
      rating: 5,
    },
    {
      name: 'Client B',
      role: 'Healthcare Provider',
      text: 'The healthtech solution transformed our patient engagement. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="business"
      className="py-20 bg-gradient-to-b from-burgundy to-emerald"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ivory mb-4">
              Scale Your Ideas with SCM HealthTech
            </h2>
            <p className="text-xl text-gold max-w-3xl mx-auto">
              As CEO, I deliver innovative, secure solutions across any domain. Bring your idea—let's build it together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-lg p-6 shadow-xl hover-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-emerald rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-8 w-8 text-ivory" />
                  </div>
                  <h3 className="text-xl font-bold text-burgundy mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-ivory rounded-lg p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-burgundy mb-8 text-center">
              Why Choose SCM HealthTech?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Proven track record in mobile and web development',
                'Expertise in AI and machine learning integration',
                'Specialized knowledge in healthtech solutions',
                'Versatile and open to projects in any domain',
                'Fast turnaround with attention to detail',
                'Secure, scalable, and maintainable code',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-emerald flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-ivory mb-8 text-center">
              Client Testimonials
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-burgundy">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-gold text-burgundy px-12 py-4 rounded-lg font-bold text-xl hover-glow transition-all duration-300"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
