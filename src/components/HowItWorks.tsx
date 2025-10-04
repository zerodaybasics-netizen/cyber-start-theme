const steps = [
  {
    icon: 'fa-lightbulb',
    title: 'Learning',
    description: 'We simplify complex concepts',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Security',
    description: 'Break them into clear steps',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Practice',
    description: 'Guide you through the hacker\'s mindset',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bebas text-center mb-8 text-foreground">
          How We <span className="text-accent">Teach</span>
        </h2>
        
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16 font-roboto">
          We simplify complex concepts, break them into clear steps, and guide you through the 
          hacker's mindset so you can defend with confidence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-accent/10 border-2 border-accent">
                <i className={`fas ${step.icon} text-4xl text-accent`}></i>
              </div>
              <h3 className="text-2xl font-bebas mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground font-roboto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
