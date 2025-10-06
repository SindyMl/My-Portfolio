import { useEffect, useState, useRef } from 'react';
import { Mail, Phone, Github, MapPin } from 'lucide-react';

export default function Contact() {
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
  }, []);  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sindiswamulondo@gmail.com',
      href: 'mailto:sindiswamulondo@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 60 915 7967',
      href: 'tel:+27609157967',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@SindyMl',
      href: 'https://github.com/SindyMl',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Johannesburg, South Africa',
      href: '#',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4 text-center">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-burgundy mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.label === 'GitHub' ? '_blank' : undefined}
                      rel={info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
                    >
                      <div className="bg-emerald rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-ivory" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{info.label}</p>
                        <p className="font-semibold text-burgundy">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-emerald/10 rounded-lg p-6 border-2 border-emerald">
                <h4 className="font-bold text-burgundy mb-2 text-lg">Based in South Africa</h4>
                <p className="text-gray-700">
                  Working with clients globally, delivering innovative solutions from the heart of Africa.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-2xl font-bold text-burgundy mb-6 text-center">Ready to Start Your Project?</h4>
              <div className="text-center space-y-4">
                <p className="text-gray-700 text-lg">
                  I'm available for freelance projects and collaborations. Let's discuss how we can bring your ideas to life!
                </p>
                <div className="bg-gradient-to-r from-gold/10 to-emerald/10 rounded-lg p-6 border-2 border-gold/20">
                  <p className="font-semibold text-burgundy mb-2">Preferred Contact Method:</p>
                  <a 
                    href="mailto:sindiswamulondo@gmail.com" 
                    className="inline-flex items-center gap-2 bg-gold text-burgundy px-6 py-3 rounded-lg font-bold text-lg hover-glow transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    Email Me Directly
                  </a>
                </div>
                <p className="text-sm text-gray-600">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
