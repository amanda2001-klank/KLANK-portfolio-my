import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0a0a0f;
          color: #ffffff;
          overflow-x: hidden;
        }

        .hero {
          min-height: 100vh;
          position: relative;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .hero::after {
          content: '';
          position: absolute;
          top: 20%;
          right: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 100px 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50px;
          font-size: 0.875rem;
          width: fit-content;
          backdrop-filter: blur(10px);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00f5ff 0%, #558bf7ff 50%, #00ff40 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle-wrapper {
          position: relative;
          width: fit-content;
        }

        .hero-subtitle {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          color: #94a3b8;
          margin: 0;
        }

        .subtitle-underline {
          height: 3px;
          background: linear-gradient(90deg, #6366f1, transparent);
          margin-top: 0.5rem;
          border-radius: 2px;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #94a3b8;
          max-width: 600px;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .cta-primary, .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .cta-primary {
          background: linear-gradient(135deg, #00f5ff, #46dd7dff);
          color: white;
          border: none;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .cta-primary svg {
          transition: transform 0.3s ease;
        }

        .cta-primary:hover svg {
          transform: translateX(4px);
        }

        .cta-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-links a {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #94a3b8;
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-links a:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.5);
          color: #6366f1;
        }

        .hero-image-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .code-display {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .code-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: rgba(15, 23, 42, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-dots {
          display: flex;
          gap: 0.5rem;
        }

        .code-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
        }

        .code-dots span:nth-child(2) {
          background: #f59e0b;
        }

        .code-dots span:nth-child(3) {
          background: #10b981;
        }

        .code-title {
          color: #94a3b8;
          font-size: 0.875rem;
          font-family: 'Fira Code', monospace;
        }

        .floating-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 80px 2rem;
          }

          .hero-content {
            text-align: center;
            align-items: center;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <motion.section
        id="home"
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-container">
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="hero-badge"
              variants={fadeInUp}
            >
              <span className="badge-dot"></span>
              <span>Available for new projects</span>
            </motion.div>
            
            <motion.h1
              className="hero-title"
              variants={fadeInUp}
            >
              <span className="gradient-text">KLANKTECH</span>
            </motion.h1>
            
            <motion.div className="hero-subtitle-wrapper" variants={fadeInUp}>
              <h2 className="hero-subtitle">
                Creative Developer & Designer
              </h2>
              <div className="subtitle-underline"></div>
            </motion.div>
            
            <motion.p className="hero-description" variants={fadeInUp}>
              Crafting exceptional digital experiences through innovative development 
              and thoughtful design. Specialized in building scalable web applications 
              with cutting-edge technologies and pixel-perfect attention to detail.
            </motion.p>
            
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <motion.a
                href="#projects"
                className="cta-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="#contacts"
                className="cta-secondary"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get in Touch</span>
              </motion.a>
            </motion.div>

            <motion.div className="social-links" variants={fadeInUp}>
              <motion.a 
                href="https://github.com/amanda2001-klank" 
                target="_blank"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/amandya-nethranja-8925b3316" 
                target="_blank"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              
              <motion.a 
                href="https://x.com/amandya2001" 
                target="_blank"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="code-display"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">developer.config.ts</span>
              </div>
              
              <SyntaxHighlighter
                language="typescript"
                customStyle={{
                  margin: 0,
                  padding: "1.5rem",
                  height: "100%",
                  borderRadius: "0 0 16px 16px",
                  background: "transparent",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                }}
                style={vscDarkPlus}
              >
                {`const developer: Profile = {
  name: "KLANKTECH",
  location: "🌍 Sri Lanka",
  role: "Full Stack Developer",
  
  techStack: {
    frontend: ["React", "Next.js", "TypeScript"],
    styling: ["TailwindCSS", "Framer Motion"],
    backend: ["Node.js", "Express"],
    database: ["MongoDB", "PostgreSQL"],
  },
  
  expertise: [
    "responsive design",
    "API development",
    "performance optimization",
    "UI/UX implementation"
  ],
  
  philosophy: "Clean code, smooth UX",
  status: "🟢 Available for projects"
};`}
              </SyntaxHighlighter>
            </motion.div>

            <motion.div
              className="floating-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              
              
              
              
            </motion.div>
            
          </motion.div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </div>
        
      </motion.section>
    </>
  );
};

export default Hero;