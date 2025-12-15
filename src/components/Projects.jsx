import { motion } from "framer-motion";

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.15 } } };

const ProjectButton = ({ href, label, icon }) => (
  <motion.a
    href={href}    target="_blank"    rel="noopener noreferrer"    className="proj-btn"    whileHover={{ y: -4 }}    whileTap={{ scale: 0.95 }}  >
    {icon}
    <span>{label}</span>
  </motion.a>
);

const GithubIcon = () => <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>;

const FigmaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path d="M15 2H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"/>
    <path d="M18 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
  </svg>
);

export const Projects = () => {
  return (
    <section id="projects" className="projects-page">
      
      <div className="section-separator">
        <h3>My projects</h3>
      </div>

      {/* Web / Full-Stack Projects */}
      <div className="section-separator">
        <h3>Web & Full-Stack</h3>
      </div>

      

      <motion.div className="projects-grid" variants={stagger} initial="initial" whileInView="animate">

        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/portfolio (2).jpg')"}}></div>
          <div className="content">
            <h3>KLANKTECH Portfolio</h3>
            <p>Personal Prortfolio</p>
            <div className="tags"><span>ReactJs</span><span>CSS</span><span>Java Script</span></div>
            <div className="buttons">
              <ProjectButton href="https://github.com/amanda2001-klank/KLANK-portfolio-my" label="View Code" icon={<GithubIcon />} />
              <ProjectButton href="https://amanda2001-klank.github.io/KLANK-portfolio-my/" label="Live Demo" icon={<LiveIcon />} />
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/1747898101798.jpg')"}}></div>
          <div className="content">
            <h3>FutureWatt</h3>
            <p>Sustainable Energy Management System</p>
            <div className="tags"><span>ReactJS</span><span>MaterialUI</span><span>MongoDB</span></div>
            <div className="buttons">
              <ProjectButton href="https://github.com/TheekshR/FutureWatt" label="View Code" icon={<GithubIcon />} />
              <ProjectButton href="#" label="Live Demo" icon={<LiveIcon />} />
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/Crypto.jpg')"}}></div>
          <div className="content">
            <h3>Crypto Tracker</h3>
            <p>Real-time cryptocurrency prices and market data</p>
            <div className="tags"><span>ReactJs</span><span>CSS</span><span>Java Script</span></div>
            <div className="buttons">
              <ProjectButton href="https://github.com/amanda2001-klank/Crypto-Tracker" label="View Code" icon={<GithubIcon />} />
              <ProjectButton href="https://amanda2001-klank.github.io/Crypto-Tracker/" label="Live Demo" icon={<LiveIcon />} />
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/image.jpg')"}}></div>
          <div className="content">
            <h3>FINIX</h3>
            <p>Finance Tracker App (Android)</p>
            <div className="tags"><span>Kotlin</span><span>MPAndroidChart</span><span>SQLite</span></div>
            <div className="buttons">
              <ProjectButton href="https://github.com/TheekshR/Finix" label="View Code" icon={<GithubIcon />} />
              <ProjectButton href="#" label="Live Demo" icon={<LiveIcon />} />
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/memory-card.jpg')"}}></div>
          <div className="content">
            <h3>Memory game</h3>
            <p>Test your memory and concentration with this classic card-matching game! </p>
            <div className="tags"><span>ReactJS</span><span>Java script</span><span>CSS</span></div>
            <div className="buttons">
              <ProjectButton href="https://github.com/amanda2001-klank/Memory-card" label="View Code" icon={<GithubIcon />} />
              <ProjectButton href="https://amanda2001-klank.github.io/Memory-card/" label="Live Demo" icon={<LiveIcon />} />
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/freshmart.jpg')"}}></div>
          <div className="content">
            <h3>Fresh Mart</h3>
            <p>Online Stock Management System</p>
            <div className="tags"><span>HTML</span><span>CSS</span><span>Java</span></div>
            <div className="buttons">
              <ProjectButton href="https://github.com/TheekshR/Finix" label="View Code" icon={<GithubIcon />} />
              <ProjectButton href="#" label="Live Demo" icon={<LiveIcon />} />
            </div>
          </div>
        </motion.div>

        {/* Add more coding projects here */}
      </motion.div>

      {/* UI/UX Projects */}
      <div className="section-separator">
        <h3>UI/UX Design Projects</h3>
      </div>

      <motion.div className="projects-grid" variants={stagger} initial="initial" whileInView="animate">
        <motion.div className="project-card ui" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/14.Mockup.png')"}}></div>
          <div className="content">
            <h3>Craigslist Website Redesign</h3>
            <p>Modern web disgin with glassmorphism</p>
            <div className="tags"><span>Figma</span><span>Prototyping</span><span>User Flow</span></div>
            <div className="buttons">
              <ProjectButton href="https://www.figma.com/design/wnMUxy7UtSNrmb8XnxrKfT/HCI-Assignment-Kandy-UNI-9?node-id=0-1&t=c9hM9AEfTfE7aYxE-1" label="View on Figma" icon={<FigmaIcon />} />
            </div>
          </div>
        </motion.div>

        <motion.div className="project-card ui" variants={fadeInUp} whileHover={{ y: -12 }}>
          <div className="img" style={{backgroundImage: "url('projects/ui2.jpg')"}}></div>
          <div className="content">
            <h3>E-commerce Dashboard</h3>
            <p>Analytics-focused admin panel</p>
            <div className="tags"><span>Figma</span><span>Design System</span></div>
            <div className="buttons">
              <ProjectButton href="https://figma.com/your-link" label="View on Figma" icon={<FigmaIcon />} />
            </div>
          </div>
        </motion.div>

        {/* Add more UI projects */}
      </motion.div>
    </section>
  );
};

const LiveIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);