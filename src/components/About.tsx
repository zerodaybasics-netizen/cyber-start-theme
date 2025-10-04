const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <i className="fas fa-shield-halved text-6xl text-accent animate-glow"></i>
          </div>
          <h2 className="text-5xl md:text-6xl font-bebas mb-8 text-foreground">
            About <span className="text-accent">ZeroDay Basics</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-roboto">
            ZeroDay Basics is your first step into the world of cybersecurity. We teach you to 
            think like attackers so you can defend like pros. Simple lessons, real hacker mindset, 
            ethical purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
