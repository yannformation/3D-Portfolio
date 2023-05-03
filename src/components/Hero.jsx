import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {" "}
      {/*cette ligne permet l'apparition de l'image du background*/}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* positionnement de la bille et du trait */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* apparition de la bille */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* apparition de la barre */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} tex-white`}>Hi, I'm <span className="text-[#915eff]">Yann</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user<br className="sm:block hidden" /> interfaces and web applications
          </p>
        </div>
      </div>

        <ComputersCanvas/>
    </section>
  );
};

export default Hero;
