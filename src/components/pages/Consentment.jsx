import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { logo } from "../../assets";

const Consentment = () => {
  return (
    <div className="flex flex-col justify-center items-center w-4/5">
      <Link to="/">
        <div className="flex items-center gap-2 mb-20">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain ml-16" />
          <p className="text-white/[0.6] text-[20px] font-bold cursor-pointer flex">
            Retour au site.
          </p>
        </div>
      </Link>
      <div id="matomo-opt-out" className="mt-10 h-screen w-full flex flex-col justify-center items-center"></div>
        <script src="https://yanndev-art.fr/analytics/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&backgroundColor=050505&fontColor=fdfcfc&fontSize=18px&fontFamily=Arial&showIntro=1">
         </script>
         <Link to="/">
        <div className="flex items-center gap-2 mb-20">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain ml-16" />
          <p className="text-white/[0.6] text-[20px] font-bold cursor-pointer flex">
            Retour au site.
          </p>
        </div>
      </Link>
      </div>
  )
}

export default Consentment