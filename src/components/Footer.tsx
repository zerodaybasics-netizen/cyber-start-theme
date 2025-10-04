import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="ZeroDay Basics Logo" className="h-16 w-16" />
          </div>
          
          <h3 className="text-3xl font-bebas mb-8 tracking-wider">ZeroDay Basics</h3>
          
          <div className="space-y-4 mb-8 font-roboto">
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-phone text-accent"></i>
              <span>+91 95679 22498 / +91 82899 37800</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-envelope text-accent"></i>
              <a href="mailto:zerodaybasics@gmail.com" className="hover:text-accent transition-colors">
                zerodaybasics@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-globe text-accent"></i>
              <a href="https://www.zerodaybasics.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                www.zerodaybasics.com
              </a>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-accent hover:bg-accent transition-all cyber-glow"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-accent hover:bg-accent transition-all cyber-glow"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
          
          <p className="text-lg font-orbitron tracking-wide mb-6">
            <span className="text-accent">ZeroDay Basics</span> – Where Cybersecurity Starts.
          </p>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/70">
              © 2025 ZeroDay Basics | Where Cybersecurity Starts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
