import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";

const Footer = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 bg-primary`}
    >
      
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white/[0.6] text-[15px] font-bold cursor-pointer flex">
            Création Yann Cotard.
          </p>
        </div>
        </Link>

        <Link to="/Privacy">
          <p className="text-white/[0.6] text-[15px] cursor-pointer flex">
            Politique de Confidentialité
          </p>
        </Link>

      </div>
    </nav>
  );
};

export default Footer;
