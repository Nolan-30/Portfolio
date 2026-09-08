import { useRef } from "react";
import "./styles/Project.css";
import GradientText from "../animations/GradientText";
import StarBorder from "../animations/StarBorder";
import BorderGlow from "../animations/BorderGlow";
import FadeContent from "../animations/FadeContent";
import GlareHover from "../animations/GlareHover";

// import Icon
import NavalBattle from "../icons/NavalBattle";
import Brain from "../icons/Brain";
import Eye from "../icons/Eye";
import Skull from "../icons/Skull";
import Code from "../icons/Code";
import Heart from "../icons/Heart";
import Question from "../icons/Question";
import Sparkles from "../icons/Sparkles";
import Link from "../icons/Link";
import Click from "../icons/Click";
import Rocket from "../icons/Rocket";

export default function ProjectCard({
  label,
  image,
  date,
  title,
  iconLink,
  iconName,
  description,
  githubUrl,
  stack,
}) {
  return (
    <div className="projet-item">
      <FadeContent duration={2000} easing="ease-out" initialOpacity={0}>
        {/* <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="#060010"
          borderRadius={28}
          glowRadius={40}
          glowIntensity={1}
          coneSpread={25}
          animated={false}
          colors={["#c084fc", "#f472b6", "#ffffff"]}
        > */}

        {/* test glarehover sur les carte de projet */}

        {/* fin du test */}

        <div style={{ padding: "2em" }}>
          <article
            className="carte-projet"
            style={{ margin: 0, height: "100%" }}
          >
            {/* ICON DE PROJET */}
            <a
              href="https://github.com/Nolan-30/Power-of-Memory/tree/Power-Of-Memory"
              target="blank"
              rel="noreferrer"
            ></a>
            {iconName === "boat" && (
              <div className="icons">
                <NavalBattle size={80} color="#dd00ff" />
              </div>
            )}

            {iconName === "brain" && (
              <div className="icons">
                <Brain size={80} color="#dd00ff" />
              </div>
            )}
            {iconName === "eye" && (
              <div className="icons">
                <Eye size={80} color="#dd00ff" />
              </div>
            )}
            {iconName === "skull" && (
              <div className="icons">
                <Skull size={80} color="#dd00ff" />
              </div>
            )}
            {iconName === "heart" && (
              <div className="icons">
                <Heart size={80} color="#dd00ff" />
              </div>
            )}
            {iconName === "code" && (
              <div className="icons">
                <Code size={80} color="#dd00ff" />
              </div>
            )}
            {iconName === "question" && (
              <div className="icons">
                <Question size={80} color="#dd00ff" />
              </div>
            )}
            {iconName === "sparkles" && (
              <div className="icons">
                <Sparkles size={80} color="#dd00ff" />
              </div>
            )}
            {iconName === "click" && (
              <div className="icons">
                <Click size={80} color="#dd00ff" />
              </div>
            )}

            <div className="titre-carte">
              <span className="etiquette-projet">{label}</span>
              <span className="date-projet">{date}</span>
            </div>

            {image && (
              <div className="img-projet">
                <img src={image} alt={title} />
              </div>
            )}

            <span className="degrader-violet">
              <h3>{title}</h3>
            </span>

            <p>{description}</p>

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
