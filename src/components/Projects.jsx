import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project_placeholder_1.png';
import project2 from '../assets/project_placeholder_2.png';
import project3 from '../assets/project_placeholder_3.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description: 'A comprehensive data visualization platform built with React and D3.js. Features real-time data updates, interactive charts, and customizable dashboards for business intelligence.',
      image: project1,
      technologies: ['React', 'Node.js', 'MongoDB', 'D3.js', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'A modern social networking application with real-time messaging, post sharing, and user interactions. Built with React Native for cross-platform mobile experience.',
      image: project2,
      technologies: ['React Native', 'Express.js', 'PostgreSQL', 'Redis', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration, inventory management, and admin dashboard. Optimized for performance and mobile responsiveness.',
      image: project3,
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work and the technologies I've been exploring
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

