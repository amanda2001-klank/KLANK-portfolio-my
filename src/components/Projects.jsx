import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Reusable GitHub Button Component
const GithubButton = ({ href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <svg
      height="20"
      width="20"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
    <span>View on GitHub</span>
  </motion.a>
);

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Project 1 - FutureWatt */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('projects/1747898101798.jpg')" }} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <h3>FutureWatt</h3>
          <p>
            Sustainable Energy Management System. Full-stack web application for a solar energy solutions provider, streamlining sales operations and customer relationship management.
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>MaterialUI</span>
            <span>MongoDB</span>
          </div>
          <GithubButton href="https://github.com/TheekshR/FutureWatt" />
        </motion.div>

        {/* Project 2 - FINIX */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('projects/image.jpg')" }} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <h3>FINIX</h3>
          <p>
            Finance Tracker App. Developed a comprehensive Android finance management application enabling users to track income, expenses, and budgets with real-time insights and data visualization.
          </p>
          <div className="project-tech">
            <span>Kotlin</span>
            <span>MPAndroidChart</span>
            <span>SQLite</span>
          </div>
          <GithubButton href="https://github.com/yourusername/finix-finance-app" />
        </motion.div>

        {/* Project 3 - Memory game */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('projects/memory-card.jpg')" }} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <h3>Memory game</h3>
          <p>
            Test your memory and concentration with this classic card-matching game!
             Flip cards to reveal hidden symbols and find matching pairs in as few moves as possible.
          </p>
          <div className="project-tech">
            <span>Reactjs</span>
            <span>Java script</span>
            <span>CSS</span>
          </div>
          <GithubButton href="https://github.com/amanda2001-klank/Memory-card" />
        </motion.div>

        {/* Project 3 - Fresh Mart */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('projects/stopwatch.png')" }} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <h3>Fresh Mart</h3>
          <p>
            Online Stock Management System. Built a comprehensive inventory and sales management system for grocery retail operations using Java backend architecture.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <GithubButton href="https://github.com/yourusername/fresh-mart" />
        </motion.div>
        
      </motion.div>
    </motion.section>
  );
};
