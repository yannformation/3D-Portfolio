import { Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import {
  About,
  Contact,
  Experience,
  Tech,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
import Privacy from "../src/components/pages/Privacy";
import Consentment from "../src/components/pages/Consentment";

// Structure de notre site
const App = () => {
  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://yanndev-art.fr/analytics/js/container_hOUYnEz9.js'; s.parentNode.insertBefore(g,s);
    }, [])
  return (
    <div className="relative z-0 bg-primary">
        <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />

              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/consentment" element={<Consentment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
