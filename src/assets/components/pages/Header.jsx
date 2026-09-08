import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles/Header.css";
import GradientText from "../animations/GradientText";
import Profile from "../icons/Profile";

const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("projets");

  return (
    <header className="header-container">
      <section className="nav-bar">
        {/* LOGO À GAUCHE */}
        <div className="logo">
          <GradientText
            colors={["#570562", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
          >
            <div className="name">
              <Profile size={30} color="currentColor" />
              Nolan D'almeida.
            </div>
          </GradientText>
        </div>

        {/* NAVBAR À DROITE */}
        <nav className="navbar">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeTab === item.id ? "active" : ""}
                  onClick={() => setActiveTab(item.id)}
                >
                  {/* indicateur violet */}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="nav-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}
