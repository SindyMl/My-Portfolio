import { Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-burgundy text-ivory py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gold font-bold text-lg">SCM HealthTech</p>
            <p className="text-sm mt-1">Building the future, one line of code at a time</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/SindyMl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@scmhealthtech.com"
              className="hover:text-gold transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+27123456789"
              className="hover:text-gold transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Sindy Ml. All rights reserved.
            </p>
            <p className="text-xs text-ivory/70 mt-1">
              Proudly South African
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
