import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'HTML5', level: 95, description: 'Semantic markup and accessibility' },
        { name: 'CSS3', level: 90, description: 'Advanced styling and animations' },
        { name: 'JavaScript (ES6+)', level: 92, description: 'Modern JavaScript features' },
        { name: 'React.js', level: 95, description: 'Component-based architecture' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS framework' },
        { name: 'Responsive Design', level: 88, description: 'Mobile-first approach' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚡',
      skills: [
        { name: 'Node.js', level: 88, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 85, description: 'Web application framework' },
        { name: 'RESTful APIs', level: 90, description: 'API design and development' },
        { name: 'Authentication', level: 82, description: 'JWT and session management' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: '🗃️',
      skills: [
        { name: 'MongoDB', level: 85, description: 'NoSQL document database' },
        { name: 'Mongoose', level: 82, description: 'MongoDB object modeling' },
        { name: 'MySQL', level: 80, description: 'Relational database management' },
        { name: 'Database Design', level: 78, description: 'Schema optimization' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🔧',
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'VS Code', level: 95, description: 'Code editor and extensions' },
        { name: 'npm/yarn', level: 88, description: 'Package management' },
        { name: 'Webpack/Vite', level: 75, description: 'Build tools and bundling' }
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: 'devicon-react-original', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: 'from-green-500 to-green-700' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: 'from-green-400 to-green-600' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5', icon: 'devicon-html5-plain', color: 'from-orange-500 to-orange-600' },
    { name: 'CSS3', icon: 'devicon-css3-plain', color: 'from-blue-300 to-blue-500' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Git', icon: 'devicon-git-plain', color: 'from-gray-600 to-gray-800' }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mastery of cutting-edge technologies and frameworks to deliver exceptional digital solutions
            </p>
            <div className="flex items-center justify-center mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-32"></div>
              <div className="w-2 h-2 bg-primary rounded-full mx-4"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-32"></div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills in Category */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-lg font-semibold text-foreground group-hover/skill:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                
                      <div className="w-full bg-muted/50 rounded-full h-3">
                  <motion.div
                          className="bg-gradient-to-r from-primary to-accent h-3 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </motion.div>
                </div>
                    </motion.div>
                  ))}
              </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Technology <span className="text-primary">Stack</span>
            </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Modern tools and frameworks that power exceptional web experiences
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
              <motion.div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${tech.icon} text-2xl text-white`}></i>
                </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    {tech.name}
                  </span>
              </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Expertise */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Professional <span className="text-primary">Expertise</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional capabilities that enhance my development workflow and project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: 'Version Control', 
                  icon: '🔧', 
                  description: 'Git workflows, branching strategies, and collaborative development practices',
                  level: 'Expert'
                },
                { 
                  name: 'API Development', 
                  icon: '🌐', 
                  description: 'RESTful APIs, GraphQL, microservices architecture, and API documentation',
                  level: 'Advanced'
                },
                { 
                  name: 'Database Design', 
                  icon: '🗃️', 
                  description: 'SQL/NoSQL optimization, schema design, and performance tuning',
                  level: 'Advanced'
                },
                { 
                  name: 'DevOps & Deployment', 
                  icon: '🚀', 
                  description: 'CI/CD pipelines, cloud platforms, containerization, and monitoring',
                  level: 'Intermediate'
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-background/30 backdrop-blur-sm p-6 rounded-2xl border border-border/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-20 text-center">
            <motion.div
              className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm p-8 rounded-3xl border border-primary/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Build Something <span className="text-primary">Amazing?</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                With expertise spanning frontend and backend development, database management, and modern development tools, 
                I'm equipped to tackle complex projects and deliver high-quality solutions that exceed expectations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  Modern Frameworks
                </span>
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  Database Expertise
                </span>
                <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  Professional Tools
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

