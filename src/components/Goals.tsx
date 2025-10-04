const goals = [
  {
    icon: 'fa-lightbulb',
    title: 'Spark Curiosity',
    description: 'Spark curiosity in beginners',
  },
  {
    icon: 'fa-user-secret',
    title: 'Hacker Mindset',
    description: 'Teach hacker mindset ethically',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Online Safety',
    description: 'Build online safety awareness',
  },
  {
    icon: 'fa-certificate',
    title: 'Certifications',
    description: 'Provide live sessions & certifications',
  },
];

const Goals = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bebas text-center mb-16 text-foreground">
          Project Goals & <span className="text-accent">Objectives</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border-2 border-border hover:border-accent transition-all duration-300 cyber-glow text-center"
            >
              <div className="mb-4">
                <i className={`fas ${goal.icon} text-5xl text-accent`}></i>
              </div>
              <h3 className="text-2xl font-bebas mb-3 text-foreground">{goal.title}</h3>
              <p className="text-muted-foreground font-roboto">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
