import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Top */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            {/* Glass Navigation Bar */}
            <nav className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-full blur-sm"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl shadow-black/10">
                <div className="flex items-center space-x-8">
                  <button
                    onClick={scrollToTop}
                    className="relative text-sm font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="relative text-sm font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">About</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="relative text-sm font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Skills</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="relative text-sm font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Projects</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="relative text-sm font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Contact</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Bottom */}
      <header className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="container mx-auto px-4 pb-4">
          <div className="flex items-center justify-center">
            {/* Glass Navigation Bar */}
            <nav className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-full blur-sm"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3 shadow-2xl shadow-black/10">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={scrollToTop}
                    className="relative text-xs font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="relative text-xs font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">About</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="relative text-xs font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Skills</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="relative text-xs font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Projects</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="relative text-xs font-semibold text-white hover:text-blue-300 transition-all duration-300 group"
                  >
                    <span className="relative z-10">Contact</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

