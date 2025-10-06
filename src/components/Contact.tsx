import { useEffect, useState, useRef } from 'react';
import { Mail, Phone, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@scmhealthtech.com',
      href: 'mailto:contact@scmhealthtech.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 123 456 7890',
      href: 'tel:+27123456789',
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

            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-burgundy font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-burgundy font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-burgundy font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-burgundy font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-emerald/10 border border-emerald rounded-lg text-emerald">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-300 rounded-lg text-red-600">
                    Failed to send message. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gold text-burgundy py-4 rounded-lg font-bold text-lg hover-glow transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
