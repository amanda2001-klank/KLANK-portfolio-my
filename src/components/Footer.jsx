import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <p>© 2025 KLANKTECH. All rights reserved.</p>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="amandyanethranja@gmail.com.com"  // ← change to your real email
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/amandya-nethranja-8925b3316/"  // ← put your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/amanda2001-klank"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};