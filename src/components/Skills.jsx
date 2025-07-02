const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 88 },
    { name: 'MongoDB', level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              Technologies I Work With
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex flex-wrap justify-center gap-6 text-4xl">
                <span title="HTML" className="hover:scale-110 transition-transform">🌐</span>
                <span title="CSS" className="hover:scale-110 transition-transform">🎨</span>
                <span title="JavaScript" className="hover:scale-110 transition-transform">📜</span>
                <span title="React" className="hover:scale-110 transition-transform">⚛️</span>
                <span title="Node.js" className="hover:scale-110 transition-transform">🟢</span>
                <span title="MongoDB" className="hover:scale-110 transition-transform">🍃</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

