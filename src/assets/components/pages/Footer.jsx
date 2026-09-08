import React from "react";
import { motion } from "framer-motion";
import "./styles/Footer.css";
import SplitText from "../animations/SplitText";
import { Dock, DockIcon } from "../animations/Dock";

import Searching from "../icons/Searching";
import LinkedIn from "../icons/LinkedIn";
import Github from "../icons/Github";

export default function Footer() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <footer id="contact">
      <motion.div
        className="contenu-pied-page"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="rs">
          <a href="https://github.com/Nolan-30/Nolan" target="_blank">
            <Github size={75} color="#ffffff" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/nolan-d-almeida-153112375/"
            target="_blank"
          >
            <LinkedIn size={75} color="#ffffff" />
          </a>
        </div>

        <p className="droits-auteur">© 2026 Nolan D'almeida.</p>
      </motion.div>
    </footer>
  );
}
