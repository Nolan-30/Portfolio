import { useRef } from "react";
import "./styles/Project.css";

import FadeContent from "../animations/FadeContent";

// imports d'icon

import Brain from "../icons/Brain";
import Eye from "../icons/Eye";
import Code from "../icons/Code";
import Heart from "../icons/Heart";
import Question from "../icons/Question";
import Link from "../icons/Link";
import Click from "../icons/Click";
import Rocket from "../icons/Rocket";
import Searching from "../icons/Searching";
import MapIcon from "../icons/MapIcon";

const iconsList = {
  brain: Brain,
  eye: Eye,
  code: Code,
  heart: Heart,
  question: Question,
  click: Click,
  searching: Searching,
  mapicon: MapIcon,
  mappinicon: MapIcon, // Sécurité pour la casse dans projects.json
};

export default function ProjectCard({
  label,
  image,
  title,
  iconName,
  description,
  githubUrl,
  stack,
}) {
  const IconComponent = iconsList[iconName?.toLowerCase()];
  return (
    <div className="projet-item">
      <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
        <div style={{ padding: "2em" }} className="project-content">
          <article
            className="carte-projet"
            style={{ margin: 0, height: "100%" }}
          >
            {/* ICONS */}
            {IconComponent && (
              <div className="icons">
                <IconComponent size={60} color="#dd00ff" />
              </div>
            )}

            <div className="titre-carte">
              <p>{label}</p>
            </div>

            {image && (
              <div className="img-projet">
                <img src={image} alt={title} />
              </div>
            )}

            <span className="degrader-violet">
              <div className="name">
                <h3>{title}</h3>
              </div>
            </span>

            <div className="description">
              <p>{description}</p>
            </div>

            <div className="stack-used">
              {stack &&
                stack.map((tech, index) => (
                  <span key={index} className={tech.class}>
                    {tech.name}
                  </span>
                ))}
            </div>

            <div className="lien-projet">
              {/* On vérifie si githubUrl existe avant d'afficher le lien */}
              {githubUrl ? (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Link size={30} color="#ffffff" />
                </a>
              ) : (
                // icon pr les projets a venir
                <Rocket size={30} color="#7a7a7a" />
              )}
            </div>
          </article>
        </div>
        {/* </BorderGlow> */}
      </FadeContent>
    </div>
  );
}
