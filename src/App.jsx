import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./assets/components/pages/Header";
import Footer from "./assets/components/pages/Footer";
import Home from "./assets/components/pages/Home";
import Project from "./assets/components/pages/Project";

import Contact from "./assets/components/pages/Contact";
import FadeContent from "./assets/components/animations/FadeContent";
import { ScrollProgress } from "./assets/components/animations/ScrollProgress";
import FloatingLines from "./assets/components/animations/FloatingLines";
import LightPillar from "./assets/components/animations/LightPillar";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <ScrollProgress />

        {/* Ajout du background LightPillar  */}
        <div
          style={{
            width: "100%",
            height: "1200px",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        <div style={{ position: "relative", zIndex: 3 }}>
          <Header />
          <Home />
        </div>
      </div>

      <main style={{ position: "relative", zIndex: 2, background: "#000" }}>
        <Project />
      </main>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
