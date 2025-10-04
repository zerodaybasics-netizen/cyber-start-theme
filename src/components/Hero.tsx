import binaryBg from '@/assets/binary-background.jpg';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${binaryBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bebas text-accent mb-6 tracking-wide">
          Your First Step to<br />Cyber Security
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground font-roboto mb-8 max-w-2xl mx-auto">
          Turn curiosity into ethical hacking skills.
        </p>
        <Button
          onClick={() => scrollToSection('about')}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-orbitron uppercase tracking-wider cyber-glow border-2 border-accent"
        >
          Start Learning <i className="fas fa-arrow-down ml-2"></i>
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-accent text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
