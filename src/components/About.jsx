import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
   <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

      </div>
    </motion.div>

   </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Présentation.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondarytext-[17px] max-w-3xl leading-[30px]'>
        Je suis un développeur de site web qualifié avec une expérience en JavaScript, et une expertise dans les frameworks comme React et Three.js. J’apprends rapidement et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent des problèmes réels. Travaillons ensemble pour concrétiser vos idées !
      </motion.p>

      {/* pour déployer les cartes */}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
    // A ce Stade, pour bien centrer tous les éléments de cette section il faut créer un nouveau Component. Pour cela dans le dossier "src" créer un nouveau dossier "hoc" et dans ce nouveau dossier un fichier nommé "SectionWrapper.jsx" ainsi qu'un autre fichier "index.js"
  )
}

export default SectionWrapper (About, "about")