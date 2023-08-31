import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    fenix,
    monLogo,
    ateam,
    metaversus,
    ACJoie,
    sushiman,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Expérience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur web",
      icon: web,
    },
    {
      title: "Développeur React",
      icon: mobile,
    },
    {
      title: "Développeur Three.js",
      icon: backend,
    },
    {
      title: "Créateur de visuels",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      id: "HTML5",
      icon: html,
    },
    {
      id: "CSS3",
      icon: css,
    },
    {
      id: "JavaScript",
      icon: javascript,
    },
    {
      id: "TypeScript",
      icon: typescript,
    },
    {
      id: "ReactJS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      id: "TailwindCSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      id: "ThreeJS",
      icon: threejs,
    },
    {
      id: "git",
      icon: git,
    },
    {
      id: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Intégrateur web",
      company_name: "Fenix",
      icon: fenix,
      iconBg: "#383E56",
      date: "Jan 2021 - Oct 2021",
      points: [
        "Concevoir des contenus visuels pour le web et les réseaux sociaux : communications interactives, animations, bannières web.",
        " Création et Intégration des maquettes et chartes graphiques dans tout type d’environnement.",
        "Mettre en œuvre un 'responsive design' et assurer la compatibilité entre les différents navigateurs..",
        "Participer aux révisions de code et donner des commentaires constructifs aux autres développeurs.",
      ],
    },
    {
      title: "Développeur web",
      company_name: "A-Team",
      icon: ateam,
      iconBg: "#383E56",
      date: "Oct 2021 - Sept 2022",
      points: [
        "Participer à la conception, au développement et à la mise en œuvre de nouvelles fonctionnalités pour les applications web et mobiles. ( Principalement sur Wordpress).",
        "Collaborer avec l'équipe pour résoudre les problèmes techniques, optimiser les performances et améliorer l'expérience utilisateur.",
        "Participer aux revues de code et aux sessions de débogage pour garantir la qualité du code.",
        "Effectuer une veille technologique pour rester à jour avec les dernières tendances et les meilleures pratiques de développement.",
      ],
    },
    {
      title: "Développeur Freelance",
      company_name: "Yann",
      icon: monLogo,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Aujourd'hui",
      points: [
        "Créer et développer des objets, des visuels 3D pour le web",
        "Créer des maquettes en suivant la charte graphique et les souhaits des clients.",
        "Implémenter les sites web en respectant les maquettes, rendre ces sites compatibles avec les différentes tailles d'écran et navigateurs.",
        "Curieux de nature, je m'intéresse aux nouvelles technologies afin d'apporter aux clients créativité et inventivité.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Je croyais qu'il était impossible de créer un site aussi beau que le notre, mais Yann m'a prouvé le contraire.",
      name: "Christine Besnard",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Je n’ai jamais rencontré un développeur web qui se soucie vraiment du succès de ses clients comme Yann.",
      name: "jean-Baptiste Larcher",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Après que Yann ait optimisé notre site Web, notre trafic a augmenté de 50 %. Nous ne saurions trop le remercier!",
      name: "Sylvie Hoareau",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "METAVERSUS",
      description:
        "Une application pour démontrer la puissance de Next.js 13, ainsi que ma créativté, mon inventivité. J'ai pris beaucoup de plaisir à créer cette petite application.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "https://metaversus-madness-nu.vercel.app/",
    },
    {
      name: "A Cœur Joie ",
      description:
        "Un site pour l'association 'À Cœur Joie - Pôle Ile-de-France.' Une association qui promeut le chant choral, qui réunit amateurs et professionnels de tous âges.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ACJoie,
      source_code_link: "https://www.chorales-idf.org/",
    },
    {
      name: "Sushiman",
      description:
        "Un beau site, avec un design UI/UX moderne et très plaisant, de belles animations très fluides, pour un restaurant de Sushis Japonais.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: sushiman,
      source_code_link: "https://sushiman-rho.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };