import projects from "../../projects.json";
import ProjectCard from "./ProjectCard";
import GradientText from "../animations/GradientText";
import Particles from "../animations/Particles";

export default function Project() {
  const projetsRealises = projects.filter((p) => !p.incoming);

  return (
    <section
      id="projets"
      className="section-page"
      style={{ position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // mettre le bg derriere
          pointerEvents: "none",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={window.devicePixelRatio || 1}
        />
      </div>

      {/* ajt d'un index pr passer devant le bg */}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* partie titre */}
        <section class="title-container">
          <h2 className="titre-section">
            <GradientText
              colors={["#570562", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="weight"
            >
              Réalisations
            </GradientText>
          </h2>
          <h3 className="title-sous-texte">
            Découvrez une sélection de mes projets, mêlant interfaces modernes,
            fluides et centrées sur l’utilisateur.
          </h3>
        </section>

        {/* grille */}
        <div className="grille-projets">
          {projetsRealises.map((project) => (
            <div key={project.id} className="projet-item">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
