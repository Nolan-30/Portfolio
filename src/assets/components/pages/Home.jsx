import "./styles/Home.css";
import { motion } from "framer-motion";
import LightPillar from "../animations/LightPillar";
import TextType from "../animations/TextType";
import StarBorder from "../animations/StarBorder";
import SplitText from "../animations/SplitText";
// import GradientText from "../animations/GradientText";

import { Dock, DockIcon } from "../animations/Dock";
import Download from "../icons/Download";

// pr s'assurer que les lettres sont animées
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <main id="accueil" className="banniere-accueil">
      <div className="hero-background-animation">
        <LightPillar
          topColor="#5227FF"
          bottomColor="rgb(144, 95, 151)"
          intensity={1.2}
          pillarWidth={3.5}
          pillarHeight={0.5}
          mixBlendMode="screen"
        />
      </div>
      <motion.div
        className="welcome-msg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: "easeOut",
        }}
      >
        {/* <GradientText
          colors={["#570562", "#FF9FFC", "#B19EEF"]}
          animationSpeed={6}
          showBorder={false}
          className=""
        > */}
        <span className="weight-bold">
          Fort d'une sensibilité marquée pour le frontend, j'allie technique et
          design pour concevoir des expériences utilisateur intuitives et
          réactives.
        </span>
        {/* </GradientText> */}
      </motion.div>

      {/* cote gauche image*/}
      <div className="container-accueil">
        <motion.div
          className="bloc-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="images/doffy.jpg"
            alt="Doffy portrait"
            className="portrait-photo"
          />
        </motion.div>

        {/* colonne de droite*/}
        <div className="contenu-banniere">
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="badge-container">
              <span className="point">•</span> DÉVELOPPEUR Web FullStack -
              CODING FACTORY
            </div>
          </motion.div>

          {/* Le grand titre aligné à gauche */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.4 }}
          >
            {/* animat° spilt text*/}
            <SplitText
              text="Nolan D'almeida"
              className="titre-principal"
              tag="h1"
              delay={100}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <TextType
              text={["Je crée des sites web modernes et sécurisés."]}
              className="subtitle"
              typingSpeed={50}
              pauseDuration={200}
              showCursor
              deletingSpeed={5}
              cursorBlinkDuration={0.5}
              loop={false}
            />
          </motion.p>

          {/* grp de btn */}
          <motion.div
            className="grp-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StarBorder as="div" color="magenta" speed="5s">
              <motion.a
                href="#projets"
                className="bouton bouton-secondaire"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VOIR MES PROJETS
              </motion.a>
            </StarBorder>

            <StarBorder as="div" color="magenta" speed="5s">
              <motion.a
                href="#contact"
                className="bouton bouton-secondaire"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ME CONTACTER
              </motion.a>
            </StarBorder>
          </motion.div>

          {/* FOOTER DE L'ACCUEIL */}

          {/* test du StarBorder sur les icon */}

          <motion.div
            className="languages-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#" className="icon-link">
              <img src="images/react.png" alt="react" />
            </a>

            <a href="#" className="icon-link">
              <img src="images/tailwind.png" alt="Tailwind" />
            </a>

            {/* Bouton CV */}

            <StarBorder as="div" color="magenta" speed="5s">
              <motion.a
                href="CV-Nolan-Dalmeida.pdf"
                download="CV-Nolan-Dalmeida.pdf"
                className="btn-download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                TÉLÉCHARGER CV <Download size={20} color="#ffffff" />
              </motion.a>
            </StarBorder>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
