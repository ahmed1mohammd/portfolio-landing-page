import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmed.mohammed.dev@outlook.com',
      href: 'mailto:ahmed.mohammed.dev@outlook.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '01023973147',
      href: 'tel:+201023973147'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Giza, Egypt',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/ahmed1mohammd',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ahmed-mohammed-303081342',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/A_Zayed_1',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/a7med_zayed_official',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 max-w-2xl mx-auto">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors text-base font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Connect With Me
              </h3>
              <p className="text-muted-foreground">
                Follow me on social media for updates and insights
              </p>
              
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-center w-12 h-12 bg-muted/30 rounded-lg border border-border hover:bg-muted/50 transition-all duration-200 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-8">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Send me an email and let's discuss your project. I typically respond within 24 hours.
                </p>
                <a
                  href="mailto:ahmed_mohammeed_ahmed05@outlook.com"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

