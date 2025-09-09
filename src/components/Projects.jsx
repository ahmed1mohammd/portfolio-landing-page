import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Calendar, Users, Code2, Database, Globe, Smartphone, Monitor } from 'lucide-react';
import project1 from '../assets/project_placeholder_1.png';
import project2 from '../assets/project_placeholder_2.png';
import project3 from '../assets/project_placeholder_3.png';
import postmanBlog from '../assets/BlogApp.png';
import postmansaraha from '../assets/sarahaApp.png';
import postmanSocial from '../assets/socialApp.png';

import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const frontendProjects = [
    {
      id: 1,
      title: 'Gen Z - Modern E-commerce',
      description: 'A modern frontend website designed for the young generation, focusing on a clean UI, smooth user experience, and interactive product showcasing. Features 20 products including watches and perfumes with a minimalist black & white design theme.',
      image: project1,
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://gen-z-rose.vercel.app',
      githubUrl: 'https://github.com/ahmed1mohammd/Gen-Z.git',
      featured: true,
      category: 'Frontend',
      duration: '2 days',
      teamSize: 'Solo',
      status: 'Live',
      complexity: 'Intermediate'
    },
    {
      id: 2,
      title: 'Aura X - Product Landing',
      description: 'A responsive product landing page designed with modern UI principles. It delivers a clean and engaging layout that adapts seamlessly across all screen sizes, ensuring a smooth user experience with Arabic language support.',
      image: project2,
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://aura-x-brown.vercel.app',
      githubUrl: 'https://github.com/ahmed1mohammd/Aura-v1.git',
      featured: true,
      category: 'Frontend',
      duration: '3 days',
      teamSize: 'Solo',
      status: 'Production',
      complexity: 'Intermediate'
    },
    {
      id: 3,
      title: 'Elharithi - Modern Website',
      description: 'A responsive frontend website built with a modern and minimal design, optimized for speed and usability to provide a smooth browsing experience across all devices. Features clean UI and seamless navigation.',
      image: project3,
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://elharithi.vercel.app',
      githubUrl: 'https://github.com/ahmed1mohammd/elharthe.git',
      featured: true,
      category: 'Frontend',
      duration: '2 days',
      teamSize: 'Solo',
      status: 'Live',
      complexity: 'Intermediate'
    }
  ];

  const backendProjects = [
    {
      id: 4,
      title: 'Saraha-App',
      description: 'A backend system inspired by the "Saraha" concept, enabling users to send and receive anonymous messages securely. Built with robust authentication (JWT), MongoDB for storage, and Express.js APIs for users and messages with strong security.',
      image: postmansaraha,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Postman'],
      liveUrl: 'https://saraha-app-v1.vercel.app',
      githubUrl: 'https://github.com/ahmed1mohammd/Saraha-App-v1.git',
      featured: true,
      category: 'Backend',
      duration: '1 month',
      teamSize: 'Solo',
      status: 'Live',
      complexity: 'Advanced',
      postmanUrl: 'https://documenter.getpostman.com/view/45302673/2sB34kEebu'
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'A backend system for a social media platform inspired by Facebook. Built with TypeScript and Zod for type safety and validation. Includes user authentication, posts, comments, likes, and a secure API layer. Currently in progress and evolving with more features.',
      image: postmanSocial,
      technologies: ['Node.js', 'Express.js', 'TypeScript', 'Zod', 'MongoDB', 'JWT', 'Bcrypt', 'Postman'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ahmed1mohammd/Social-App.git',
      featured: true,
      category: 'Backend',
      duration: '1+ month',
      teamSize: 'Solo',
      status: 'Under Development',
      complexity: 'Advanced',
      postmanUrl: 'https://documenter.getpostman.com/view/45302673/2sB3HnJevA'
    },
    {
      id: 6,
      title: 'Blog App',
      description: 'A blog application that allows users to create, read, update, and delete posts, similar to modern online blogging platforms. It includes user authentication, post management, and a secure backend API for handling content efficiently.',
      image: postmanBlog,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Postman'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ahmed1mohammd/BlogApp-v1.git',
      featured: true,
      category: 'Backend',
      duration: '1 week',
      teamSize: 'Solo',
      status: 'Live',
      complexity: 'Intermediate',
      postmanUrl: 'https://documenter.getpostman.com/view/45302673/2sB2xFfnsY'
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-2 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
        {project.featured && (
            <span className="bg-gradient-to-r from-primary to-accent text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </span>
          )}
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${
            project.status === 'Live' ? 'bg-green-500/90 text-white' :
            project.status === 'In Production' ? 'bg-blue-500/90 text-white' :
            'bg-gray-500/90 text-white'
          }`}>
            {project.status}
          </span>
        </div>
        
        {/* Complexity Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${
            project.complexity === 'Enterprise' ? 'bg-purple-500/90 text-white' :
            project.complexity === 'Advanced' ? 'bg-orange-500/90 text-white' :
            'bg-gray-500/90 text-white'
          }`}>
            {project.complexity}
            </span>
          </div>
        
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-1">
            {project.category === 'Frontend' && <Monitor className="w-4 h-4 text-blue-500" />}
            {project.category === 'Backend' && <Database className="w-4 h-4 text-green-500" />}
            {project.category === 'Full-Stack' && <Code2 className="w-4 h-4 text-purple-500" />}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed text-base">
          {project.description}
        </p>

        {/* Project Meta Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{project.teamSize}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-muted/50 text-muted-foreground px-3 py-1.5 text-sm rounded-lg border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 h-11 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 font-semibold"
            onClick={() => window.open(project.category === 'Backend' && project.postmanUrl ? project.postmanUrl : project.liveUrl, '_blank')}
          >
            <Globe className="mr-2 h-4 w-4" />
            {project.category === 'Backend' ? 'API Docs' : 'Live Demo'}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 h-11 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 font-semibold"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            Source Code
          </Button>
        </div>
      </div>
    </div>
  );

  const allProjects = [...frontendProjects, ...backendProjects];

  const getDisplayedProjects = () => {
    switch (activeTab) {
      case 'frontend':
        return frontendProjects;
      case 'backend':
        return backendProjects;
      default:
        return allProjects;
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-pulse"></div>
              <svg className="w-10 h-10 text-primary relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
              A showcase of enterprise-grade applications and innovative solutions that demonstrate my expertise in modern web development
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              From scalable microservices to interactive user interfaces, each project represents a commitment to excellence and cutting-edge technology
            </p>
            <div className="flex items-center justify-center mt-10">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-40"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mx-6"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-40"></div>
            </div>
          </div>

          {/* Project Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-muted/50 backdrop-blur-sm p-2 rounded-2xl border border-border/50 shadow-lg">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transform scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50 hover:scale-105'
                }`}
              >
                <Code2 className="w-5 h-5" />
                All Projects
                <span className="ml-1 text-xs bg-white/20 px-2 py-1 rounded-full">6</span>
              </button>
              <button
                onClick={() => setActiveTab('frontend')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'frontend'
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transform scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50 hover:scale-105'
                }`}
              >
                <Monitor className="w-5 h-5" />
                Frontend
                <span className="ml-1 text-xs bg-white/20 px-2 py-1 rounded-full">3</span>
              </button>
              <button
                onClick={() => setActiveTab('backend')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'backend'
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transform scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50 hover:scale-105'
                }`}
              >
                <Database className="w-5 h-5" />
                Backend
                <span className="ml-1 text-xs bg-white/20 px-2 py-1 rounded-full">3</span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {getDisplayedProjects().map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-background/50 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
              <div className="text-xs text-muted-foreground/70 mt-1">Enterprise & Startup</div>
            </div>
            <div className="text-center p-6 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-background/50 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              <div className="text-xs text-muted-foreground/70 mt-1">Full-Stack Expertise</div>
            </div>
            <div className="text-center p-6 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-background/50 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
              <div className="text-xs text-muted-foreground/70 mt-1">Professional Development</div>
            </div>
            <div className="text-center p-6 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-background/50 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              <div className="text-xs text-muted-foreground/70 mt-1">Repeat Business Rate</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and professional expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                <ExternalLink className="mr-3 w-5 h-5" />
                View All Projects
              </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-12 py-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105"
            >
                <Github className="mr-3 w-5 h-5" />
                GitHub Portfolio
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

