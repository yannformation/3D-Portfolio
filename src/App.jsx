import { BrowserRouter } from "react-router-dom";

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
} from "./components";

// Structure de notre site
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">  
          <Navbar />
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
      </div>
    </BrowserRouter>
  );
};

export default App;
