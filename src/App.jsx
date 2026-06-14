import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portfolio from "./Pages/Portfolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { AnimatePresence } from 'framer-motion';

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Timeline />
          <Services />
          <Portfolio />
          <Testimonials />
          <ContactPage />
          <footer className="bg-slate-100 dark:bg-black/45 transition-colors duration-300 py-6 border-t border-slate-200 dark:border-white/5">
            <center>
              <span className="block text-sm text-slate-500 dark:text-slate-400 text-center">
                © 2026 Abhay Ginoya. All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer className="bg-slate-100 dark:bg-black/45 transition-colors duration-300 py-6 border-t border-slate-200 dark:border-white/5">
      <center>
        <span className="block text-sm text-slate-500 dark:text-slate-400 text-center">
          © 2026 Abhay Ginoya. All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;