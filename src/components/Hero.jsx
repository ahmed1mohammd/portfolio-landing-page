import { Button } from '@/components/ui/button';
import { Download, Mail, Code, Database, Globe, Zap } from 'lucide-react';
import heroBackground from '../assets/hero_background.png';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Ahmed – Full-Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // In a real implementation, this would download the actual CV
    alert('CV download would be implemented here');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/10">
      {/* 3D Programming Elements Background */}
      <div className="programming-elements">
        {/* Code Brackets */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bracket-${i}`}
            className="code-bracket"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          />
        ))}
        
        {/* Floating Code Lines */}
        {[...Array(12)].map((_, i) => {
          const codeLines = [
            'const portfolio = () => {',
            'function buildProject() {',
            'if (user.experience) {',
            'return success;',
            '}',
            'class Developer {',
            'constructor() {',
            'this.skills = [];',
            '}',
            'async fetchData() {',
            'return await api.get();',
            '}'
          ];
          
          return (
            <div
              key={`code-${i}`}
              className="floating-code"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            >
              {codeLines[Math.floor(Math.random() * codeLines.length)]}
            </div>
          );
        })}
        
        {/* HTML Tags */}
        {[...Array(6)].map((_, i) => {
          const htmlTags = ['<div>', '<section>', '<header>', '<main>', '<footer>', '<nav>'];
          return (
            <div
              key={`html-${i}`}
              className="html-tag"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
              }}
            >
              {htmlTags[Math.floor(Math.random() * htmlTags.length)]}
            </div>
          );
        })}
        
        {/* CSS Selectors */}
        {[...Array(8)].map((_, i) => {
          const cssSelectors = ['.container', '.navbar', '.hero', '.card', '.button', '.grid', '.flex', '.responsive'];
          return (
            <div
              key={`css-${i}`}
              className="css-selector"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 18}s`,
              }}
            >
              {cssSelectors[Math.floor(Math.random() * cssSelectors.length)]}
            </div>
          );
        })}
        
        {/* JavaScript Functions */}
        {[...Array(10)].map((_, i) => {
          const jsFunctions = ['useState()', 'useEffect()', 'map()', 'filter()', 'reduce()', 'fetch()', 'async/await', 'try/catch', 'export default', 'import React'];
          return (
            <div
              key={`js-${i}`}
              className="js-function"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 14}s`,
              }}
            >
              {jsFunctions[Math.floor(Math.random() * jsFunctions.length)]}
            </div>
          );
        })}
        
        {/* Database Icons */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`db-${i}`}
            className="database-icon"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
        
        {/* Server Icons */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`server-${i}`}
            className="server-icon"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-accent/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <Database size={35} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-primary/30"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Globe size={45} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-accent/30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Zap size={30} />
        </motion.div>
      </div>

      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
        animate={{ 
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-accent/10"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(168, 85, 247, 0.1) 100%)",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(59, 130, 246, 0.1) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(168, 85, 247, 0.1) 100%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* 3D Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ perspective: "1000px" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Welcome Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Available for new projects</span>
          </motion.div>

          {/* Main Heading with Typing Effect */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {displayedText}
            </span>
            {currentIndex < fullText.length && (
              <motion.span
                className="text-primary"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.h1>
          
          {/* Enhanced Description */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              I craft exceptional digital experiences with cutting-edge technologies
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Backend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Full-Stack Solutions</span>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            <Button 
              size="lg" 
              onClick={scrollToContact}
                className="w-full sm:w-auto px-12 py-4 text-lg font-bold relative overflow-hidden group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 border-0"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Mail className="mr-3 h-5 w-5 relative z-10" />
                <span className="relative z-10">Let's Work Together</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            {/* <Button 
              variant="outline" 
              size="lg" 
              onClick={downloadCV}
                className="w-full sm:w-auto px-12 py-4 text-lg font-bold relative overflow-hidden group hover:bg-background hover:text-foreground hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-2"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Download className="mr-3 h-5 w-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
            </Button> */}
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          </motion.div>
        </div>
        
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
            Scroll to explore
          </span>
          <motion.div 
            className="w-6 h-10 border-2 border-muted-foreground group-hover:border-primary rounded-full flex justify-center transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-muted-foreground group-hover:bg-primary rounded-full mt-2 transition-colors duration-300"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

