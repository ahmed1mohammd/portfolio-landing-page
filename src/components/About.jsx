import { Code, Coffee, Users, Award, MapPin, Calendar, GraduationCap, Briefcase, Heart, Target, Lightbulb, Zap, Rocket, Globe, Shield, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15', color: 'from-blue-500 to-blue-600' },
    { icon: Users, label: 'Project Success', value: '100%', color: 'from-green-500 to-green-600' },
    { icon: Award, label: 'Years Experience', value: '2+', color: 'from-purple-500 to-purple-600' },
    { icon: TrendingUp, label: 'Focus Area', value: 'Backend', color: 'from-orange-500 to-orange-600' },
  ];

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Cairo, Egypt' },
    { icon: Calendar, label: 'Experience', value: '2+ Years' },
    { icon: GraduationCap, label: 'Education', value: 'Computer Science Student' },
    { icon: Briefcase, label: 'Status', value: 'Available for Freelance' },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code & Best Practices',
      description: 'Writing maintainable and scalable code that follows industry standards and best practices'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Always seeking to improve and adopt new technologies to stay current with industry trends'
    },
    {
      icon: Target,
      title: 'Problem-Solving Mindset',
      description: 'Focusing on finding efficient solutions for complex challenges with analytical thinking'
    },
    {
      icon: CheckCircle,
      title: 'Commitment',
      description: 'Delivering on time and staying dedicated to project goals with unwavering focus'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-pulse"></div>
              <Users className="w-10 h-10 text-primary relative z-10" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
              A dedicated Full-Stack Developer with a passion for creating innovative digital solutions that drive business success
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              Transforming ideas into reality through cutting-edge technology and exceptional user experiences
            </p>
            <div className="flex items-center justify-center mt-10">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-40"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mx-6"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-40"></div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Personal Story */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-background p-8 rounded-2xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                  <Rocket className="mr-4 h-8 w-8 text-primary" />
                  Professional Journey
                </h3>
                
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    <div className="pl-8">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Hello! I'm <span className="text-primary font-bold text-xl">Ahmed Zayed</span>, a passionate Full-Stack Developer 
                        with 2+ years of real-world project experience. My journey began with a strong curiosity about how web applications work, 
                        which has evolved into a focused expertise in Backend Development, building RESTful APIs, authentication systems, 
                        and working with databases to create robust and scalable solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full"></div>
                    <div className="pl-8">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        I specialize in <span className="text-primary font-semibold">Node.js</span>, 
                        <span className="text-primary font-semibold"> Express.js</span>, and <span className="text-primary font-semibold">MongoDB</span> for backend development, 
                        with additional experience in <span className="text-primary font-semibold">React.js</span>, 
                        <span className="text-primary font-semibold">TypeScript</span>, and <span className="text-primary font-semibold">Tailwind CSS</span> on the frontend. 
                        My approach focuses on writing clean, maintainable code while following best practices and industry standards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    <div className="pl-8">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        My goal is to keep improving as a Full-Stack Developer, contributing to scalable projects, 
                        and eventually leading my own development team or startup. I'm passionate about continuous learning, 
                        always seeking to adopt new technologies and improve my skills. I'm available for freelance projects 
                        and open to collaborations that challenge me to grow and deliver exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Personal Info & Stats */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Professional Information */}
              <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                  <Briefcase className="mr-4 h-6 w-6 text-primary" />
                  Professional Info
                </h3>
                <div className="space-y-6">
                  {personalInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-muted-foreground font-medium">{info.label}</span>
                          <div className="text-foreground font-semibold text-lg">{info.value}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 text-center hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Professional Call to Action */}
          <motion.div 
            className="text-center bg-gradient-to-r from-primary/5 to-accent/5 p-12 rounded-3xl border border-primary/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-pulse"></div>
                <Star className="w-10 h-10 text-primary relative z-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Vision into Reality?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm passionate about collaborating with forward-thinking individuals and organizations to create 
                exceptional digital experiences that drive meaningful results and exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="bg-gradient-to-r from-primary to-accent text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <CheckCircle className="w-5 h-5" />
                  Start a Project
                </motion.button>
                <motion.button
                  className="border-2 border-primary text-primary px-12 py-4 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Code className="w-5 h-5" />
                  View My Work
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

