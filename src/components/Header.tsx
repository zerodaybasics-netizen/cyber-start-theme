import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src={logo} alt="ZeroDay Basics Logo" className="h-12 w-12" />
          <span className="text-2xl font-bebas text-primary-foreground tracking-wider">
            ZeroDay Basics
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Syllabus', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-primary-foreground font-orbitron text-sm uppercase tracking-wider hover:text-accent transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <button className="md:hidden text-primary-foreground">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
