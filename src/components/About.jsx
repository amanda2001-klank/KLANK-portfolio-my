import { motion } from "framer-motion";
import React from 'react';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "#64ffda",
      skills: [
        { name: 'React JS', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'Vite', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg' }
      ]
    },
    {
      title: "Backend Development",
      color: "#3b82f6",
      skills: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
      ]
    },
    
    {
      title: "Databases",
      color: "#10b981",
      skills: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    },
    {
      title: "Mobile Development",
      color: "#8b5cf6",
      skills: [
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }
      ]
    },
    {
      title: "System Programming",
      color: "#ef4444",
      skills: [
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
      ]
    },
    {
      title: "Tools & Others",
      color: "#6b7280",
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
      ]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="profile-image-container">
    <motion.img 
      src="projects/profile.png"  // path from public folder
      alt="Amandya Nethranja - Full Stack Developer"
      className="profile-image"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    />
  </div>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-intro-section">
            <div className="about-intro">
              <h3>Hello! I'm Amandya Nethranja</h3>
              <p>
                I'm a creative developer who bridges the gap between design and technology. Specializing in modern web applications and dynamic user interfaces,
                 I transform complex ideas into elegant digital solutions. My approach combines pixel-perfect design, smooth animations, and
                 optimized performance to create experiences that users love and businesses rely on.
              </p>
              <p>
                Currently, I'm focused on developing innovative solutions using cutting-edge AI 
                technologies. I believe in the transformative power of AI to solve real-world 
                problems and create meaningful impact in various industries.
              </p>
              {/* 🎯 NEW RESUME BUTTON ADDED HERE */}
            <motion.a
              href="projects/AMANDYA  NETHRANJA KARIYAWASAM.pdf"  // put your PDF in public folder
              download
              className="resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
              
            </div>
            

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">Information Tecnology  Student at SLIIT</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Colombo, Sri Lanka</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Interests:</span>
                <span className="detail-value">AI/ML and Designing</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">3+ Years in Programming</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <div className="skills-header">
              <h3>Skills and Tools</h3>
              <p className="skills-subtitle">Technologies I work with to bring ideas to life</p>
            </div>
            
            <div className="skills-categories">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill-category" style={{ '--category-color': category.color }}>
                  <div className="category-header">
                    <h4 className="category-title">{category.title}</h4>
                  </div>
                  
                  <div className="category-skills">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="skill-card"
                        style={{ 
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      >
                        <div className="skill-card-inner">
                          <div className="skill-logo-container">
                            <img 
                              src={skill.logo} 
                              alt={skill.name} 
                              className="skill-logo-img"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            <span className="skill-logo-fallback" style={{ display: 'none' }}>
                              {skill.name.charAt(0)}
                            </span>
                          </div>
                          
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">+1</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">+1</div>
            <div className="stat-label">AI Models Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Learning</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Passion for AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
