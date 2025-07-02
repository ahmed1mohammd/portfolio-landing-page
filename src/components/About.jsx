import { Code, Coffee, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Building the Future, One Line of Code at a Time
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating 
                robust, scalable web applications using modern technologies. My journey began with a 
                curiosity about how websites work, and it has evolved into a passion for crafting 
                digital solutions that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends. Whether it's building a responsive frontend with React or designing 
                efficient backend systems with Node.js, I approach every project with attention to 
                detail and a commitment to excellence.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                excited to take on new challenges and collaborate with like-minded professionals.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-background p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

