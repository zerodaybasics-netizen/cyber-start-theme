const modules = [
  { title: 'Getting Started', icon: 'fa-play-circle' },
  { title: 'Networking Basics', icon: 'fa-network-wired' },
  { title: 'Cryptography Basics', icon: 'fa-lock' },
  { title: 'Operating System Basics', icon: 'fa-desktop' },
  { title: 'Web Basics', icon: 'fa-globe' },
  { title: 'Phases of Ethical Hacking', icon: 'fa-users-cog' },
  { title: 'Attacker\'s Mindset', icon: 'fa-brain' },
  { title: 'Cyber Hygiene & Safety', icon: 'fa-hand-sparkles' },
  { title: 'Advanced Techniques', icon: 'fa-code' },
  { title: 'Final Wrap-Up', icon: 'fa-graduation-cap' },
];

const Syllabus = () => {
  return (
    <section id="syllabus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bebas text-center mb-16 text-foreground">
          Course <span className="text-accent">Syllabus</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border-2 border-accent/30 hover:border-accent transition-all duration-300 cyber-glow cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl text-accent group-hover:scale-110 transition-transform">
                  <i className={`fas ${module.icon}`}></i>
                </div>
                <h3 className="text-xl font-bebas text-foreground group-hover:text-accent transition-colors">
                  {module.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
