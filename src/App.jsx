import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./assets/components/pages/Header";
import Footer from "./assets/components/pages/Footer";
import Home from "./assets/components/pages/Home";
import Project from "./assets/components/pages/Project";

import Contact from "./assets/components/pages/Contact";
import { ScrollProgress } from "./assets/components/animations/ScrollProgress";
import GhostFibers from "./assets/components/animations/GhostFibers";

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <ScrollProgress />

        {/* Arrière-plan GhostFibers */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <GhostFibers
            lineColor="#b000dc"
            glowColor="#781193"
            brightness={1.5}
            glowIntensity={1}
            speed={0.25}
            scale={2}
            layers={2}
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